import { ThemeProvider } from "theme-ui";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Sher Sheikh</h1>
      <div id="bg" />
    </ThemeProvider>
  );
};

export default App;
