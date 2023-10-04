import React, { useState, useEffect, useCallback } from "react";
import Typography from "@mui/material/Typography/Typography";
import style from "./WorkListPage.module.css";
import Box from '@mui/material/Box/Box';
import WorkListCard from "../components/WorkListCard";
import WorkoutModal from "../components/WorkoutModal";
import { useRouteLoaderData, useParams } from "react-router-dom";

const WorkListPage = () => {
  const params = useParams();
  const id = params.listID;
  const [workoutList, setWorkoutList] = useState([]);
  let data = useRouteLoaderData('workout');
  data = data[0]
  useEffect(() => {
    const newList = [];
    for (const key in data) {
      newList.push({
        workout: data[key].workout,
        key: data[key].key,
        id: data[key].id
      });
    }
    setWorkoutList(newList);
  }, [data]);
  
  const updateList = useCallback((workObj) => {
    setWorkoutList((oldList) => [...oldList, workObj]);
  }, []);
  

  return (
    <Box className={style.workoutListContainer}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          mt={4}
          component="h2"
        >
          Workouts
        </Typography>
        {console.log('this was rendered')}
        {workoutList.map((item) => (
          <WorkListCard key={item.key} id={item.key} name={item.workout} />
        ))}
        <WorkoutModal updateList={updateList} id={id} />
        
    </Box>
  );
}; 

export default WorkListPage;
