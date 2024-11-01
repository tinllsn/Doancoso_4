import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {

  return (
    <>
      <Box sx={{backgoundColor: "black", height: "'100vh", width: 100}}> 

      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
