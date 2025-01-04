import { USER_ROLE } from "constants/role";
import { IconType } from "react-icons/lib";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type TSuccessResponseBody = {
  data?: any;
  meta?: TMeta;
  statusCode?: number;
  success?: boolean;
  message?: string;
};

export type TErrorResponseBody = {
  statusCode?: number;
  success?: boolean;
  message?: string;
  errorMessage?: TErrorMEssage[];
};

export type TErrorMEssage = {
  path: string | number;
  message: string;
};

export type TUserRole = keyof typeof USER_ROLE;

export interface TDrawerItem {
  label: string;
  href: string;
  currentPath?: string;
  icon?: IconType | any;
  children?: TDrawerItem[];
}

export type TDataTableProps = {
  rows: any[];
  columns: any[];
  isLoading: boolean;

  sx?: any;
};

export type TDeleteModalProps = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  endpoint: string;
};
export type TDialogProps = {
  open: boolean;
  handleClose: () => void;
  textTitle: string;
  formFields: any[];
  schema: any;
  formData?: boolean;
  endpoint: string;
  defaultValues: any;
  retrieveDataLoading: boolean;
  pathEndpoint?: string;
};
