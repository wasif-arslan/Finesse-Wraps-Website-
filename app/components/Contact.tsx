"use client";
import { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Contact = () => {
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");

  return (
    <Box
      p={{ base: "10", md: "40" }}
      pt={{ base: "10", md: "40" }}
      bg="orange.400"
      borderRadius="md"
      textAlign="center"
      textColor={"white"}
      display="grid"
      gridGap={6}
    >
      <Flex
        align="center"
        justify="space-between"
        flexWrap={{ base: "wrap", md: "nowrap" }}
        gap={4}
      >
        <FormControl id="name" display="inline-block" mr={4}>
          <FormLabel fontSize={"xl"}>Full Name</FormLabel>
          <Input type="text" variant="flushed" />
        </FormControl>

        <FormControl id="email" display="inline-block" mr={4}>
          <FormLabel fontSize={"xl"}>Email Address</FormLabel>
          <Input type="email" variant="flushed" />
        </FormControl>

        <FormControl id="phone" display="inline-block" mr={4}>
          <FormLabel fontSize={"xl"}>Phone Number</FormLabel>
          <Input type="text" variant="flushed" />
        </FormControl>
      </Flex>

      <Flex
        align="center"
        justify="space-between"
        flexWrap={{ base: "wrap", md: "nowrap" }}
        gap={4}
      >
        <FormControl id="propertyType" display="inline-block" mr={4}>
          <FormLabel fontSize={"xl"}>Property Type</FormLabel>
          <Menu>
            <MenuButton as={Button} colorScheme="teal">
              {propertyType ? propertyType : "Select Property Type"}
            </MenuButton>
            <MenuList color={"orange"} fontSize={"lg"}>
              <MenuItem onClick={() => setPropertyType("House")}>
                House
              </MenuItem>
              <MenuItem onClick={() => setPropertyType("Apartment")}>
                Apartment
              </MenuItem>
              <MenuItem onClick={() => setPropertyType("Condo")}>
                Condo
              </MenuItem>
            </MenuList>
          </Menu>
        </FormControl>

        <FormControl id="budget" display="inline-block" mr={4}>
          <FormLabel fontSize={"xl"}>Estimated Budget</FormLabel>
          <Menu>
            <MenuButton as={Button} colorScheme="teal">
              {budget ? budget : "Select Estimated Budget"}
            </MenuButton>
            <MenuList color={"orange"} fontSize={"lg"}>
              <MenuItem onClick={() => setBudget("$1000 - $5000")}>
                $1000 - $5000
              </MenuItem>
              <MenuItem onClick={() => setBudget("$5000 - $10000")}>
                $5000 - $10000
              </MenuItem>
              <MenuItem onClick={() => setBudget("$10000+")}>$10000+</MenuItem>
            </MenuList>
          </Menu>
        </FormControl>

        <FormControl id="location" display="inline-block" mr={4}>
          <FormLabel fontSize={"xl"}>Location of Project</FormLabel>
          <Menu>
            <MenuButton as={Flex} align="center" cursor="pointer" variant="flushed">
              <ChevronDownIcon boxSize={6} mr={2} />
              {location ? location : "_____________________"}
            </MenuButton>
            <MenuList color={"orange"} fontSize={"lg"}>
              <MenuItem onClick={() => setLocation("City")}>City</MenuItem>
              <MenuItem onClick={() => setLocation("Suburb")}>Suburb</MenuItem>
              <MenuItem onClick={() => setLocation("Rural")}>Rural</MenuItem>
            </MenuList>
          </Menu>
        </FormControl>
      </Flex>

      <FormControl id="message" mr={4}>
        <FormLabel fontSize={"xl"}>Tell us more about your project</FormLabel>
        <Input type="text" variant="flushed" />
      </FormControl>

      <Flex justify="center">
        <Button
          textColor="orange"
          size="lg"
          my={4}
          fontSize={"xl"}
          width={"fit-content"}
        >
          Send Message
        </Button>
      </Flex>
    </Box>
  );
};

export default Contact;
