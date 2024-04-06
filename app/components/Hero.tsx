import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Header from "./Header"; // Import the Header component

const Hero = () => {
  return (
    <Box
      // bgImage="/kitchenimage.png"
      bgGradient="linear(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/kitchenimage.png')" // Replace with actual image path
      // Replace with actual image path
      bgSize="cover"
      bgPosition="center"
      p={8}
      borderRadius="md"
      position="relative" // Ensure relative positioning for absolute header
      height="100vh"
    >
      {/* Main Content */}
      <Box
        color="white"
        position="relative"
        zIndex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        textAlign={"center"} // Set the height to 100% to occupy the full height of the parent container
      >
        <Heading as="h1" size="3xl" mb={4} mt={10}>
          <Text as="span" >
            Thermofoil & Architectural
          </Text>
          <br />
          <Text as="span" >
            Films For {""}
            <Text as="span" fontStyle="italic">
              Full-Scale
            </Text>
          </Text>
          <br />
          <Text as="span" fontStyle="italic">
            Interior Transformations
          </Text>
        </Heading>
        <Text m={8} fontSize={"2xl"}>
          Transform Your Cabinets, Countertops, & Walls In Just 2-3 Days!
        </Text>
        <Button colorScheme="orange" size="lg" fontSize={"xl"} m={5}>
          Book a Free Consultation
        </Button>
      </Box>

      {/* Header Component */}
    </Box>
  );
};

export default Hero;
