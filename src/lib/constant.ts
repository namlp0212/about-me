import { Props } from "@/types";
import {
  Case,
  Chair,
  Cooler,
  Cpu,
  Disk,
  Graphics,
  Headset,
  Keyboard,
  Memory,
  Microphone,
  Monitor,
  Motherboard,
  Mouse,
  Power,
  anydo,
  apps,
  discord,
  figma,
  git,
  mongodb,
  postman,
  powershell,
  skype,
  spotify,
  vscode,
} from "../../public/assets";

import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin
} from "react-icons/si";


export const SOCIALS: Props = [
  {
    href: "https://github.com/namlp0212",
    title: "GitHub",
    icon: SiGithub,
  },
  {
    href: "https://www.facebook.com/profile.php?id=100024662077089&locale=vi_VN",
    title: "Facebook",
    icon: SiFacebook,
  },
  {
    href: "https://www.instagram.com/namlephuong2000/",
    title: "Instagram",
    icon: SiInstagram,
  },
  {
    href: "https://www.linkedin.com/in/nam-l%C3%AA-a2a8b0327/",
    title: "Linkedin",
    icon: SiLinkedin,
  },
];


export const HardwareList = [
  {
    id: 1,
    img: Monitor,
    title: "TUF Gaming VG27VQ",
    description: "Monitor",
  },
  {
    id: 2,
    title: "logitech g pro x superlight",
    img: Mouse,
    description: "Mouse",
  },
  {
    id: 3,
    title: "ROYAL KLUDGE RK61",
    img: Keyboard,
    description: "Keyboard",
  },
  {
    id: 4,
    title: "RTX 3060 TI",
    img: Graphics,
    description: "Graphics card",
  },
  {
    id: 5,
    title: "AMD Ryzen 5 5600X",
    img: Cpu,
    description: "CPU",
  },
  {
    id: 6,
    title: "32GB 3200MHZ",
    img: Memory,
    description: "Memory",
  },
  {
    id: 7,
    title: "Aigo ACSE240",
    img: Cooler,
    description: "Water Cooler",
  },
  {
    id: 8,
    title: "ASUS ROG Strix",
    img: Motherboard,
    description: "Motherboard",
  },
  {
    id: 9,
    title: "SSD 1000GB",
    img: Disk,
    description: "Ssd",
  },
  {
    id: 11,
    title: "Mars Gaming",
    img: Case,
    description: "Case",
  },
  {
    id: 12,
    title: "Logitech g933",
    img: Headset,
    description: "Headset",
  },
  {
    id: 13,
    title: "HyperX Quadcast",
    img: Microphone,
    description: "Microphone",
  },
  {
    id: 14,
    title: "Power Supply 750W Tuf",
    img: Power,
    description: "Power Supply",
  },
  {
    id: 15,
    title: "Ergonomic chair",
    img: Chair,
    description: "Chair",
  },
];

export const SoftwareList = [
  {
    id: 1,
    img: mongodb,
    title: "MongoDB Compass",
    description: "Database",
  },
  {
    id: 2,
    title: "insomnia",
    img: apps,
    description: "API client",
  },
  {
    id: 3,
    title: "Anydo",
    img: anydo,
    description: "To-do lists",
  },
  {
    id: 4,
    title: "Skype",
    img: skype,
    description: "Messaging Service ",
  },
  {
    id: 5,
    title: "Git Bash",
    img: git,
    description: "Command Interface",
  },
  {
    id: 6,
    title: "Spotify",
    img: spotify,
    description: "Music Streaming",
  },
  {
    id: 7,
    title: "PowerShell",
    img: powershell,
    description: "Automation Tool",
  },
  {
    id: 8,
    title: "Postman",
    img: postman,
    description: "API Testing",
  },
  {
    id: 9,
    title: "Figma",
    img: figma,
    description: "Design Software",
  },
  {
    id: 10,
    title: "Discord",
    img: discord,
    description: "Communication Platform",
  },
  {
    id: 11,
    title: "VSCode",
    img: vscode,
    description: "Code Editor",
  },
];

