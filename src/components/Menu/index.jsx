import "@google/model-viewer/dist/model-viewer";
import { useEffect } from "react";
import { useState } from "react";
import { Flex, Grid, Heading, Text } from "theme-ui";
import { NAV_ITEMS } from "../../utils/constants";
import StylizedButton from "../common/StylizedButton";
import model from "./icons/model.glb";
import { useRef } from "react";
import { keyframes } from "@emotion/react";

const ORBIT_POSITIONS = {
  start: "35deg 90deg 100%",
  end: "-15deg 100deg 100%"
};

const fadeIn = (opacity) => keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  } to {
    opacity: ${opacity};
    transform: scale(1);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Main = () => {
  const [cameraOrbit, setCameraOrbit] = useState(ORBIT_POSITIONS.start);
  const [modelVisible, setModelVisible] = useState(false);
  const [modelReady, setModelReady] = useState(false);
  const modelViewer = useRef();
  useEffect(() => {
    setTimeout(() => setModelReady(true), 2000);
    modelViewer.current?.addEventListener("poster-dismissed", () => {
      setModelVisible(true);
    });
  }, []);

  useEffect(() => {
    setCameraOrbit(
      modelVisible && modelReady ? ORBIT_POSITIONS.end : ORBIT_POSITIONS.start
    );
  }, [modelVisible, modelReady]);
  return (
    <Flex
      as="section"
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Grid
        sx={{
          gridTemplateRows: "1fr auto 1fr",
          gap: 0,
          height: "100%",
          maxHeight: [null, "762px", null, "900px"]
        }}
      >
        <Flex
          sx={{
            justifyContent: "center",
            height: ["150px", "200px", null, "250px"],
            margin: ["60px 0 auto", 0],
            "model-viewer": {
              height: "100%",
              opacity: modelVisible && modelReady ? 1 : 0,
              transition: "opacity 1s ease",
              ml: ["9px", "13px"]
            }
          }}
        >
          <model-viewer
            ref={modelViewer}
            src={model}
            camera-controls
            disable-zoom
            orbit-sensitivity={1}
            interaction-prompt="none"
            camera-orbit={cameraOrbit}
            interpolation-decay="170"
            exposure="0.5"
            loading="eager"
          ></model-viewer>
        </Flex>
        <Flex sx={{ justifyContent: "center" }}>
          <Flex
            sx={{
              flexDirection: "column",
              alignItems: "flex-end"
            }}
          >
            <Heading
              as="h1"
              sx={{ lineHeight: "body", animation: `${fadeIn(1)} 2s ease` }}
            >
              Sher Sheikh
            </Heading>
            <Text
              as="span"
              variant="small"
              sx={{
                animation: `${fadeIn(0.6)} 1s ease`,
                animationDelay: "1s",
                animationFillMode: "both"
              }}
            >
              software developer
            </Text>
          </Flex>
        </Flex>
        <Flex sx={{ alignItems: "center", mb: ["40px", 0] }}>
          <Flex
            sx={{
              maxWidth: ["375px", "none"],
              gap: ["22px 22px", null, "0 48px"],
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            {Object.keys(NAV_ITEMS).map((key, i) => {
              return (
                <StylizedButton
                  href={`#${NAV_ITEMS[key]}`}
                  key={key + i}
                  type="a"
                  forwardSx={{
                    animation: `${fadeInUp} 1s ease`,
                    animationDelay: `${1 + 0.1 * i}s`,
                    animationFillMode: "both"
                  }}
                >
                  {NAV_ITEMS[key]}
                </StylizedButton>
              );
            })}
          </Flex>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default Main;
