import "@google/model-viewer/dist/model-viewer";
import { useEffect } from "react";
import { useState } from "react";
import { Box, Flex, Heading, Text } from "theme-ui";
import { NAV_ITEMS } from "../../utils/constants";
import NavLink from "./NavLink";
import model from "./icons/code.glb";
import { useRef } from "react";

const ORBIT_POSITIONS = {
  start: "35deg 90deg 100%",
  end: "-15deg 100deg 100%"
};

const Main = () => {
  const [cameraOrbit, setCameraOrbit] = useState(ORBIT_POSITIONS.start);
  const [modelVisible, setModelVisible] = useState(false);
  const modelViewer = useRef();
  useEffect(() => {
    modelViewer.current?.addEventListener("poster-dismissed", () => {
      setModelVisible(true);
    });
  }, []);

  useEffect(() => {
    setCameraOrbit(modelVisible ? ORBIT_POSITIONS.end : ORBIT_POSITIONS.start);
  }, [modelVisible]);
  return (
    <Flex
      as="section"
      sx={{
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh"
      }}
    >
      <Box
        sx={{
          height: ["250px"],
          mt: "clamp(20px, 10vh, 80px)",
          "model-viewer": {
            height: "100%",
            opacity: modelVisible ? 1 : 0,
            transition: "opacity 0.5s ease"
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
      </Box>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-end",
          mt: "67px",
          mb: "137px"
        }}
      >
        <Heading as="h1">Sher Sheikh</Heading>
        <Text as="h2" variant="small" sx={{ opacity: 0.6 }}>
          software developer
        </Text>
      </Flex>
      <Flex
        sx={{
          maxWidth: ["375px", "none"],
          gap: ["0 22px", null, "0 48px"],
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {Object.keys(NAV_ITEMS).map((key, i) => {
          return <NavLink navItem={NAV_ITEMS[key]} key={key + i} />;
        })}
      </Flex>
    </Flex>
  );
};

export default Main;
