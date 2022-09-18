import { Flex, Heading } from "theme-ui";
import { NAV_ITEMS } from "../../utils/constants";
import Email from "./Email";
import Linkedin from "./Linkedin";

const WIDTH = ["663px"];

const Contact = ({ addToast }) => {
  return (
    <Flex as="section" sx={{ justifyContent: "center" }}>
      <Flex
        sx={{
          flexDirection: "column",
          gap: "20px",
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
        <Linkedin width={WIDTH} />
        <Email width={WIDTH} addToast={addToast} />
      </Flex>
    </Flex>
  );
};

export default Contact;
