import React, { useState, useEffect, useCallback } from "react";
import Typography from "@mui/material/Typography/Typography";
import style from "./WorkListPage.module.css";
import Box from '@mui/material/Box/Box';
import WorkListCard from "../components/WorkListCard";
import WorkoutModal from "../components/WorkoutModal";
import { useLoaderData, useParams } from "react-router-dom";

const WorkListPage = () => {
  const params = useParams();
  const id = params.listID;
  const [workoutList, setWorkoutList] = useState([]);
  const data = useLoaderData();
  const newList = []
  useEffect(() => {
    const newList = [];
    for (const key in data) {
      newList.push({
        workout: data[key].workout,
        id: data[key].key,
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
          <WorkListCard key={item.key} name={item.workout} />
        ))}
        <WorkoutModal updateList={updateList} id={id} />
        
    </Box>
  );
};
 export const loader = async ({ params }) => {
  const response = await fetch(
    `https://website-783f4-default-rtdb.firebaseio.com/workout/${params.listID}.json`
  );
  const data = await response.json();
  return data;
}; 

export default WorkListPage;
