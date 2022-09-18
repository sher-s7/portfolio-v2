import { keyframes } from "@emotion/react";
import { Box, Flex } from "theme-ui";

const spin = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(359deg);
    }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

const Loader = ({ size, color = "white", bg = "light" }) => {
  return (
    <Flex
      sx={{
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        position: "absolute",
        top: "0",
        left: "0",
        justifyContent: "center",
        alignItems: "center",
        animation: `${fadeIn} 0.2s ease`
      }}
    >
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: "50%",
          border: "2px solid",
          borderColor: bg,
          borderTopColor: color,
          animation: `${spin} 2s linear infinite`
        }}
      />
    </Flex>
  );
};

export default Loader;
