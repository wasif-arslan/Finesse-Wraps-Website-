"use client";
import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import { CgQuote } from "react-icons/cg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonialsData = [
  {
    quote:
      "Michael repaired 5 doors from my kitchen that I thought were beyond repair. He was able to make them like new again using very few of my kitchen and kept perfect order through all stages. Very professional! Highly recommend! I have some other projects that I'll involve him in.",
    name: "Deanne C.",
    affiliation: "Seed Group",
  },
  {
    quote:
      "I recently had a kitchen renovation done by Michael and his team. The quality of work exceeded my expectations. They were professional, punctual, and left the kitchen spotless after completing the job. I highly recommend them for any kitchen renovation project.",
    name: "John D.",
    affiliation: "Creative Solutions Inc.",
  },
  {
    quote:
      "Working with Michael was a pleasure from start to finish. He provided excellent communication throughout the project and his attention to detail was impeccable. The kitchen looks fantastic and I couldn't be happier with the results.",
    name: "Sarah K.",
    affiliation: "Sunrise Realty",
  },
  {
    quote:
      "I am extremely satisfied with the kitchen renovation service provided by Michael. He understood my requirements perfectly and delivered exactly what I wanted. The end result exceeded my expectations. Highly recommended!",
    name: "David M.",
    affiliation: "Home Solutions Ltd.",
  },
  {
    quote:
      "Michael and his team did an outstanding job renovating my kitchen. They were professional, efficient, and paid attention to every detail. The kitchen looks stunning and I couldn't be happier. Thank you!",
    name: "Jennifer W.",
    affiliation: "Design Concepts",
  },
  {
    quote:
      "I am impressed with the quality of work and level of professionalism demonstrated by Michael and his team. They transformed my outdated kitchen into a modern and functional space. Highly recommend their services!",
    name: "Robert H.",
    affiliation: "Visionary Designs",
  },
  {
    quote:
      "I had a great experience working with Michael on my kitchen renovation project. He was responsive, knowledgeable, and completed the work on time. The kitchen looks amazing and I couldn't be happier with the outcome.",
    name: "Emily L.",
    affiliation: "Dream Interiors",
  },
];

const Reviews = () => {
  const [isLargerThanSmall] = useMediaQuery("(min-width: 40em)");

  return (
    <Box  bg="rgba(223, 97, 30, 0.1)" borderRadius="md" pb={20} pt={20}>
      <Text fontSize="4xl" mb={10} textAlign="center">
        Our{" "}
        <Text as="span" fontStyle="italic">
          Satisfied Customers
        </Text>
      </Text>
      <Carousel
        showStatus={true}
        showIndicators={true}
        showThumbs={false}
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        emulateTouch={true}
        centerMode={true}
        centerSlidePercentage={isLargerThanSmall ? 41 : 100} // Show three reviews on large screens and one on small screens
        showArrows={false} // Hide arrows
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          // Customize dot styling
          const dotStyles = {
            background: isSelected ? "orange" : "white",
            width: "10px",
            height: "10px",
            display: "inline-block",
            margin: "0 8px", // Adjust margin
            cursor: "pointer",
          };
          return (
            <span
              style={dotStyles}
              onClick={onClickHandler}
              title={`${label} ${index}`}
            />
          );
        }}
      >
        {testimonialsData.map((testimonial, index) => (
          <Box
            key={index}
            p={8}
            bg="white"
            borderRadius="lg"
            boxShadow="lg"
            width="auto"
            mx={{base:"", md:"10"}}
            my={4}
            textAlign={"left"}
          >
            <Box color="orange.500">
              <CgQuote size={50} />
            </Box>

            <Text fontSize="xl">{testimonial.quote}</Text>
            <Text fontWeight="bold" fontSize="2xl" mt={4}>
              {testimonial.name}
            </Text>
            <Text fontSize="xl" color="orange.500">
              {testimonial.affiliation}
            </Text>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Reviews;
