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
        borderRadius: "6px",
        animation: `${fadeInOut} ${length / 1000}s ease`,
        animationFillMode: "both",
        fontWeight: "bold",
        background: "linear-gradient(45deg, #111111 0%, #262626 100%)",
        boxShadow: "-3px 5px 15px rgba(0, 0, 0, 0.2)",
        position: "absolute",
        transform: `translateY(calc(-100% * ${index * 1.2}))`,
        transition: "transform 0.25s ease",
        pointerEvents: "none"
      }}
    >
      {children}
    </Text>
  );
};

export default Toast;
