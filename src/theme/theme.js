import { createTheme } from "@mui/material";

const secondaryPalette = {
  main: '#536DFE',
  secondary: '#FF5C93',
  highlight: '#FFC107',
  background: '#F5F5F5',
  text: '#212121',
};


const themeOptions = {
  palette: {
    primary: secondaryPalette,
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontSize: '16px',
          padding: '13px 10px'
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          paddingTop: 0
        }
      }
    }
  },
};

const theme = createTheme(themeOptions);

export default theme
