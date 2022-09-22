import { keyframes } from "@emotion/react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "theme-ui";

const bounce = keyframes`
    0% {
        clip-path: circle(0% at 100% 100%)
    } 40% {
        clip-path: circle(12% at 100% 100%)
    } 60% {
        clip-path: circle(12% at 100% 100%)
    } 100% {
        clip-path: circle(0% at 100% 100%)
    }
`;

const CircleFillBtn = ({
  href,
  onClick,
  preview,
  forwardSx,
  children,
  ...props
}) => {
  const [left, setLeft] = useState("100%");
  const [top, setTop] = useState("0%");
  const [scale, setScale] = useState("0%");
  const [transitionTime, setTransitionTime] = useState("0.7s");
  const [init, setInit] = useState(false);
  const isDesktop = window.matchMedia("(min-width: 1100px)");
  const [desktop, setDesktop] = useState(isDesktop.matches);
  const isDesktopOnChange = () => {
    setDesktop(isDesktop.matches);
  };
  useEffect(() => {
    isDesktop.addEventListener("change", isDesktopOnChange);
    return () => isDesktop.removeEventListener("change", isDesktopOnChange);
  }, []);
  return (
    <Button
      as={href ? "a" : "button"}
      href={href}
      onClick={onClick}
      variant="buttons.clear"
      onMouseEnter={(e) => {
        setInit(true);
        setTransitionTime("0s");

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; //x position within the element.
        const y = e.clientY - rect.top; //y position within the element.
        setLeft(x + "px");
        setTop(y + "px");

        // Start scaling animation once position of clip path is set
        setTimeout(() => {
          setTransitionTime("0.7s");
          setScale("140%");
        }, 10);
      }}
      onMouseLeave={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; //x position within the element.
        const y = e.clientY - rect.top; //y position within the element.
        setLeft(x + "px");
        setTop(y + "px");
        setScale("0%");
      }}
      sx={{
        color: "text",
        backgroundColor: "transparent",
        overflow: "hidden",
        transition: "color 0.4s ease",
        position: "relative",
        padding: "10px 15px",
        fontSize: [2, 3],
        fontWeight: "bold",

        ":before": {
          content: `"${children}"`,
          position: "absolute",
          width: "100%",
          height: "100%",
          color: "background",
          backgroundColor: "text",
          left: 0,
          top: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          clipPath: `circle(${scale} at ${left} ${top})`,
          transition: `clip-path ${transitionTime} ease`,
          animation:
            desktop && !init && preview && `${bounce} 1.5s ease infinite`
        },
        ...forwardSx
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CircleFillBtn;
