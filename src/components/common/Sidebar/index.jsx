import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Box, Button, Flex, Text } from "theme-ui";
import { NAV_ITEMS } from "../../../utils/constants";
import debounce from "../../../utils/useDebounce";

const Sidebar = ({ desktop }) => {
  const [active, setActive] = useState("main");
  const [activeHover, setActiveHover] = useState(null);
  const navItemIds = useMemo(
    () => ["main", ...Object.values(NAV_ITEMS).slice(0, -1)],
    []
  );
  useEffect(() => {
    const navItemsString = navItemIds
      .reduce((prev, cur) => prev + `#${cur}, `, "")
      .slice(0, -2);
    const headings = document.querySelectorAll(navItemsString);
    function onScroll() {
      headings.forEach((heading) => {
        if (heading.getBoundingClientRect().top < window.innerHeight / 2) {
          setActive(heading.id);
        }
      });
    }
    window.addEventListener("scroll", debounce(onScroll, 250));
    return () => window.removeEventListener("scroll", debounce(onScroll, 200));
  }, [navItemIds]);
  return (
    desktop && (
      <Flex
        onMouseLeave={() => setActiveHover(null)}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          position: "fixed",
          top: "50%",
          right: "30px",
          transform: "translateY(-50%)",
          width: "15px",
          transition: "0.2s ease-out",
          ":hover": {
            width: activeHover ? "45px" : "15px",
            ".name": {
              pointerEvents: "auto"
            }
          }
        }}
      >
        {navItemIds.map((id, index) => {
          const distanceFromActive = Math.abs(
            index - navItemIds.indexOf(activeHover)
          );
          return (
            <Button
              key={`sidebar-${id}`}
              as="a"
              href={`#${id}`}
              onMouseEnter={() => setActiveHover(id)}
              variant="clear"
              sx={{
                width: !activeHover
                  ? "100%"
                  : id === activeHover
                  ? "100%"
                  : `${100 / parseInt(distanceFromActive + 1) + 38}%`,
                pt: "10px",
                position: "relative",
                transition: "0.2s ease-out",
                ":hover": {
                  ".name": {
                    opacity: 1
                  },
                  ".bar": {
                    backgroundColor: "text"
                  }
                }
              }}
            >
              <Text
                className="name"
                sx={{
                  position: "absolute",
                  left: "0",
                  pr: "10px",
                  top: "100%",
                  transform: "translate(-100%, -57%)",
                  transition: "0.1s ease-out",
                  opacity: 0,
                  fontWeight: "bold",
                  pointerEvents: "none"
                }}
              >
                {id}
              </Text>
              <Box
                className="bar"
                sx={{
                  width: "100%",
                  height: "3px",
                  transition: "0.1s ease-out",
                  backgroundColor:
                    id === active ? "text" : "rgba(226, 226, 226, 0.3)"
                }}
              />
            </Button>
          );
        })}
      </Flex>
    )
  );
};

export default Sidebar;
