import React from "react";
import FitCard from "../components/FitCard";
import Box from "@mui/material/Box/Box";
import style from "./WorkoutPage.module.css";
import chest from "../image/chest.jpg";
import abs from "../image/abs.jpg";
import shoulder from "../image/shoulder.jpg";
import back from "../image/back.jpg";
import leg from "../image/leg.jpg";
import biceps from "../image/biceps.jpg";
import triceps from "../image/triceps.jpg";
import forearms from "../image/forearms.jpg";

const FIT_CARD = [
  { key: 'chest', txt: "Chest", image: chest },
  { key: 'abs', txt: "Abs", image: abs },
  { key: 'legs', txt: "Legs", image: leg },
  { key: 'back', txt: "Back", image: back },
  { key: 'shoulder', txt: "Shoulder", image: shoulder },
  { key: 'biceps', txt: "Biceps", image: biceps },
  { key: 'forearms', txt: "Forearms", image: forearms },
  { key: 'triceps', txt: "Triceps", image: triceps },
];

const WorkoutPage = () => {
  return (
    <Box className={style.workoutBox}>
      {FIT_CARD.map(({ txt, image, key }) => (
        <FitCard txt={txt} image={image} key={key} id= {key}/>
      ))}
    </Box>
  );
};

export default WorkoutPage;
