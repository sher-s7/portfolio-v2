import { useState } from "react";
import { Flex, ThemeProvider } from "theme-ui";
import About from "./components/About";
import Toast from "./components/common/Toast";
import Contact from "./components/Contact";
import Main from "./components/Menu";
import Project from "./components/Projects";
import { ToastsContext } from "./Context/Toasts";
import theme from "./theme";

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
