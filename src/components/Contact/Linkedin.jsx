import { useEffect, useState } from "react";
import { Box, Flex, Text } from "theme-ui";
import { ReactComponent as Arrow } from "./icons/contact-arrow.svg";
import { ReactComponent as Search } from "./icons/search.svg";

const Linkedin = () => {
  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (hover) {
      setTimeout(() => {
        setHover(false);
      }, 1500);
    }
  }, [hover]);
  return (
    <Flex
      sx={{
        flexDirection: "column",
        gap: "6.25px"
      }}
    >
      <Text sx={{ fontSize: 1, fontWeight: "bold" }}>Linkedin</Text>
      <Flex
        as="a"
        href="https://www.linkedin.com/in/sher-sheikh/"
        target="_blank"
        rel="noreferrer"
        className={`contact-container${hover ? " hover" : ""}`}
        onMouseEnter={() => setHover(true)}
        sx={{
          alignItems: "center",
          padding: "11.25px 12px 11.25px 25px",
          position: "relative",
          overflow: "hidden",
          textDecoration: "none",
          "&.hover": {
            ".shine": {
              transform: "translateX(100%)",
              transition: "1s ease",
              div: {
                transform: "translateX(100%)",
                transition: "2s ease"
              }
            }
          }
        }}
      >
        <Box
          className="shine"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transform: "translateX(-100%)",
            transition: "0s"
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "50%",
              height: "100%",
              transform: "translateX(-100%)",
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
              transition: "0s"
            }}
          ></Box>
        </Box>
        <Box sx={{ mr: "34px", width: "16.25px", height: "16.25px" }}>
          <Search />
        </Box>
        <Text
          sx={{
            fontSize: 3,
            fontWeight: "light",
            span: {
              opacity: 0.4,
              fontSize: "inherit",
              fontWeight: "inherit"
            }
          }}
        >
          <Text as="span">https://www.</Text>
          linkedin.com
          <Text as="span">/in/sher-sheikh/</Text>
        </Text>
        <Box sx={{ ml: "auto", width: "27.5px", height: "27.5px" }}>
          <Arrow />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Linkedin;
