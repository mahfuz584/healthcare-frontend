import { MdDashboard, MdGroups2 } from "react-icons/md";

export const superAdminNavItems = (role: string) => {
  return [
    {
      label: "Dashboard",
      href: `${role}`,
      icon: MdDashboard,
    },
    {
      label: "Manage Users",
      href: `${role}/manage-users`,
      icon: MdGroups2,
    },
  ];
};
