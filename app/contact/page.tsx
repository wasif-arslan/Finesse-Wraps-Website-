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

interface FormData {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  propertyType: string;
  budget: string;
  location: string;
  projectDetails: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    propertyType: "",
    budget: "",
    location: "",
    projectDetails: "",
  });
  const [emailSent, setEmailSent] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    // Check if any of the required fields are empty
    const requiredFields: Array<keyof FormData> = [
      "fullName",
      "emailAddress",
      "phoneNumber",
      "propertyType",
      "budget",
      "location",
      "projectDetails",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        setFormError(
          `Please fill in ${field.replace(/([A-Z])/g, " $1").trim()}.`
        );
        return;
      }
    }

    try {
      const response = await fetch("https://formbold.com/s/oYZkQ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Email sent successfully
        setEmailSent(true);
        setFormError("");
        setTimeout(() => {
          setEmailSent(false);
          setFormData({
            fullName: "",
            emailAddress: "",
            phoneNumber: "",
            propertyType: "",
            budget: "",
            location: "",
            projectDetails: "",
          });
        }, 3000); // Reset message after 3 seconds
      } else {
        // Handle error
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <Box
      p={{ base: "10", md: "40" }}
      pt={{ base: "40", md: "40" }}
      bg="orange.500"
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
        <FormControl id="fullName" display="inline-block" mr={4} isRequired>
          <FormLabel fontSize={"xl"}>Full Name</FormLabel>
          <Input
            type="text"
            variant="flushed"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </FormControl>

        <FormControl id="emailAddress" display="inline-block" mr={4} isRequired>
          <FormLabel fontSize={"xl"}>Email Address</FormLabel>
          <Input
            type="email"
            variant="flushed"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            required
          />
        </FormControl>

        <FormControl id="phoneNumber" display="inline-block" mr={4} isRequired>
          <FormLabel fontSize={"xl"}>Phone Number</FormLabel>
          <Input
            type="text"
            variant="flushed"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </FormControl>
      </Flex>

      <Flex
        align="center"
        justify="space-between"
        flexWrap={{ base: "wrap", md: "nowrap" }}
        gap={4}
      >
        <FormControl id="propertyType" display="inline-block" mr={4} isRequired>
          <FormLabel fontSize={"xl"}>Property Type</FormLabel>
          <Flex>
            <Input
              type="text"
              variant="flushed"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
            />
            <Menu>
              <MenuButton as={Flex} m={3} cursor="pointer">
                <ChevronDownIcon boxSize={6} />
              </MenuButton>

              <MenuList color={"orange"} fontSize={"lg"}>
                <MenuItem onClick={() => setFormData({ ...formData, propertyType: "House" })}>
                  House
                </MenuItem>
                <MenuItem onClick={() => setFormData({ ...formData, propertyType: "Apartment" })}>
                  Apartment
                </MenuItem>
                <MenuItem onClick={() => setFormData({ ...formData, propertyType: "Condo" })}>
                  Condo
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </FormControl>

        <FormControl id="budget" display="inline-block" mr={4} isRequired>
          <FormLabel fontSize={"xl"}>Estimated Budget</FormLabel>
          <Flex>
            <Input
              type="text"
              variant="flushed"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            />
            <Menu>
              <MenuButton as={Flex} m={3} cursor="pointer">
                <ChevronDownIcon boxSize={6} />
              </MenuButton>
              <MenuList color={"orange"} fontSize={"lg"}>
                <MenuItem onClick={() => setFormData({ ...formData, budget: "$1000 - $5000" })}>
                  $1000 - $5000
                </MenuItem>
                <MenuItem onClick={() => setFormData({ ...formData, budget: "$5000 - $10000" })}>
                  $5000 - $10000
                </MenuItem>
                <MenuItem onClick={() => setFormData({ ...formData, budget: "$10000+" })}>
                  $10000+
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </FormControl>

        <FormControl id="location" display="inline-block" mr={4} isRequired>
          <FormLabel fontSize={"xl"}>Location of Project</FormLabel>
          <Flex>
            <Input
              type="text"
              variant="flushed"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <Menu>
              <MenuButton as={Flex} m={3} cursor="pointer">
                <ChevronDownIcon boxSize={6} />
              </MenuButton>
              <MenuList color={"orange"} fontSize={"lg"}>
                <MenuItem onClick={() => setFormData({ ...formData, location: "City" })}>City</MenuItem>
                <MenuItem onClick={() => setFormData({ ...formData, location: "Suburb" })}>
                  Suburb
                </MenuItem>
                <MenuItem onClick={() => setFormData({ ...formData, location: "Rural" })}>Rural</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </FormControl>
      </Flex>

      <FormControl id="projectDetails" mr={4} isRequired>
        <FormLabel fontSize={"xl"}>Tell us more about your project</FormLabel>
        <Input
          type="text"
          variant="flushed"
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          required
        />
      </FormControl>

      {formError && (
        <Box textAlign="center" fontSize="lg">
          <Box color="white">{formError}</Box>
        </Box>
      )}

      {emailSent && (
        <Box textAlign="center" color="white" fontSize="lg">
          Email has been sent!
        </Box>
      )}

      <Flex justify="center">
        <Button
          textColor="orange"
          size="lg"
          my={4}
          pl={20}
          pr={20}
          fontSize={"xl"}
          width={"fit-content"}
          onClick={handleSubmit}
        >
          Send Message
        </Button>
      </Flex>
    </Box>
  );
};

export default Contact;
