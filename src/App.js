import { useEffect, useState } from "react";
import { Flex, ThemeProvider } from "theme-ui";
import About from "./components/About";
import Toast from "./components/common/Toast";
import Contact from "./components/Contact";
import Main from "./components/Menu";
import Project from "./components/Projects";
import theme from "./theme";

const TOAST_LENGTH = 3000;
let toastCounter = 0;

const App = () => {
  const [toastTimers, setToastTimers] = useState([]);

  useEffect(() => {
    return () => {
      toastTimers.forEach(({ timerId }) => clearTimeout(timerId));
    };
  }, []);

  useEffect(() => {
    console.log(toastTimers);
  }, [toastTimers]);

  const addToast = (toastText) => {
    const timerId = setTimeout(removeToast, TOAST_LENGTH, ++toastCounter);
    setToastTimers((timers) =>
      timers.concat({ toastText, timerId, id: toastCounter })
    );
  };

  const removeToast = (id) => {
    setToastTimers((timers) => timers.filter((timer) => timer.id !== id));
  };
  return (
    <ThemeProvider theme={theme}>
      <Main />
      <Project />
      <About />
      <Contact addToast={addToast} />
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          position: "fixed",
          width: "100%"
        }}
      >
        {toastTimers.map((timer) => (
          <Toast key={timer.timerId} length={TOAST_LENGTH}>
            {timer.toastText}
          </Toast>
        ))}
      </Flex>
      <div id="bg" />
    </ThemeProvider>
  );
};

export default App;
