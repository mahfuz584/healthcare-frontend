import { AiFillSchedule } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export const doctorNavItems = (role: string) => {
  return [
    {
      label: "Dashboard",
      href: `${role}`,
      icon: MdDashboard,
    },
    {
      label: "Appointments",
      href: `${role}/appointments`,
      icon: FaBookmark,
    },
    {
      label: "Schedules",
      href: `${role}/schedules`,
      icon: AiFillSchedule,
    },
  ];
};
