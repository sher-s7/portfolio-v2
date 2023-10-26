import { Flex, Heading } from "theme-ui";
import { NAV_ITEMS } from "../../utils/constants";
import CircleFillBtn from "../common/CircleFillBtn";
import StylizedButton from "../common/StylizedButton";
import resume from "./Sher_Sheikh_Resume.pdf";

const Resume = ({ desktop }) => {
  return (
    <Flex as="section" sx={{ justifyContent: "center" }}>
      <Flex sx={{ flexDirection: "column", gap: ["25px", "40px"] }}>
        <Heading as="h2" variant="h2" id={NAV_ITEMS.resume}>
          Resume
        </Heading>
        <Flex
          sx={{
            gap: "18px",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          {desktop ? (
            <>
              <CircleFillBtn href={resume} download>
                Download PDF
              </CircleFillBtn>
              <CircleFillBtn
                href="https://drive.google.com/file/d/1zUY-jKBpB1MNVp1dH8m3wdyUEhAcBRX0/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                preview
              >
                View online
              </CircleFillBtn>
            </>
          ) : (
            <>
              <StylizedButton
                as="a"
                href={resume}
                download
                styleOnHover={false}
              >
                download pdf
              </StylizedButton>
              <StylizedButton
                as="a"
                href="https://drive.google.com/file/d/1zUY-jKBpB1MNVp1dH8m3wdyUEhAcBRX0/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                styleOnHover={false}
              >
                view online
              </StylizedButton>
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Resume;
