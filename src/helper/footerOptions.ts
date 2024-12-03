import { IoCallSharp, IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export const footerNavigationLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Consultation",
    url: "/consultation",
  },
  {
    title: "Health Plans",
    url: "/health-plans",
  },
  {
    title: "Medicine",
    url: "/medicine",
  },
  {
    title: "Designation",
    url: "/designation",
  },
  {
    title: "NGOs",
    url: "/ngos",
  },
];

export const quickLinks = [
  {
    title: "Register",
    url: "/register",
  },
  {
    title: "Appointment",
    url: "/appointment",
  },
  {
    title: "FAQ",
    url: "/faq",
  },
  {
    title: "Privacy Policy",
    url: "/privacy-policy",
  },
];

export const footerOptionsContacts = [
  {
    icon: IoLocation,
    location:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ratione.",
  },
  {
    icon: MdEmail,
    location: "medifax@gmail.com",
  },
  {
    icon: IoCallSharp,
    location: "+880 123 456 789",
  },
];
