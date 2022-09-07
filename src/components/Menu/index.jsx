import { Box, Flex, Heading, Image, Link, Text } from "theme-ui";
import { NAV_ITEMS } from "../../utils/constants";
import github from "./icons/github.png";

const Main = () => {
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
          justifyContent: "center",
          div: {
            overflow: "hidden",
            borderRadius: "6px",
            position: "relative",
            transition: "0.2s ease-out, transform 0.1s linear",
            borderTop: "1px solid transparent",
            a: {
              p: "10px 15px",
              display: "block",
              cursor: "pointer"
            },
            "::after": {
              content: "''",
              pointerEvents: "none",
              transition: "0.2s ease-out",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.2) 100%)",
              opacity: 0
            },
            ":hover": {
              borderColor: "rgba(255, 255, 255, 0.1)",
              boxShadow: "-3px 5px 15px rgba(0, 0, 0, 0.2)",
              "::after": {
                opacity: 1
              }
            },
            ":active": {
              transition: "box-shadow 0.1s linear",
              transform: "scale(0.97)",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)"
            }
          }
        }}
      >
        {Object.keys(NAV_ITEMS).map((key) => {
          return (
            <Box>
              <Link variant="nav" href={`#${NAV_ITEMS[key]}`}>
                {NAV_ITEMS[key]}
              </Link>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Main;
