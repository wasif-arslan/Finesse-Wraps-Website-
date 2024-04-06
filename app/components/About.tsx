// KitchenBathroomResurfacingComponent.js
import { Box, Text, Icon } from "@chakra-ui/react";
//import { FaComments, FaPencilAlt, FaTools, FaWineGlassAlt } from "react-icons/fa";

const About = () => {
  return (
    <Box p={{ base: "10", md: "20" }} bg="gray.100" textAlign="center">
      <Text fontSize="4xl" fontWeight="bold" mb={6}>
        Kitchen and Bathroom Resurfacing
      </Text>
      <Text fontSize="xl" mr={{ md: "20" }} ml={{ md: "20" }}>
        At Finesse Wraps Ltd., our expertise extends to the transformative power
        of Thermofoil and Architectural Films for cabinet, countertop, and flat
        surface remodeling. These remarkable materials enable us to efficiently
        address wear and damage, restoring your cabinets and surfaces to
        pristine condition. Ideal for everything from subtle refreshes to
        complete kitchen and interior makeovers, the versatility and
        cost-effectiveness of Thermofoil and Architectural Films make this an
        excellent solution for updating your space.
      </Text>
      {/* <Box mt={4}>
        <Icon as={FaComments} boxSize={6} color="orange.500" mr={2} />
        <Icon as={FaPencilAlt} boxSize={6} color="orange.500" mr={2} />
        <Icon as={FaTools} boxSize={6} color="orange.500" mr={2} />
        <Icon as={FaWineGlassAlt} boxSize={6} color="orange.500" />
      </Box> */}
    </Box>
  );
};

export default About;
