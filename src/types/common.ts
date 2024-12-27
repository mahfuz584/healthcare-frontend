import { USER_ROLE } from "constants/role";
import { IconType } from "react-icons/lib";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type TUserRole = keyof typeof USER_ROLE;

export interface TDrawerItem {
  label: string;
  href: string;
  currentPath?: string;
  icon?: IconType | any;
  children?: TDrawerItem[];
}
