import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ColorButton from "./ColorButton";
import { useNavigate } from "react-router-dom";

export default function WorkListCard(props) {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: "90vw", marginBottom: "6rem" }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Previous Records
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
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
          </Box>
        </CardContent>
        <CardActions>
          <ColorButton
            size="small"
            sx={{ marginBottom: "6px", marginLeft: "6px" }}
            onClick={() => navigate(`${props.id}`)}
          >
            Work OUT
          </ColorButton>
        </CardActions>
      </Card>
    </Box>
  );
}
