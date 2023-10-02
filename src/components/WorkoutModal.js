import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ColorButton from "./ColorButton";
import TextField from "@mui/material/TextField";
import { Form } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "30vh",
  width: "70vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

export default function WorkoutModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function addWorkoutHandler(workout) {
    const response = await fetch(
      `https://website-783f4-default-rtdb.firebaseio.com//workout/${props.id}.json`,
      {
        method: "POST",
        body: JSON.stringify({ key: props.id, id: props.id, workout: workout }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
  }
  function workoutSubmitHandler(event) {
    props.updateList({ key: props.id, id: props.id, workout: event.target[0].value });
    event.preventDefault();
    addWorkoutHandler(event.target[0].value);
    
    setOpen(false);
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {console.log("modal was rendered")}
      <ColorButton onClick={handleOpen}>Add Workout</ColorButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            gutterBottom
            align="center"
            id="modal-modal-title"
            variant="h5"
          >
            Enter Workout Name Here
          </Typography>
          <Box
            component='form'
            sx={{
              "& > :not(style)": { m: 1 },
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            noValidate
            autoComplete="off"
            onSubmit={workoutSubmitHandler}
          >
            <TextField
              id="workoutName"
              name="workoutName"
              label="Workout"
              variant="outlined"
              sx={{ width: "100%" }}
            />
            <ColorButton
              type="submit"
              sx={{ width: "100%", marginTop: "10px" }}
            >
              OK
            </ColorButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
