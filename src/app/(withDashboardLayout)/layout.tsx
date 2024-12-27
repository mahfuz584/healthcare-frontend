import DashboardDrawer from "@/components/dahsboard/DashboardDawer/DashboardDawer";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardDrawer>{children}</DashboardDrawer>
    </>
  );
};

export default DashboardLayout;
