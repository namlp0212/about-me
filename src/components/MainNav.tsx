import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// export const NavList = [
//   {
//     name: "Projects",
//     href: "/projects",
//   },
//   {
//     name: "Guestbook",
//     href: "/guestbook",
//   },
//   {
//     name: "Contact",
//     href: "/contact",
//   },
//   {
//     name: "About",
//     href: "/about",
//   },
//   {
//     name: "Uses",
//     href: "/uses",
//   },
// ];

export const NavList = [
  {
    name: "Blogs",
    href: "/blogs"
  },
  {
    name: "Work projects",
    href: "/workProjects"
  },
  // {
  //   name: "Projects",
  //   href: "/projects",
  // },
  // {
  //   name: "Guestbook",
  //   href: "/guestbook",
  // },
  // {
  //   name: "Contact",
  //   href: "/contact",
  // },
  {
    name: "About",
    href: "/about",
  },
  // {
  //   name: "Uses",
  //   href: "/uses",
  // },
];

const MainNav = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  
  return (
    <>
      <div className="flex gap-10">
        {NavList.map((item, index) => (
          <div key={index}>
            <Link
              href={item.href}
              className={`text-[0.8rem] md:text-[1rem] font-medium text ${
                isActive("/projects")
                  ? "text-[#fff]"
                  : isActive(item.href)
                    ? "text-black dark:text-white"
                    : "text-foreground/60"
              }`}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainNav;
