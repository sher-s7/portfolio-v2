import { Flex, Heading } from "theme-ui";
import { NAV_ITEMS } from "../../utils/constants";
import CircleFillBtn from "../common/CircleFillBtn";
import { useEffect, useState } from "react";
import StylizedButton from "../common/StylizedButton";

const Resume = () => {
  const isDesktop = window.matchMedia("(min-width: 1100px)");
  const [desktop, setDesktop] = useState(isDesktop.matches);

  useEffect(() => {
    const isDesktopOnChange = () => {
      setDesktop(isDesktop.matches);
    };
    isDesktop.addEventListener("change", isDesktopOnChange);
    return () => isDesktop.removeEventListener("change", isDesktopOnChange);
  }, [isDesktop]);
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
              <CircleFillBtn href="./resume.pdf" download>
                Download PDF
              </CircleFillBtn>
              <CircleFillBtn
                href="https://drive.google.com/file/d/1oUjeYEGc-4FOEKF7Vn2Tkw8PysAjPlxf/view?usp=sharing"
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
                href="./resume.pdf"
                download
                styleOnHover={false}
              >
                download pdf
              </StylizedButton>
              <StylizedButton
                as="a"
                href="https://drive.google.com/file/d/1oUjeYEGc-4FOEKF7Vn2Tkw8PysAjPlxf/view?usp=sharing"
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
