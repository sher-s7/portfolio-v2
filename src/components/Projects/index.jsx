import { Box, Flex, Heading, Image } from "theme-ui";
import { NAV_ITEMS } from "../../utils/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slides from "./slides";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0
};

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log(document.querySelector(".slick-slide").clientWidth);
    }, 2000);
  }, []);
  return (
    <Flex as="section" sx={{ justifyContent: "center" }}>
      <Flex
        sx={{ flexDirection: "column", justifyContent: "center", gap: "45px" }}
      >
        <Heading as="h2" variant="h2" id={NAV_ITEMS.projects}>
          Projects
        </Heading>
        <Box
          sx={{
            maxWidth: "920px",
            ".slick-slide": {
              transition: "0.5s ease",
              ".imgContainer": {
                position: "relative",
                pb: "113%",
                borderRadius: "30px",
                overflow: "hidden",
                img: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top"
                },
                ":after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(37.96deg, rgba(0, 0, 0, 0.49) 60.06%, rgba(136, 136, 136, 0) 75%)"
                }
              },
              "&:not(.slick-center)": { transform: "scale(0.5)", opacity: 0.4 }
            }
          }}
        >
          <Slider
            {...settings}
            beforeChange={(_currentSlide, nextSlide) =>
              setCurrentSlide(nextSlide)
            }
          >
            {slides.map((slide) => (
              <Box className="imgContainer">
                <Image src={slide.imgSrc} />
              </Box>
            ))}
          </Slider>
          <Box
            sx={{
              justifyContent: "flex-end",
              position: "relative",
              mt: "20px"
            }}
          >
            {slides.map((slide, i) => (
              <Flex
                sx={{
                  position: "absolute",
                  left: ["calc(307px * 2)"],
                  transform: "translateX(-100%)"
                }}
              >
                <Box
                  key={slide.name + i}
                  sx={{
                    opacity: currentSlide === i ? 1 : 0,
                    transition: "opacity 0.5s ease"
                  }}
                >
                  {slide.name}
                </Box>
              </Flex>
            ))}
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Project;
