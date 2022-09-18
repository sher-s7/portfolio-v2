import { useEffect, useState } from "react";
import { Box, Flex, Input, Text, Textarea } from "theme-ui";
import MouseText from "../common/MouseText";
import StylizedButton from "../common/StylizedButton";
import Toast from "../common/Toast";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const TOAST_LENGTH = 3000;

const Email = ({ width, addToast }) => {
  const [mouseText, setMouseText] = useState(null);
  const [copied, setCopied] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, TOAST_LENGTH);
    }
  }, [copied]);

  const handleSubmit = (e) => {
    setSubmitting(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", email: userEmail, message })
    })
      .then((res) => {
        setTimeout(() => {
          setSubmitting(false);
          if (!res.ok) {
            // setDisplayError(true);
            // setTimeout(() => {
            //   setDisplayError(false);
            // }, TOAST_LENGTH);
            addToast(
              "There was an error. Please try again, or email me directly."
            );
          } else {
            setDisplaySuccess(true);
            setTimeout(() => {
              setDisplaySuccess(false);
            }, TOAST_LENGTH);
          }
        }, 500);
      })
      .catch((error) => {
        setTimeout(() => {
          setSubmitting(false);
          setDisplayError(true);
          setTimeout(() => {
            setDisplayError(false);
          }, TOAST_LENGTH);
        }, 500);
      });

    e.preventDefault();
  };

  const clearForm = () => {
    setUserEmail("");
    setMessage("");
  };

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
          as="form"
          name="contact"
          onSubmit={handleSubmit}
          sx={{ flexDirection: "column", alignItems: "flex-end", gap: "15px" }}
        >
          <Flex
            className="contact-container"
            sx={{
              fontSize: 2,
              fontWeight: "light",
              flexDirection: "column",
              width: "100%",
              position: "relative",
              padding: "12.5px"
            }}
          >
            <Flex
              sx={{
                alignItems: "center",
                gap: "17px",
                pl: "10px",
                mb: "10px",
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
                onMouseEnter={() => setMouseText("copy to clipboard")}
                onMouseLeave={() => setMouseText(null)}
                onClick={() => addToast("email copied to clipboard")}
                as="button"
                type="button"
                sx={{
                  backgroundColor: "transparent",
                  border: "none",
                  py: "5px",
                  px: "7px",
                  cursor: "pointer",
                  borderRadius: "3px",
                  transition: "background-color 0.2s ease",
                  ":hover": {
                    backgroundColor: "light"
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
                aria-label="Your email"
                placeholder="Your email"
                name="email"
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
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
                placeholder="Message"
                aria-label="Message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                rows="8"
                sx={{
                  border: "none",
                  borderRadius: "3px",
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  fontFamily: "body",
                  letterSpacing: "main",
                  lineHeight: 1.2,
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
          <Flex sx={{ gap: "15px" }}>
            <StylizedButton type="button" onClick={clearForm}>
              clear
            </StylizedButton>
            <StylizedButton
              type="submit"
              disabled={submitting}
              loading={submitting}
            >
              submit
            </StylizedButton>
          </Flex>
        </Flex>
      </Flex>
      {/* {mouseText && <MouseText>{mouseText}</MouseText>}
      {copied && <Toast length={TOAST_LENGTH}>email copied to clipboard</Toast>}
      {displaySuccess && <Toast length={TOAST_LENGTH}>Message sent!</Toast>}
      {displayError && (
        <Toast length={TOAST_LENGTH}>
          There was an error. Please try again, or email me directly.
        </Toast>
      )} */}
    </>
  );
};

export default Email;
