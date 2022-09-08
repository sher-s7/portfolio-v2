import { keyframes } from "@emotion/react";
import { useState } from "react";
import { Box, Flex, Heading, Image, Link, Text } from "theme-ui";
import { NAV_ITEMS } from "../../utils/constants";
import github from "./icons/github.png";
import NavLink from "./NavLink";

const Main = () => {
  const [clicked, setClicked] = useState(null);
  return (
    <Flex
      as="section"
      sx={{
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh"
      }}
    >
      <Box sx={{ height: ["187px"], img: { height: "100%" } }}>
        <Image src={github} />
      </Box>
      <Flex sx={{ flexDirection: "column", alignItems: "flex-end" }}>
        <Heading as="h1">Sher Sheikh</Heading>
        <Text as="h2" variant="small">
          warm tint?
        </Text>
      </Flex>
      <Flex
        sx={{
          maxWidth: ["375px", "none"],
          gap: ["0 22px", null, "0 48px"],
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {Object.keys(NAV_ITEMS).map((key, i) => {
          return <NavLink navItem={NAV_ITEMS[key]} key={key + i} />;
        })}
      </Flex>
    </Flex>
  );
};

export default Main;
