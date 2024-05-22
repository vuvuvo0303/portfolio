import { link } from "fs";
import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
];

export const Socials = [
  {
    name: "Facebook",
    src: "/facebook.svg",
    link: "https://www.facebook.com/profile.php?id=100012595548485",
  },
  {
    name: "Instagram",
    src: "/instagram.svg",
    link: "https://www.instagram.com/fptuniversityhcm/?hl=en",
  },
  {
    name: "Github",
    src: "/githublogi.png",
    link: "https://github.com/vuvuvo0303",
  },
];
export const Projects = [
  {
    title: "Dashboard Website",
    text: "Dashboard with api from backend",
    src: "/dashboard.png",
  },
  {
    title: "Booking party for kids Website",
    text: "A website completed and deployed , collab FE & Be-Link website:irthdayblitzhub.online",
    src: "/websitebooking.png",
  },
  {
    title: "To Do List",
    text: "TodoList with typescrip",
    src: "/todolist.jpg",
  },
  {
    title: "Web Film clone",
    text: "Website film clone with react,firebase,antd",
    src: "/filmclone.jpg",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];
