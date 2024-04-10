"use client";
import { useState } from "react";
import { Box, Text, Button, Flex, Image, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const reviews = [
  {
    id: 1,
    image:
      "https://images6.fanpop.com/image/photos/42400000/Support-all-Girls-i-support-girls-42453076-1280-1920.jpg",
    quote:
      "Amet minim mollit non deserunt ullamco est sit aliquip dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    author: "John Doe",
  },
  {
    id: 2,
    image:
      "http://hobbylesson.com/wp-content/uploads/2018/10/Examples-of-Digital-Paintings-which-will-Pause-you-for-a-while-13.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jane Doe",
  },
  {
    id: 3,
    image:
      "https://3.bp.blogspot.com/-EAAbmUGhmFU/XLnHhoHbDJI/AAAAAAAAnqg/SnlL-AfAi7siS3DOwrrfnGQ-eu1fS9NzQCLcBGAs/s1600/Kiara-Advani-HD-Wallpapers-13.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jane Doe",
  },
  {
    id: 4,
    image:
      "https://stellarairportstores.com/wp-content/uploads/2019/01/PDHeadshot-2000x2154.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jane Doe",
  },
  {
    id: 5,
    image:
      "https://64.media.tumblr.com/fee5087133f4419e9573510b443a1f2b/tumblr_prc9idx8tD1rtsp19o1_540.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jane Doe",
  },
  {
    id: 6,
    image:
      "https://cdn.openart.ai/uploads/image_XeW9Tykn_1693937092389_512.webp",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jane Doe",
  },
  // Add more reviews as needed
];

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <Flex
      p={{ base: 8, md: 8 }}
      bg="black"
      color="white"
      pt={{ base: 20, md: 20 }}
      flexDirection={{ base: "column", md: "row" }}
      position="relative"
    >
      <Box w={{ base: "100%", md: "50%" }} pr={{ md: 8 }} position="relative">
        <Text
          fontSize={{ base: "3xl", md: "7xl" }}
          fontWeight="bold"
          mb={4}
          mt={{ base: 10, md: 60 }}
          ml={{ base: 10,  }}
        >
          Our Success Stories
        </Text>

        <Flex justifyContent="center" mt={20} gap={40}>
          <IconButton
            aria-label="Previous review"
            icon={<ChevronLeftIcon />}
            onClick={prevReview}
            colorScheme="orange"
            size="lg"
            display={{ base: "none", md: "block" }}
            bgColor={"orange.500"}
          />
          <IconButton
            aria-label="Next review"
            icon={<ChevronRightIcon />}
            onClick={nextReview}
            colorScheme="orange"
            size="lg"
            display={{ base: "none", md: "block" }}
          />
        </Flex>
      </Box>
      <Box
        w={{ base: "100%", md: "50%" }}
        position="relative"
        mt={{ base: 4, md: 0 }}
      >
        <div style={{ position: 'relative', paddingTop: '80.25%' }}>
          <Image
            src={reviews[currentReviewIndex].image}
            alt="Success Story"
            borderRadius="md"
            objectFit="cover"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
            mt={{md:"20"}}
          />
        </div>
        <Flex justifyContent="space-around" mt={4} gap={5}>
          <IconButton
            aria-label="Previous review"
            icon={<ChevronLeftIcon />}
            onClick={prevReview}
            colorScheme="orange"
            size="lg"
            display={{ base: "block", md: "none" }}
          />
          <IconButton
            aria-label="Next review"
            icon={<ChevronRightIcon />}
            onClick={nextReview}
            colorScheme="orange"
            size="lg"
            display={{ base: "block", md: "none" }}
          />
        </Flex>
        <Box
          bg="rgba(255, 255, 255, 0.8)"
          textColor="black"
          p={{ base: 3, md: 10 }}
          borderRadius="md"
          position="absolute"
          right={{ base: "auto", md: 5 }}
          left={{ base: 5, md: "auto" }}
          bottom={{ base: 10, md: 2 }}
          mb={{ base: 7, md: 3 }}
          zIndex={1}
          textAlign="left"
        >
          <Text fontSize={{ base: "sm", md: "3xl" }}>{reviews[currentReviewIndex].quote}</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Reviews;
