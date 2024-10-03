import { ConfigServerImg, FitnessAssesmentImg, GateWayServiceImg, EventDrivenImg, ELKStackImg, LogstashImg, ElasticsearchImg, AOPImg, GymMistakeImg } from "../../public/assets";
import { SiNextdotjs } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { BlogStudy } from "@/types";

const blogsList: BlogStudy[] = [
  {
    imgSrc: ConfigServerImg,
    ProjectImg: ConfigServerImg,
    icon: SiNextdotjs,
    title: "Dev tech",
    subtitle: "Tạo service config trong kiến trúc miccroservices",
    Summary: "Kiến trúc microservices",
    shortDescription: "Config service là một service không thể thiếu trong kiến trúc microservices, giúp nâng cao hiệu suất, bảo mật và khả năng quản lý của hệ thống",
    description:
      "This full-stack food ordering ",
    websiteLink: "",
    skills: ["tech", "microservices", "software"]
  },
  {
    imgSrc: FitnessAssesmentImg,
    ProjectImg: FitnessAssesmentImg,
    icon: SiNextdotjs,
    title: "Fitness",
    subtitle: "Đánh giá sức khoẻ thể chất",
    Summary: "Kiến thức tập gym",
    shortDescription: "Có 5 tiêu chí đánh giá sức khoẻ thể chất gồm: sự dẻo dai của hệ tim mạch, sức mạnh cơ bắp, sự dẻo dai của cơ bắp, độ linh hoạt của cơ thể và cuối cùng là cấu tạo cơ thể con người (phần trăm cơ, mỡ, cân nặng, ...). Việc rèn luyện tất cả các tiêu chi giúp cơ thể trở nên khoẻ mạnh hơn.",
    description:
      "This full-stack food ordering ",
    websiteLink: "",
    skills: ["gym", "strong", "base acknowledge"]
  },
  {
    imgSrc: GateWayServiceImg,
    ProjectImg: GateWayServiceImg,
    icon: SiNextdotjs,
    title: "Dev tech",
    subtitle: "Gateway service trong kiến trúc microservices",
    Summary: "Kiến trúc microservices",
    shortDescription: "Gateưay service là một thành phần quan trọng, có nhiệm vụ đóng vai trò như một điểm truy cập duy nhất cho các client khi tương tác với nhiều microservices khác nhau.",
    description:
      "This full-stack food ordering ",
    websiteLink: "",
    skills: ["tech", "microservices", "software"]
  },
  {
    imgSrc: EventDrivenImg,
    ProjectImg: EventDrivenImg,
    icon: SiNextdotjs,
    title: "Dev tech",
    subtitle: "Event driven trong kiến trúc microservices",
    Summary: "Kiến trúc microservices",
    shortDescription: "Kiến trúc event-driven là một mô hình thiết kế mà trong đó các dịch vụ giao tiếp với nhau thông qua các sự kiện (event) thay vì gọi trực tiếp (synchronous calls)",
    description:
      "This full-stack food ordering ",
    websiteLink: "",
    skills: ["tech", "microservices", "software"]
  },
  {
    imgSrc: ELKStackImg,
    ProjectImg: ELKStackImg,
    icon: SiNextdotjs,
    title: "Dev tech",
    subtitle: "Quản lý Log với tech stack EFK",
    Summary: "Kiến trúc microservices",
    shortDescription: "Việc quản lý log hệ thống là một việc quan trong để theo dõi tình trạng hoạt động. EFK ra đời giúp cho việc quản lý log được thuận tiện và trực quan hơn",
    description:
      "This full-stack food ordering ",
    websiteLink: "",
    skills: ["tech", "transfer data", "log"]
  },
  {
    imgSrc: LogstashImg,
    ProjectImg: LogstashImg,
    icon: SiNextdotjs,
    title: "Dev tech",
    subtitle: "Data synchronize với công cụ logstash",
    Summary: "Kiến trúc microservices",
    shortDescription: "Logstash là một công cụ mạnh mẽ trong hệ sinh thái Elastic Stack, thường được sử dụng để thu thập, xử lý và chuyển đổi dữ liệu từ nhiều nguồn khác nhau vào Elasticsearch.",
    description:
      "This full-stack food ordering ",
    websiteLink: "",
    skills: ["tech", "transform data", "log"]
  },
  {
    imgSrc: ElasticsearchImg,
    ProjectImg: ElasticsearchImg,
    icon: SiNextdotjs,
    title: "Dev tech",
    subtitle: "Tìm kiếm mượt hơn với Elasticsearch?",
    Summary: "Kiến trúc microservices",
    shortDescription: "Elasticsearch là một công cụ tìm kiếm và phân tích dữ liệu mạnh mẽ, được xây dựng trên nền tảng Apache Lucene. Nó cho phép người dùng lưu trữ, tìm kiếm và phân tích dữ liệu một cách nhanh chóng và hiệu quả.",
    description:
      "This full-stack food ordering ",
    websiteLink: "",
    skills: ["tech", "transform data", "search"]
  },
  {
    imgSrc: AOPImg,
    ProjectImg: AOPImg,
    icon: SiNextdotjs,
    title: "Dev tech",
    subtitle: "Lập trình hướng khía cạnh và ứng dụng",
    Summary: "Kiến trúc microservices",
    shortDescription: "Lập trình hướng khía cạnh (Aspect-Oriented Programming - AOP) là một phương pháp lập trình nhằm tách biệt các mối quan tâm khác nhau trong một ứng dụng, giúp cải thiện khả năng bảo trì, tái sử dụng và cấu trúc mã nguồn.",
    description:
      "This full-stack food ordering ",
    websiteLink: "",
    skills: ["tech", "code tips", "java"]
  },
  {
    imgSrc: GymMistakeImg,
    ProjectImg: GymMistakeImg,
    icon: SiNextdotjs,
    title: "Fitness",
    subtitle: "Lỗi thường gặp khi bắt đầu đi tập",
    Summary: "Kiến thức tập gym",
    shortDescription: "Để đạt được kết quả tốt trong quá trình tập gym, hãy chú ý đến kỹ thuật, chế độ dinh dưỡng, và lắng nghe cơ thể của bạn. Nếu cần, hãy tìm sự hướng dẫn từ huấn luyện viên chuyên nghiệp để đảm bảo bạn đang tập luyện đúng cách.",
    description:
      "This full-stack food ordering ",
    websiteLink: "",
    skills: ["gym", "strong", "base acknowledge"]
  },
];

export default blogsList;