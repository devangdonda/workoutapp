import { Button, Paper, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const SetForm = (props) => {
  const { listID, workLogID } = useParams();
  const postSet = async (workout) => {
    const response = await fetch(
      `https://website-783f4-default-rtdb.firebaseio.com/workout/${listID}/${workLogID}.json`,
      {
        method: "POST",
        body: JSON.stringify(workout),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Could not post set");
    }
  };

  const setSubmitHandler = (event) => {
    event.preventDefault();
    postSet({
      set: props.count,
      reps: event.target[0].value,
      lbs: event.target[2].value,
    });
  };
  return (
    <Paper
      elevation={5}
      component="form"
      autoComplete="off"
      sx={{
        width: "100%",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onSubmit={setSubmitHandler}
    >
      <Typography variant="h4" sx={{ margin: "10px" }}>
        Set {props.count}
      </Typography>
      <TextField
        id="reps"
        type="number"
        label="Reps"
        variant="outlined"
        sx={{ margin: "8px" }}
      />
      <TextField
        id="lbs"
        type="number"
        label="Lbs"
        variant="outlined"
        sx={{ margin: "8px" }}
      />
      <Button type="submit" variant="contained" sx={{ margin: "5px" }}>
        Ok
      </Button>
    </Paper>
  );
};

export default SetForm;
