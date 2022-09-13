import { Box } from "theme-ui";
import StylizedButton from "../common/StylizedButton";
import { ReactComponent as ArrowRight } from "./icons/arrow-right.svg";

export const NextArrow = ({ onClick }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        right: ["-65px", "-75px", "-55px", null],
        transform: "translateY(-50%)"
      }}
    >
      <StylizedButton
        onClick={onClick}
        styleOnHover={false}
        forwardSx={{
          borderRadius: "50%",
          border: "none",
          ".btn": { padding: 0, width: "45px", height: "45px" },
          svg: {
            opacity: 0.6,
            width: "100%",
            height: "100%",
            p: "15px",
            position: "relative",
            left: "1px",
            path: { fill: "text" }
          }
        }}
      >
        <ArrowRight />
      </StylizedButton>
    </Box>
  );
};

export const PrevArrow = ({ onClick }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: ["-65px", "-75px", "-55px", null],
        transform: "translateY(-50%)"
      }}
    >
      <StylizedButton
        onClick={onClick}
        styleOnHover={false}
        forwardSx={{
          borderRadius: "50%",
          border: "none",
          ".btn": { padding: 0, width: "45px", height: "45px" },
          svg: {
            opacity: 0.5,
            transform: "scale(-1)",
            width: "100%",
            height: "100%",
            p: "15px",
            position: "relative",
            right: "1px",
            path: { fill: "text" }
          }
        }}
      >
        <ArrowRight />
      </StylizedButton>
    </Box>
  );
};
