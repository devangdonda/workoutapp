import { Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import ColorButton from "../components/ColorButton";
import SetForm from "../components/SetForm";
import { useRouteLoaderData, useParams } from "react-router-dom";

const WorkoutLogPage = () => {
  const [count, setCount] = useState(1);
  const [listOfSets, setListOfSets] = useState([]);
  const params = useParams();
  let data = useRouteLoaderData('workout');
  data = data[1];
  const addSetHandler = () => {
    setCount((prev) => prev + 1);
    console.log(count);
    setListOfSets((prev) => [...prev, count]);
    console.log(listOfSets);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          width: "90%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            width:'90%',
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            margin: '10px',
            background: 'lightBlue'
          }}
        >
          <Typography
            variant="body2"
            sx={{ boxSizing: "border-box", margin: "5px" }}
          >
            Set: 1
            <br />
            Reps: 10
            <br />
            Lbs: 60x
          </Typography>
          <Typography
            variant="body2"
            sx={{ boxSizing: "border-box", margin: "5px" }}
          >
            Set: 2
            <br />
            Reps: 10
            <br />
            Lbs: 60
          </Typography>
          <Typography
            variant="body2"
            sx={{ boxSizing: "border-box", margin: "5px" }}
          >
            Set: 3
            <br />
            Reps: 10
            <br />
            Lbs: 60
          </Typography>
        </Paper>
        <Box
          sx={{
            display: "flex",
            width: "90%",
            marginBottom: "6rem",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {listOfSets.map((item) => (
            <SetForm count={item} key={params.workLogID}/>
          ))}
          <ColorButton onClick={addSetHandler} sx={{ alignSelf: "flex-end" }}>
            Add Set
          </ColorButton>
        </Box>
      </Box>
    </Box>
  );
};

export const loader = async({params}) => {
  const response1 = await fetch(`https://website-783f4-default-rtdb.firebaseio.com/workout/${params.listID}/${params.workLogID}.json`);
  const data = await response1.json();

  const response2 = await fetch(
    `https://website-783f4-default-rtdb.firebaseio.com/workout/${params.listID}.json`
  );
  const workListData = await response2.json();
  return [workListData,data];
}

export default WorkoutLogPage;
