"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  background,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Box
      as="header"
      position="fixed" // Change from "absolute" to "fixed"
      top={0}
      left={0}
      right={0}
      p={6}
      px={{ base: 6, md: 24 }} // Responsive padding based on screen size
      bg="rgba(255, 255, 255, 0.8)" // Add a semi-transparent white background
      boxShadow="md"
      zIndex={4}
    >
      <Flex align="center" justify="space-between">
        <Link href="/">
          <Image src={"/logo.png"} alt="logo" width={95} height={55} />
        </Link>
        <Spacer />
        <Flex align="center">
          {/* Hamburger menu icon */}
          <IconButton
            display={{ base: "inline-flex", md: "none" }} // Hide on md and larger screens
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            mr={4}
          />
          {/* Menu options */}
          <Flex
            align="center"
            display={{ base: isMenuOpen ? "flex" : "none", md: "flex" }}
            gap={16} 
            fontSize={"xl"}// Show on small screens when menu is open
          >
            <Link href="/" >
              Home
            </Link>
            <Link href="/" >
              Learn
            </Link>
            <Link href="/" >
              Reviews
            </Link>
            <Link href="/" >
              Gallery
            </Link>
            <Button backgroundColor="black" textColor={"white"} size="lg"  mr={8}>
              Contact
            </Button>
          </Flex>
        </Flex>
      </Flex>
      {/* Responsive Drawer for small screens */}
      <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex direction="column">
              <Text fontSize="lg" my={2}>
                Home
              </Text>
              <Text fontSize="lg" my={2}>
                Learn
              </Text>
              <Text fontSize="lg" my={2}>
                Reviews
              </Text>
              <Text fontSize="lg" my={2}>
                Gallery
              </Text>
              <Button backgroundColor="black" color="white" size="lg" my={4}>
                Contact
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
