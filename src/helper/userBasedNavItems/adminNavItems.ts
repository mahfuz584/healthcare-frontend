import { AiFillSchedule } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import { MdDashboard, MdReviews } from "react-icons/md";
export const adminNavItems = (role: string) => {
  return [
    {
      label: "Dashboard",
      href: `${role}`,
      icon: MdDashboard,
    },
    {
      label: "Specialties",
      href: `${role}/specialties`,
      icon: GrUserExpert,
    },
    {
      label: "Doctors",
      href: `${role}/doctors`,
      icon: FaUserDoctor,
    },
    {
      label: "Schedules",
      href: `${role}/schedules`,
      icon: AiFillSchedule,
    },
    {
      label: "Appointments",
      href: `${role}/appointments`,
      icon: FaBookmark,
    },
    {
      label: "Reviews",
      href: `${role}/reviews`,
      icon: MdReviews,
    },
  ];
};
