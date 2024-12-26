import DashboardDrawer from "@/components/dahsboard/DashboardDawer/DashboardDawer";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardDrawer>{children}</DashboardDrawer>
    </div>
  );
};

export default DashboardLayout;
