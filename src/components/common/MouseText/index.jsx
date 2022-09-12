import { Text } from "theme-ui";
import useMousePosition from "../../../utils/useMousePosition";

const MouseText = ({ children }) => {
  const mousePosition = useMousePosition();
  return (
    <Text
      sx={{
        position: "fixed",
        top: mousePosition.y + 20 + "px",
        left: mousePosition.x + 15 + "px",
        pointerEvents: "none",
        fontWeight: "bold"
      }}
    >
      {children}
    </Text>
  );
};

export default MouseText;
