import { TDrawerItem, TUserRole } from "@/types/common";
import { adminNavItems } from "@helper/userBasedNavItems/adminNavItems";
import { doctorNavItems } from "@helper/userBasedNavItems/doctorNavItems";
import { patientNavItems } from "@helper/userBasedNavItems/patientNavItems";
import { superAdminNavItems } from "@helper/userBasedNavItems/superAdminNavItems";
import { USER_ROLE } from "constants/role";

export const generateDrawerItem = (role: TUserRole): TDrawerItem[] => {
  const roleBasedMenus: TDrawerItem[] = [];
  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      [...superAdminNavItems(role)].map((item) => roleBasedMenus.push(item));
      break;
    case USER_ROLE.ADMIN:
      [...adminNavItems(role)].map((item) => roleBasedMenus.push(item));
      break;
    case USER_ROLE.DOCTOR:
      [...doctorNavItems(role)].map((item) => roleBasedMenus.push(item));
      break;
    case USER_ROLE.PATIENT:
      [...patientNavItems(role)].map((item) => roleBasedMenus.push(item));
      break;
    default:
      break;
  }
  return [...roleBasedMenus];
};
