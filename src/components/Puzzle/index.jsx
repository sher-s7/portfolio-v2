import { useEffect } from "react";
import { Box, Flex, Heading } from "theme-ui";
import { NAV_ITEMS } from "../../utils/constants";
import "./assets/style.css";
import { ReactComponent as Shuffle } from "./assets/shuffle.svg";
import StylizedButton from "../common/StylizedButton";

const Puzzle = () => {
  useEffect(() => {
    require("./assets/script");
  }, []);
  return (
    <Flex as="section" id="puzzleSection">
      <Heading
        as="h2"
        variant="h2"
        id={NAV_ITEMS.puzzle}
        sx={{ mb: ["25px", "40px"] }}
      >
        Hmm...
      </Heading>
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
