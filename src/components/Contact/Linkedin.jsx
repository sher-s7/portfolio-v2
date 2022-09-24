import { useEffect, useState } from "react";
import { Box, Flex, Text } from "theme-ui";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { ReactComponent as Search } from "./icons/search.svg";

const Linkedin = () => {
  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (hover) {
      setTimeout(() => {
        setHover(false);
      }, 1000);
    }
  }, [hover]);
  return (
    <Flex
      sx={{
        flexDirection: "column",
        gap: ["7px", "10px"]
      }}
    >
      <Text sx={{ fontSize: [0, 1], fontWeight: "bold" }}>Linkedin</Text>
      <Flex
        as="a"
        href="https://www.linkedin.com/in/sher-sheikh/"
        target="_blank"
        rel="noreferrer"
        className={`contact-container${hover ? " hover" : ""}`}
        onMouseEnter={() => setHover(true)}
        sx={{
          alignItems: "center",
          padding: ["10px 10px 10px 20px", "10px 10px 10px 25px"],
          position: "relative",
          overflow: "hidden",
          textDecoration: "none",
          transition: "background-color 0.25s ease",
          ":hover": { backgroundColor: "rgba(255,255,255,0.15)" },
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
        <Box
          sx={{
            display: ["none", "block"],
            mr: ["10px", "21px"],
            width: "16.25px",
            height: "16.25px"
          }}
        >
          <Search />
        </Box>
        <Text
          sx={{
            fontSize: [1, 3],
            fontWeight: "light",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            span: {
              opacity: 0.4,
              fontSize: "inherit",
              fontWeight: "inherit"
            }
          }}
        >
          <Text as="span">https://</Text>
          <Text as="span" sx={{ display: ["none", "inline"] }}>
            www.
          </Text>
          linkedin.com
          <Text as="span">/in/sher-sheikh/</Text>
        </Text>
        <Box
          sx={{
            ml: "auto",
            width: ["20px", "27.5px"],
            height: ["20px", "27.5px"]
          }}
        >
          <Arrow />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Linkedin;
