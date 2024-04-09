"use client";
import { Box, Text, HStack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isBottom = windowHeight + window.scrollY >= documentHeight;
      setShowFooter(isBottom);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call handleScroll on mount to handle small pages without scroll
    handleScroll();

    // Remove scroll event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* {showFooter && ( */}
      <div className="bottom-0 left-0 w-full">
        <Box
          p={4}
          bg="white"
          textAlign="center"
          // position="fixed"
          // bottom={0}
          // left={0}
          // width="100%"
        >
          <HStack spacing={4} justify="center" color="orange.500">
            <Link href={"/"}>
              <Icon as={FaFacebook} boxSize={6} />
            </Link>
            <Link href={"/"}>
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
            <Link href={"/"}>
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
            <Link href={"/"}>
              <Icon as={FaLinkedin} boxSize={6} />
            </Link>
          </HStack>
          <Text mt={2} fontSize="sm">
            Copyright © Finesse Wraps Ltd.
          </Text>
        </Box>
      </div>
      {/* )} */}
    </>
  );
};

export default Footer;
