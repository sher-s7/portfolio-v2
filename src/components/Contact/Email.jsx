import { useEffect, useState } from "react";
import { Box, Flex, Input, Text, Textarea } from "theme-ui";
import MouseText from "../common/MouseText";

const Email = ({ width }) => {
  const [mouseText, setMouseText] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <>
      <Flex
        sx={{
          flexDirection: "column",
          width,
          gap: "6.25px"
        }}
      >
        <Text sx={{ fontSize: 1, fontWeight: "bold" }}>Email</Text>
        <Flex
          className="contact-container"
          sx={{
            padding: "12.5px"
          }}
        >
          <Flex
            as="form"
            name="contact"
            netlify="true"
            sx={{
              fontSize: 2,
              fontWeight: "light",
              flexDirection: "column",
              width: "100%",
              gap: "12.5px"
            }}
          >
            <Flex
              sx={{
                alignItems: "center",
                gap: "17px",
                pl: "10px",
                "span, button": {
                  fontSize: "inherit",
                  fontWeight: "inherit"
                }
              }}
            >
              <Text as="span" sx={{ opacity: 0.5 }}>
                To
              </Text>
              <Text
                onMouseOver={() => setMouseText("copy to clipboard")}
                onMouseLeave={() => setMouseText(null)}
                onClick={() => !copied && setCopied(true)}
                as="button"
                role="button"
                sx={{
                  backgroundColor: "transparent",
                  border: "none",
                  py: "5px",
                  px: "7px",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                  ":hover": {
                    backgroundColor: "light",
                    borderRadius: "3px"
                  },
                  ":active": {
                    backgroundColor: "transparent",
                    transition: "background-color 0.1s ease"
                  }
                }}
              >
                sher.sheikh77@gmail.com
              </Text>
            </Flex>
            <Box>
              <Input
                type="text"
                aria-label="Subject"
                placeholder="Subject"
                sx={{
                  border: "none",
                  borderRadius: "3px",
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  fontFamily: "body",
                  letterSpacing: "main",
                  padding: "10px",
                  transition: "background-color 0.2s ease",
                  ":focus": {
                    outline: "none",
                    backgroundColor: "light"
                  }
                }}
              />
            </Box>
            <Box>
              <Textarea
                placeholder="Body"
                aria-label="Body"
                rows="10"
                sx={{
                  border: "none",
                  borderRadius: "3px",
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  fontFamily: "body",
                  letterSpacing: "main",
                  padding: "10px",
                  resize: "vertical",
                  transition: "background-color 0.2s ease",
                  ":focus": {
                    outline: "none",
                    backgroundColor: "light"
                  }
                }}
              ></Textarea>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      {mouseText && <MouseText>{mouseText}</MouseText>}
      {copied && (
        <Text
          sx={{
            position: "fixed",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: [1, 2],
            backgroundColor: "light"
          }}
        >
          Copied
        </Text>
      )}
    </>
  );
};

export default Email;
