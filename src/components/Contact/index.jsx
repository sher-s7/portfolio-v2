import { Flex, Heading } from "theme-ui";
import { NAV_ITEMS } from "../../utils/constants";

import Email from "./Email";
import Linkedin from "./Linkedin";

const Contact = () => {
  return (
    <Flex as="section" sx={{ justifyContent: "center" }}>
      <Flex
        sx={{
          flexDirection: "column",
          width: "100%",
          maxWidth: "663px",
          gap: "20px",
          px: "25px",
          ".contact-container": {
            backgroundColor: "rgba(255,255,255,0.12)",
            boxShadow: "0px 2.5px 10px rgba(0, 0, 0, 0.4)",
            borderRadius: "3px",
            svg: { width: "100%", height: "100%" }
          }
        }}
      >
        <Heading as="h2" variant="h2" id={NAV_ITEMS.contact} sx={{ mb: "5px" }}>
          Get in touch
        </Heading>
        <Linkedin />
        <Email />
      </Flex>
    </Flex>
  );
};

export default Contact;
