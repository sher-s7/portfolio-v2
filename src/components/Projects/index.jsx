import { Box, Flex, Heading, Image } from "theme-ui";
import { NAV_ITEMS } from "../../utils/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slides from "./slides";
import { useState } from "react";
import SlideInfo from "./SlideInfo";
import { NextArrow, PrevArrow } from "./Arrows";

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

const MAX_WIDTHS = [200, 400, 870, 1200];

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Flex as="section" sx={{ justifyContent: "center" }}>
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          gap: ["30px", "45px"],
          pb: ["100px", null, "120px"]
        }}
      >
        <Heading as="h2" variant="h2" id={NAV_ITEMS.projects}>
          Projects
        </Heading>
        <Box
          sx={{
            maxWidth: [
              `${MAX_WIDTHS[0]}px`,
              `${MAX_WIDTHS[1]}px`,
              `${MAX_WIDTHS[2]}px`,
              `${MAX_WIDTHS[3]}px`
            ],
            ".slick-slide": {
              transition: "0.5s ease",
              ".imgContainer": {
                position: "relative",
                pb: "113%",
                borderRadius: "30px",
                transition: "border-radius 0.3s ease",
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
                    "linear-gradient(37.96deg, rgba(0, 0, 0, 0.49) 30.06%, rgba(136, 136, 136, 0) 85%)"
                }
              },
              "&:not(.slick-center)": {
                transform: "scale(0.5)",
                opacity: 0.4,
                ".imgContainer": {
                  borderRadius: [null, null, "70px", null]
                }
              }
            }
          }}
        >
          <Slider
            {...settings}
            beforeChange={(_currentSlide, nextSlide) =>
              setCurrentSlide(nextSlide)
            }
          >
            {slides.map((slide, i) => (
              <Box key={`slide-${i}`} className="imgContainer">
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
              <SlideInfo
                key={slide.name + i}
                slide={slide}
                isCurrent={currentSlide === i}
                maxWidths={MAX_WIDTHS}
              />
            ))}
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Project;
