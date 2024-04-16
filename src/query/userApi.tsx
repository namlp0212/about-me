import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery, useQueryClient } from "react-query";

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export type Review = {
  user: string;
  message: string;
  email: string;
  name: string;
  image: string;
  auth0Id: string;
};

interface ReviewResponse {
  _id: string;
  user: {
    sub?: string;
    name: string;
    email: string;
    image: string;
    auth0Id: string;
  };
  message: string;
}

export const useCreateUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyUserRequest);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};

export const useFetchReviews = () => {
  return useQuery<ReviewResponse[], Error>(
    "reviews",
    async (): Promise<ReviewResponse[]> => {
      const response = await fetch("/api/review", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );
};

export const useCreateReview = () => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const createReview = async (review: Review): Promise<ReviewResponse> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch("/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(review),
    });

    if (!response.ok) {
      throw new Error("Failed to submit review");
    }

    return response.json();
  };

  return useMutation<ReviewResponse, Error, Review>(createReview, {
    onSuccess: (newReview) => {
      queryClient.setQueryData<ReviewResponse[]>('reviews', (oldReviews = []) => [
        ...oldReviews,
        {
          ...newReview,
          user: {  // Ensure this structure matches what your component expects
            ...newReview.user,
            name: newReview.user.name,
            email: newReview.user.email,
            image: newReview.user.image,
            auth0Id: newReview.user.auth0Id,
          },
        }
      ]);
      // Optionally refetch the reviews query to ensure it's up to date
      queryClient.invalidateQueries('reviews');
    },
  });
};


export const useDeleteReview = () => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const deleteReview = async (reviewId: string) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`/api/review/${reviewId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete review");
    }

    return response.json();
  };

  return useMutation<void, Error, string>(deleteReview, {
    onSuccess: () => {
      queryClient.invalidateQueries("reviews");
    },
  });
};