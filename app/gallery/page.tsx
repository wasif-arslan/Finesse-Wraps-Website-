"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Image } from "@chakra-ui/react";

const images = [
  "/work1.png",
  "/work2.png",
  "/work3.png",
  "/work4.png",
  "/work5.png",
  "/work6.png",
];

const Gallery = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
    >
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            mt={{ base: "20", md: "" }}
            pt={{ base: "5", md: "" }}
            height={{ base: "auto", md: "80vh" }} // Adjust the height for medium screens
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Gallery;
