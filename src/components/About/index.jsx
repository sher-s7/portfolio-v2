import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../../utils/constants";
import { animateSpritesheet, METHODS } from "spritesheet-animate";
import { Flex, Heading, Text, Paragraph, Box } from "theme-ui";
import spritesheet from "./spritesheet.webp";
import MouseText from "../common/MouseText";

const About = ({ desktop }) => {
  const [mouseText, setMouseText] = useState(null);

  useEffect(() => {
    const element = document.getElementById("spritesheet");
    const settings = {
      path: spritesheet,
      method: METHODS.onScroll,
      sprite_width: 300,
      sprite_height: 300,
      sprites_per_line: 7,
      number_of_sprites: 47,
      onScrollSensitivity: 0.1
    };
    animateSpritesheet(element, settings);
  }, []);
  return (
    <>
      <Flex
        as="section"
        sx={{ justifyContent: "center", pb: ["25px", "50px"] }}
      >
        <Flex sx={{ flexDirection: "column", gap: ["25px", "40px"] }}>
          <Heading as="h2" variant="h2" id={NAV_ITEMS.about}>
            About me
          </Heading>
          <Flex
            sx={{
              flexDirection: ["column", null, "row"],
              alignItems: "center",
              gap: ["25px", 0]
            }}
          >
            <Flex
              sx={{
                flexDirection: "column",
                px: "25px",
                p: {
                  mb: "15px",
                  span: {
                    backgroundColor: desktop && "rgba(255,255,255,0.07)"
                  },
                  a: {
                    color: "text"
                  },
                  svg: {
                    width: "20px",
                    height: "auto",
                    verticalAlign: "middle",
                    path: { fill: "text" }
                  }
                }
              }}
            >
              <Box sx={{ mb: ["10px", "20px"] }}>
                <Text sx={{ fontWeight: "bold", fontSize: [3, 4], mr: "10px" }}>
                  Hi, I'm Sher
                </Text>
                <Text variant="small">(pronounced "share")</Text>
              </Box>
              <Paragraph
                variant="default"
                sx={{
                  fontSize: [1, 2],
                  fontWeight: "light",
                  lineHeight: 1.35,
                  maxWidth: "600px"
                }}
              >
                I'm a software developer, and I've been creating websites for
                over{" "}
                <span
                  onMouseEnter={() =>
                    setMouseText("new Date().getFullYear() - 2019")
                  }
                  onMouseLeave={() => setMouseText(null)}
                >
                  {new Date().getFullYear() - 2019} years
                </span>
                , with my main focus being the{" "}
                <span
                  onMouseEnter={() =>
                    setMouseText("MongoDB, Express, React, Node")
                  }
                  onMouseLeave={() => setMouseText(null)}
                >
                  MERN
                </span>{" "}
                stack. Check out my{" "}
                <a
                  href="https://www.linkedin.com/in/sher-sheikh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>{" "}
                for my latest work experience.
              </Paragraph>
              <Paragraph
                variant="default"
                sx={{
                  fontSize: [1, 2],
                  fontWeight: "light",
                  lineHeight: 1.35,
                  maxWidth: "600px"
                }}
              >
                Outside of coding, I have an interest in video editing and have
                been doing it as a hobby since 2014. If you're a Marvel fan,
                check out my{" "}
                <a
                  href="https://www.youtube.com/c/TobeyintheMCU/"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setMouseText("Tobey in the MCU")}
                  onMouseLeave={() => setMouseText(null)}
                >
                  YouTube channel
                </a>
                . 🕷️
              </Paragraph>
            </Flex>
            <Box id="spritesheet"></Box>
          </Flex>
        </Flex>
      </Flex>
      {mouseText && (
        <MouseText monospace background>
          {mouseText}
        </MouseText>
      )}
    </>
  );
};

export default About;
