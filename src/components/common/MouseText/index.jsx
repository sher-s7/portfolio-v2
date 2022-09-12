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

const MouseText = ({ children }) => {
  const mousePosition = useMousePosition();
  return (
    <Text
      sx={{
        position: "fixed",
        top: mousePosition.y + 20 + "px",
        left: mousePosition.x + 15 + "px",
        pointerEvents: "none",
        fontWeight: "bold",
        animation: `${fadeIn} 0.25s ease`
      }}
    >
      {children}
    </Text>
  );
};

export default MouseText;
