import { ThemeProvider } from "theme-ui";
import About from "./components/About";
import Main from "./components/Menu";
import Project from "./components/Projects";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
      <Project />
      <About />
      <div id="bg" />
    </ThemeProvider>
  );
};

export default App;
