import { useEffect } from "react";
import { NAV_ITEMS } from "../../utils/constants";
import { animateSpritesheet, METHODS } from "spritesheet-animate";
import { Flex, Heading, Text, Paragraph, Box } from "theme-ui";
import spritesheet from "./spritesheet_small.png";

const About = () => {
  useEffect(() => {
    const element = document.getElementById("spritesheet");
    const settings = {
      path: spritesheet,
      method: METHODS.onScroll,
      sprite_width: 300,
      sprite_height: 300,
      sprites_per_line: 7,
      number_of_sprites: 47
    };
    animateSpritesheet(element, settings);
  }, []);
  return (
    <Flex as="section" sx={{ justifyContent: "center" }}>
      <Flex sx={{ flexDirection: "column", gap: ["40px"] }}>
        <Heading as="h2" variant="h2" id={NAV_ITEMS.about}>
          About me
        </Heading>
        <Flex
          sx={{
            flexDirection: ["column", null, "row"],
            alignItems: "center"
          }}
        >
          <Flex sx={{ flexDirection: "column", px: "25px" }}>
            <Box sx={{ mb: ["10px", "20px"] }}>
              <Text sx={{ fontWeight: "bold", fontSize: [3, 4], mr: "10px" }}>
                Hi, I'm Sher
              </Text>
              <Text variant="small">(pronounced "share")</Text>
            </Box>
            <Paragraph
              variant="default"
              sx={{
                fontSize: [2, 3],
                fontWeight: "light",
                lineHeight: 1.35,
                maxWidth: "630px"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
          </Flex>
          <Box id="spritesheet"></Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;
