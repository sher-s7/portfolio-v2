import { useEffect } from "react";
import { Box, Flex } from "theme-ui";
import { NAV_ITEMS } from "../../utils/constants";
import "./assets/style.css";
import { ReactComponent as Shuffle } from "./assets/shuffle.svg";
import StylizedButton from "../common/StylizedButton";

const Puzzle = () => {
  useEffect(() => {
    require("./assets/script");
  }, []);
  return (
    <Flex as="section" id={NAV_ITEMS.puzzle}>
      <Box className="container" sx={{ px: "25px" }}>
        <Box className="puzzle"></Box>
      </Box>
      <StylizedButton
        id="shuffle"
        styleOnHover={false}
        forwardSx={{ mt: "30px" }}
      >
        <Shuffle />
      </StylizedButton>
    </Flex>
  );
};

export default Puzzle;
