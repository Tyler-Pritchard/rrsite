import { Main, Footer } from "./components/index";
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import GlobalStyle from "./globalStyles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#f44336',
    },
  },
});

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <GlobalStyle />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
