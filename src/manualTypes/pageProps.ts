import { IconType } from "react-icons";

export type TSubMenuLinks = {
  title: string;
  url: string;
};

export type TSubMenuContacts = {
  icon: IconType;
  location: string;
};
export type TSubMenu = TSubMenuLinks | TSubMenuContacts;

export type TMenuProps = {
  headTitle: string;
  subMenus: TSubMenu[];
};
