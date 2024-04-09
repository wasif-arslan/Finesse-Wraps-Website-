import {
  Box,
  Heading,
  Text,
  VStack,
  Divider,
  Flex,
  Image,
} from "@chakra-ui/react";

const Learn = () => {
  return (
    <Box p={ {base: "5", md: "20" }} maxW="100%" mx="auto" mt={{ base: "20", md: "20" }}>
      <Heading as="h1" textAlign="center" mb={12} textColor={"orange.500"} fontSize={"4xl"}>
        Learn About Our Services
      </Heading>

      <VStack spacing={8} align="start">
        <Flex direction={{ base: "column", md: "row" }} alignItems="center" gap={5}>
          <Box flex="1">
            <Heading as="h2" fontSize="2xl" mb={4} textColor={"orange.500"}>
              Kitchen Resurfacing
            </Heading>
            <Text fontSize={"xl"}>
              We specialize in transforming kitchen spaces with our innovative
              resurfacing techniques. Whether you're looking to refresh your
              cabinets, countertops, or other surfaces, our team at Finesse
              Wraps Ltd. has the expertise to revitalize your kitchen.
            </Text>
          </Box>
          <Image
            src="/work3.png"
            alt="Kitchen Resurfacing"
            boxSize={{ base: "100%", md: "40%" }}
          />
        </Flex>

        <Divider />

        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          alignItems="center"
          gap={5}
        >
          <Image
            src="/work5.png"
            alt="Bathroom Resurfacing"
            boxSize={{ base: "100%", md: "40%" }}
          />

          <Box flex="1">
            <Heading as="h2" fontSize="2xl" mb={4} textColor={"orange.500"}>
              Bathroom Resurfacing
            </Heading>
            <Text fontSize={"xl"}>
              Enhance the look and feel of your bathroom with our bathroom
              resurfacing services. From updating vanity cabinets to refinishing
              bathtubs and showers, we can help you achieve a stunning bathroom
              makeover without the hassle and expense of a full renovation.
            </Text>
          </Box>
        </Flex>

        <Divider />

        <Flex direction={{ base: "column", md: "row" }} alignItems="center" gap={5}>
          <Box flex="1">
            <Heading as="h2" fontSize="2xl" mb={4} textColor={"orange.500"}>
              Our Approach
            </Heading>
            <Text fontSize={"xl"}>
              At Finesse Wraps Ltd., we prioritize quality craftsmanship and
              customer satisfaction. Our team is committed to delivering
              exceptional results while ensuring a seamless experience for our
              clients. With attention to detail and a focus on innovation, we
              strive to exceed your expectations with every project.
            </Text>
          </Box>
          <Image
            src="/work1.png"
            alt="Our Approach"
            boxSize={{ base: "100%", md: "40%" }}
          />
        </Flex>
      </VStack>
    </Box>
  );
};

export default Learn;
