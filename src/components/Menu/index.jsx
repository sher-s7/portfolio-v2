import { Box, Flex, Heading, Link, Text } from "theme-ui";
import { NAV_ITEMS } from "../../utils/constants";

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
      <Box sx={{ height: ["187px"] }}></Box>
      <Flex sx={{ flexDirection: "column", alignItems: "flex-end" }}>
        <Heading as="h1">Sher Sheikh</Heading>
        <Text as="h2" variant="small">
          software developer
        </Text>
      </Flex>
      <Flex>
        {Object.keys(NAV_ITEMS).map((key) => {
          return <Link href={`#${NAV_ITEMS[key]}`}>{NAV_ITEMS[key]}</Link>;
        })}
      </Flex>
    </Flex>
  );
};

export default Main;
