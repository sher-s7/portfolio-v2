import { keyframes } from "@emotion/react";
import { Text } from "theme-ui";
import useMousePosition from "../../../utils/useMousePosition";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

const MouseText = ({ children, monospace = false, background = false }) => {
  const mousePosition = useMousePosition();
  const isDesktop = window.matchMedia("(min-width: 1100px)");
  return (
    isDesktop.matches &&
    mousePosition.x &&
    mousePosition.y && (
      <Text
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          transform: `translate(${mousePosition.x + 15 + "px"}, ${
            mousePosition.y + 20 + "px"
          })`,
          pointerEvents: "none",
          fontWeight: !monospace && "bold",
          fontFamily: monospace && "monospace",
          backgroundColor: background && "rgba(0,0,0,0.8)",
          padding: background && "5px 10px",
          animation: `${fadeIn} 0.25s ease`,
          textShadow: "-5px 5px 15px rgba(0,0,0,0.3)"
        }}
      >
        {children}
      </Text>
    )
  );
};

export default MouseText;
