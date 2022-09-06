import { ThemeProvider } from "theme-ui";
import Main from "./components/Menu";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
      <div id="bg" />
    </ThemeProvider>
  );
};

export default App;
