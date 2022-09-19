import { keyframes } from "@emotion/react";
import { useRef } from "react";
import { useEffect } from "react";
import { Text } from "theme-ui";

const fadeInOut = keyframes`
    0% {
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const Toast = ({ length, index, close, children }) => {
  const savedCallback = useRef(close);

  useEffect(() => {
    savedCallback.current = close;
  }, [close]);

  useEffect(() => {
    const id = setTimeout(() => savedCallback.current(), length);
    return () => clearTimeout(id);
  }, [length]);

  return (
    <Text
      as="div"
      sx={{
        fontSize: [1, 2],
        padding: "10px 10px",
        borderRadius: "3px",
        animation: `${fadeInOut} ${length / 1000}s ease`,
        animationFillMode: "both",
        fontWeight: "bold",
        textShadow: "-5px 5px 10px rgba(0,0,0,0.5)",
        position: "absolute",
        transform: `translateY(calc(-100% * ${index * 1.1}))`,
        transition: "transform 0.25s ease"
      }}
    >
      {children}
    </Text>
  );
};

export default Toast;
