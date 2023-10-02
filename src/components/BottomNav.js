import React from "react";
import "./BottomNav.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BarChartIcon from "@mui/icons-material/BarChart";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Paper
      variant="elevation"
      elevation={24}
      square={false}
      sx={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        boxSizing: "border-box",
        height: 'fit-content'
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        sx={{ background: "linear-gradient(to right, #1DD882, #06B26B)"}}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Progress"
          className={value === 0 ? "clicked" : ""}
          icon={<BarChartIcon style={{ fontSize: "1.7rem" }} />}
          component={NavLink}
          to="progress"
        />
        <BottomNavigationAction
          label="Workout"
          className={value === 1 ? "clicked" : ""}
          icon={<FitnessCenterIcon style={{ fontSize: "1.7rem" }} />}
          component={NavLink}
          to="workout"
        />
        <BottomNavigationAction
          label="Food"
          className={value === 2 ? "clicked" : ""}
          icon={<RestaurantMenuIcon style={{ fontSize: "1.7rem" }} />}
          component={NavLink}
          to="food"
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
