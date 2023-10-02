import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import LoginPage from "./LoginPage";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box/Box';

const RootPage = () => {
  const isLoggedIn = useSelector(state => state.login.value);
  
  return (
    <Box>
      <Outlet />
      {!isLoggedIn && <LoginPage />}
      {isLoggedIn && <BottomNav />}
    </Box>
  );
};

export default RootPage;
