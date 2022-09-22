import { useContext } from "react";
import { useState } from "react";
import { Box, Flex, Input, Text, Textarea } from "theme-ui";
import { ToastsContext } from "../../Context/Toasts";
import MouseText from "../common/MouseText";
import StylizedButton from "../common/StylizedButton";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Email = () => {
  const { addToast } = useContext(ToastsContext);
  const [mouseText, setMouseText] = useState(null);

  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    if (submitting) return e.preventDefault();
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
            addToast(
              "There was an error. Please try again, or email me directly."
            );
          } else {
            addToast("Message sent!");
            clearForm();
          }
        }, 2000);
      })
      .catch(() => {
        setTimeout(() => {
          setSubmitting(false);
          addToast(
            "There was an error. Please try again, or email me directly."
          );
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
          gap: ["7px", "10px"]
        }}
      >
        <Text sx={{ fontSize: [0, 1], fontWeight: "bold" }}>Email</Text>
        <Flex
          as="form"
          name="contact"
          onSubmit={handleSubmit}
          sx={{ flexDirection: "column", alignItems: "flex-end", gap: "15px" }}
        >
          <Flex
            className="contact-container"
            sx={{
              fontSize: [1, 2],
              fontWeight: "light",
              flexDirection: "column",
              width: "100%",
              position: "relative",
              padding: ["10px", "12.5px"]
            }}
          >
            <Flex
              sx={{
                alignItems: "center",
                gap: "10px",
                pl: "10px",
                mb: "10px",
                "span, button": {
                  fontSize: "inherit",
                  fontWeight: "inherit"
                },
                "#copy-email": {
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  pointerEvents: "none"
                }
              }}
            >
              <Text as="span" sx={{ opacity: 0.5 }}>
                To
              </Text>
              <Text
                onMouseEnter={() => setMouseText("copy to clipboard")}
                onMouseLeave={() => setMouseText(null)}
                onClick={() => {
                  if (navigator && navigator.clipboard) {
                    navigator.clipboard.writeText("sher.sheikh77@gmail.com");
                  } else if (document.execCommand) {
                    const email = document.getElementById("copy-email");
                    email.select();
                    email.setSelectionRange(0, 99999);
                    document.execCommand("copy");
                  }
                  addToast("Email copied to clipboard");
                }}
                as="button"
                type="button"
                sx={{
                  backgroundColor: ["light", "transparent"],
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
              <input id="copy-email" value="sher.sheikh77@gmail.com" readOnly />
            </Flex>
            <Box>
              <Input
                required
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
                required
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
            <StylizedButton type="submit" loading={submitting}>
              submit
            </StylizedButton>
          </Flex>
        </Flex>
      </Flex>
      {mouseText && <MouseText>{mouseText}</MouseText>}
    </>
  );
};

export default Email;
