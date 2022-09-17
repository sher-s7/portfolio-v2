import { ThemeProvider } from "theme-ui";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Menu";
import Project from "./components/Projects";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
      <Project />
      <About />
      <Contact />
      <div id="bg" />
    </ThemeProvider>
  );
};

export default App;
