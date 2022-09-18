import { useState } from "react";
import { Box, Flex, Link, Text } from "theme-ui";
import MouseText from "../common/MouseText";
import { ReactComponent as LinkIcon } from "./icons/link.svg";

const SlideInfo = ({ slide, isCurrent, maxWidths }) => {
  const [mouseText, setMouseText] = useState(null);
  return (
    <>
      <Flex
        sx={{
          position: "absolute",
          left: [
            `${maxWidths[0]}px`,
            `${maxWidths[1]}px`,
            `calc(${maxWidths[2] / 3}px * 2)`,
            `calc(${maxWidths[3] / 3}px * 2)`
          ],
          transform: "translateX(-100%)",
          flexDirection: "column",
          pointerEvents: isCurrent ? "auto" : "none",
          opacity: isCurrent ? 1 : 0,
          transition: "opacity 0.5s ease",
          width: ["100%", null, "auto", null]
        }}
      >
        <Box
          sx={{
            textAlign: "right"
          }}
        >
          <Text as="p" sx={{ fontSize: 2, fontWeight: "bold", mb: "5px" }}>
            {slide.name}
          </Text>
          <Text
            as="p"
            sx={{
              lineHeight: 1.2,
              maxWidth: [null, null, "295px", null],
              fontSize: [0, 1]
            }}
          >
            {slide.description}
          </Text>
        </Box>
        <Flex
          sx={{
            justifyContent: "flex-end",
            a: {
              opacity: "0.5",
              transition: "opacity 0.25s ease",
              padding: "10px",
              ":hover": { opacity: 1 }
            },
            mr: "-10px"
          }}
        >
          <Link
            onMouseEnter={() => setMouseText("code")}
            onMouseLeave={() => setMouseText(null)}
            variant="text.default"
            href={slide.code}
            target="_blank"
            sx={{ fontSize: 2, fontWeight: "light" }}
          >
            {"</>"}
          </Link>
          <Link
            onMouseEnter={() => setMouseText("demo")}
            onMouseLeave={() => setMouseText(null)}
            href={slide.demo}
            target="_blank"
          >
            <LinkIcon />
          </Link>
        </Flex>
      </Flex>
      {mouseText && <MouseText>{mouseText}</MouseText>}
    </>
  );
};

export default SlideInfo;
