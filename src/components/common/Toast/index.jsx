import { keyframes } from "@emotion/react";
import { useEffect } from "react";
import { Text } from "theme-ui";

const fadeInOut = keyframes`
    0% {
        opacity: 0;
        transform: translateY(5px);
    }
    10% {
        opacity: 1;
        transform: translateY(0);
    }
    90% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(5px);
    }
`;

const Toast = ({ length, children }) => {
  return (
    <Text
      as="div"
      sx={{
        fontSize: [1, 2],
        color: "gradient",
        padding: "10px 10px",
        borderRadius: "3px",
        // animation: `${fadeInOut} ${length / 1000}s ease`,
        animationFillMode: "both",
        fontWeight: "bold",
        textShadow: "-5px 5px 10px rgba(0,0,0,0.1)"
      }}
    >
      {children}
    </Text>
  );
};

export default Toast;
