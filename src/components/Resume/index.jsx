import { Flex, Heading } from "theme-ui";
import { NAV_ITEMS } from "../../utils/constants";
import CircleFillBtn from "../common/CircleFillBtn";

const Resume = () => {
  return (
    <Flex as="section" sx={{ justifyContent: "center" }}>
      <Flex sx={{ flexDirection: "column", gap: ["25px", "40px"] }}>
        <Heading as="h2" variant="h2" id={NAV_ITEMS.resume}>
          Resume
        </Heading>
        <Flex
          sx={{
            gap: ["10px", "18px"]
          }}
        >
          <CircleFillBtn>Download PDF</CircleFillBtn>
          <CircleFillBtn preview>View online</CircleFillBtn>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Resume;
