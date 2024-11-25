import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";


const DashboardLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;

  }
  // const theme = useTheme();

  // const [selected, setSelected] = useState(0);

  // console.log(theme);

  // const { onToggleMode } = useSettings();

  return (
    <Stack direction="row">
      {/* SideBar */}
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
