import { Box, Flex, Heading, Text } from "theme-ui";

const Contact = () => {
  return (
    <Flex as="section" sx={{ justifyContent: "center" }}>
      <Flex sx={{ flexDirection: "column" }}>
        <Heading as="h2" variant="h2">
          Get in touch
        </Heading>
        <Flex
          sx={{
            flexDirection: "column"
          }}
        >
          <Text sx={{ fontSize: 1, fontWeight: "bold" }}>Linkedin</Text>
          <Flex as="a">
            <Box sx={{ mr: "34px" }}>icon</Box>
            <Text>https://www.linkedin.com/in/sher-sheikh/</Text>
            <Box sx={{ ml: "auto" }}>icon</Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
