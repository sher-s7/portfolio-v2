import { ThemeProvider } from "theme-ui";
import Main from "./components/Menu";
import Project from "./components/Projects";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
      <Project />
      <div id="bg" />
    </ThemeProvider>
  );
};

export default App;
