import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const Services = () => {
  return (
    <Box p={{ base: "auto", md: "20" }} mx={{ base: "10%", md: "auto" }}>
      <Text
        fontSize="3xl"
        fontWeight="bold"
        mt={20}
        mb={20}
        textAlign="center"
        fontStyle="italic"
      >
        Discover What Makes Us Special!
      </Text>
      <Flex
        flexWrap="wrap"
        justifyContent={{ base: "center", md: "space-between" }}
        gap={8}
      >
        <Box
          w={{ base: "100%", md: "45%" }}
          mb={8}
          p={8}
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
        >
          <Image src={"/icon1.png"} alt="icon1" width={62} height={62} />
          <Text fontSize={"xl"} fontWeight="semibold" mb={4} mt={4}>
            Consultation
          </Text>
          <Text>
            Begin your kitchen transformation journey with a personal
            consultation. Contact us, and we will discuss your vision and
            preferences, exploring the magic we can bring to your space. This
            process is quick, clean, and completely tailored to your needs.
          </Text>
        </Box>

        <Box
          w={{ base: "100%", md: "45%" }}
          mb={8}
          p={8}
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
        >
          <Image src={"/icon2.png"} alt="icon2" width={62} height={62} />
          <Text fontSize={"xl"} fontWeight="semibold" mb={4} mt={4}>
            Design
          </Text>
          <Text>
            Armed with your ideas, our design experts will craft a custom
            kitchen blueprint. Leveraging state-of-the-art technology, we will
            present you with a range of color and style options that perfectly
            complement your home unique character.
          </Text>
        </Box>
        <Box
          w={{ base: "100%", md: "45%" }}
          mb={8}
          p={8}
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
        >
          <Image src={"/icon4.png"} alt="icon4" width={62} height={62} />
          <Text fontSize={"xl"} fontWeight="semibold" mb={4} mt={4}>
            Installation
          </Text>
          <Text>
            Our skilled technicians will bring your design to life, carefully
            wrapping up your cabinets with pre-install rigidity vinyl products.
            Expect precision, efficiency, and minimal disruption as we swiftly
            transform your space into elegant comfort.
          </Text>
        </Box>

        <Box
          w={{ base: "100%", md: "45%" }}
          mb={8}
          p={8}
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
        >
          <Image src={"/icon3.png"} alt="icon3" width={62} height={62} />
          <Text fontSize={"xl"} fontWeight="semibold" mb={4} mt={4}>
            Enjoyment
          </Text>
          <Text>
            Begin a new chapter of memories in your stunningly renovated
            kitchen. Durable and stylish countertops are ready to enhance every
            gathering and create lasting moments for years to come.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Services;
