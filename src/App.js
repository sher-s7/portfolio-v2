import { useState } from "react";
import { Flex, Link, ThemeProvider } from "theme-ui";
import About from "./components/About";
import Toast from "./components/common/Toast";
import Contact from "./components/Contact";
import Main from "./components/Menu";
import Project from "./components/Projects";
import Puzzle from "./components/Puzzle";
import Resume from "./components/Resume";
import { ToastsContext } from "./context/Toasts";
import theme from "./theme";
import { ReactComponent as Github } from "./assets/github.svg";
import ScrollToTop from "./components/common/ScrollToTop";

const TOAST_LENGTH = 3000;
let toastCounter = 0;

const App = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (toastText) => {
    if (!toasts.find((toast) => toast.text === toastText)) {
      setToasts((toasts) => [...toasts, { id: toastCounter, text: toastText }]);
      toastCounter++;
    }
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastsContext.Provider value={{ toasts, addToast, removeToast }}>
        <Main />
        <Project />
        <About />
        <Contact />
        <Resume />
        <Puzzle />
        <Flex
          sx={{
            justifyContent: "center",
            py: "50px",
            svg: { width: "50px", height: "auto" }
          }}
        >
          <Link
            href="https://github.com/sher-s7/"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </Link>
        </Flex>
        <ScrollToTop />
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            position: "fixed",
            width: "100%"
          }}
        >
          {toasts.map((toast, index) => (
            <Toast
              key={toast.id}
              index={index}
              length={TOAST_LENGTH}
              close={() => removeToast(toast.id)}
            >
              {toast.text}
            </Toast>
          ))}
        </Flex>
        <div id="bg" />
      </ToastsContext.Provider>
    </ThemeProvider>
  );
};

export default App;
