import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import { green as lightGreen } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[500],
    '&:hover': {
      backgroundColor: lightGreen[700],
    },
  }));

export default ColorButton;
