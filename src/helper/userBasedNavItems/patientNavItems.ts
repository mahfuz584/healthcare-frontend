import { FaBookmark, FaFilePrescription } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";

export const patientNavItems = (role: string) => {
  return [
    {
      label: "Appointments",
      href: `${role}/appointments`,
      icon: FaBookmark,
    },
    {
      label: "Prescriptions",
      href: `${role}/prescriptions`,
      icon: FaFilePrescription,
    },
    {
      label: "Payment History",
      href: `${role}/payment-history`,
      icon: MdOutlinePayments,
    },
  ];
};
