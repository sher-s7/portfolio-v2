import { useEffect } from "react";
import { useState } from "react";
import { Flex } from "theme-ui";
import { ReactComponent as Arrow } from "../../../assets/arrow.svg";
import StylizedButton from "../StylizedButton";

const ScrollToTop = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const updateScroll = () => {
      setScrollY(window.scrollY);
    };
    function debounce(func, wait, immediate) {
      var timeout;
      return function () {
        var context = this,
          args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
    window.addEventListener("scroll", debounce(updateScroll, 250));
    return () =>
      window.removeEventListener("scroll", debounce(updateScroll, 250));
  }, []);

  return (
    <Flex
      sx={{
        display: ["none", null, "flex"],
        position: "fixed",
        bottom: "20px",
        left: "50%",
        width: "100%",
        maxWidth: "1920px",
        transform: "translateX(-50%)",
        justifyContent: "flex-end",
        pointerEvents: "none",
        opacity: scrollY > window.innerHeight ? 1 : 0,
        transition: "0.25s ease",
        pr: "20px",
        a: { pointerEvents: scrollY > window.innerHeight ? "auto" : "none" }
      }}
    >
      <StylizedButton
        href="#main"
        as="a"
        forwardSx={{
          border: "none",
          ".btn": {
            padding: 0,
            width: "45px",
            height: "45px",
            display: "inline-block"
          },
          svg: {
            opacity: 0.5,
            transform: "rotate(-90deg)",
            width: "100%",
            height: "100%",
            p: "8px",
            position: "relative",
            path: { strokeOpacity: 1, strokeWidth: 1.5 }
          }
        }}
      >
        <Arrow />
      </StylizedButton>
    </Flex>
  );
};

export default ScrollToTop;
