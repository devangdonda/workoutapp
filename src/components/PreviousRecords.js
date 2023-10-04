import { Typography } from '@mui/material';
import React from 'react';

const PreviousRecords = (props) => {
    return (
        <Typography
              variant="body2"
              sx={{ boxSizing: "border-box", margin: "5px" }}
            >
              Set: {props.set}
              <br />
              Reps: {props.reps}
              <br />
              Lbs: {props.lbs}
            </Typography>
    );
};

export default PreviousRecords;