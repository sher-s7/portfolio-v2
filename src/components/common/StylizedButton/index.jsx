import { useState } from "react";
import { Box, Link } from "theme-ui";
import PropTypes from "prop-types";
import Loader from "../Loader";

const TRANSITION_LENGTH = 0.75;

const StylizedButton = ({
  as,
  href,
  onClick,
  styleOnHover,
  loading,
  forwardSx,
  children,
  ...props
}) => {
  const [clicked, setClicked] = useState(false);
  const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });
  const [clickTimeout, setClickTimeout] = useState(null);
  return (
    <Box
      className={`${clicked ? "clicked" : ""}`}
      sx={{
        overflow: "hidden",
        isolation: "isolate",
        borderRadius: "6px",
        position: "relative",
        transition: "0.2s ease-out, transform 0.1s linear",
        borderTop: "1px solid",
        borderColor: styleOnHover ? ["light", "transparent"] : "light",
        boxShadow: styleOnHover
          ? ["-3px 5px 15px rgba(0, 0, 0, 0.2)", "none"]
          : "-3px 5px 15px rgba(0, 0, 0, 0.2)",
        ".btn": {
          p: "10px 15px",
          display: "block",
          cursor: "pointer",
          WebkitTapHighlightColor: "transparent",
          ":disabled": {
            opacity: 0.5,
            cursor: "default"
          }
        },
        "::after": {
          content: "''",
          pointerEvents: "none",
          transition: "0.1s ease-out",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.2) 100%)",
          opacity: styleOnHover ? [1, 0] : 1
        },
        "::before": {
          content: '"⬤"',
          pointerEvents: "none",
          position: "absolute",
          top: clickCoords.y + "px",
          left: clickCoords.x + "px",
          transform: "translate(-50%, -50%) scale(0)",
          fontFamily: "Arial",
          fontSize: "20rem",
          color: "light",
          transition: "0s"
        },
        ":hover": {
          borderColor: "light",
          boxShadow: "-3px 5px 15px rgba(0, 0, 0, 0.2)",
          "::after": {
            opacity: 1
          }
        },
        ":active": {
          transition: "box-shadow 0.1s linear",
          transform: "scale(0.97)",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)"
        },
        "&.clicked::before": {
          transform: "translate(-50%, -50%) scale(1)",
          opacity: 0,
          transition: `transform ${TRANSITION_LENGTH}s ease, opacity ${TRANSITION_LENGTH}s ease`
        },
        ...forwardSx
      }}
    >
      <Link
        className="btn"
        variant={as === "a" ? "links.primary" : "buttons.primary"}
        as={as || "a"}
        href={href}
        onClick={(event) => {
          let currentTargetRect = event.currentTarget.getBoundingClientRect();
          const event_offsetX = event.pageX - currentTargetRect.left,
            event_offsetY =
              event.pageY - currentTargetRect.top - window.scrollY;
          setClickCoords({
            x: parseInt(event_offsetX),
            y: parseInt(event_offsetY)
          });

          setClicked(false);
          clearTimeout(clickTimeout);
          setTimeout(() => {
            setClicked(true);
          }, 10);

          setClickTimeout(
            setTimeout(() => {
              setClicked(false);
            }, TRANSITION_LENGTH * 1000)
          );

          onClick && onClick();
        }}
        {...props}
      >
        {loading && <Loader size="20px" />}
        <Box
          sx={{
            opacity: loading ? 0 : 1,
            transition: loading ? "opacity 0.2s ease" : "0s"
          }}
        >
          {children}
        </Box>
      </Link>
    </Box>
  );
};

StylizedButton.propTypes = {
  as: PropTypes.oneOf(["a", "button"]),
  type: PropTypes.string,
  styleOnHover: PropTypes.bool
};
StylizedButton.defaultProps = {
  as: "button",
  styleOnHover: true
};

export default StylizedButton;
