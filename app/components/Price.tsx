import { Box, Text, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Price = () => {
  return (
    <Box
      bg="white"
      borderRadius="md"
      textAlign="center"
      pr={{ base: "10", md: "20" }}
      pl={{ base: "10", md: "20" }}
      pt={{ base: "10", md: "40" }}
      pb={"10"}
      p={{ base: "10", md: "20" }}
      boxShadow="md" // Add shadow
    >
      <Text fontSize="3xl" fontWeight="bold" mb={4} textAlign="center">
        Affordable Pricing for Your{" "}
        <Text as="span" fontStyle="italic">
          Dream Kitchen Transformation
        </Text>
      </Text>
      <Flex justifyContent="center" flexWrap="wrap" mt={20}>
        {/* Simple Kitchen */}
        <Box
          p={6}
          pb={8}
          bg="white"
          borderRadius="md"
          boxShadow="sm"
          border="1px solid" // Add border
          borderColor="gray.200" // Set border color
          flex={{ base: "1 0 100%", md: "1 0 30%" }}
          mb={4}
          mr={{ md: 4 }}
        >
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color="orange.500"
            mb={4}
            mt={10}
          >
            $2799
          </Text>
          <Text fontWeight="bold" fontSize="xl" mb={4}>
            Simple Kitchen
          </Text>
          <Text mb={12}>
            A compact solution that maximizes style and functionality, perfectly
            tailored for smaller kitchens.
          </Text>
          <Link href="/contact">
            <Button
              backgroundColor="black"
              textColor={"white"}
              size="lg"
              mt={10}
              w="100%"
            >
              Get In Touch
            </Button>
          </Link>
        </Box>

        {/* Medium Kitchen */}
        <Box
          p={6}
          pb={8}
          bg="white"
          borderRadius="md"
          boxShadow="sm"
          border="1px solid" // Add border
          borderColor="gray.200" // Set border color
          flex={{ base: "1 0 100%", md: "1 0 30%" }}
          mb={4}
          mr={{ md: 4 }}
        >
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color="orange.500"
            mb={4}
            mt={10}
          >
            $3799
          </Text>
          <Text fontWeight="bold" fontSize="xl" mb={4}>
            Medium Kitchen
          </Text>
          <Text mb={12}>
            A balanced blend of elegance and practicality for mid-sized kitchen
            spaces.
          </Text>
          <Link href="/contact">
            <Button
              backgroundColor="black"
              textColor={"white"}
              size="lg"
              mt={10}
              w="100%"
            >
              Get In Touch
            </Button>
          </Link>
        </Box>

        {/* Large Kitchen */}
        <Box
          p={6}
          pb={8}
          bg="white"
          borderRadius="md"
          boxShadow="sm"
          border="1px solid" // Add border
          borderColor="gray.200" // Set border color
          flex={{ base: "1 0 100%", md: "1 0 30%" }}
          mb={4}
        >
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color="orange.500"
            mb={4}
            mt={10}
          >
            $5799
          </Text>
          <Text fontWeight="bold" fontSize="xl" mb={4}>
            Large Kitchen
          </Text>
          <Text mb={12}>
            An extensive upgrade solution delivering luxury and sophistication
            for spacious kitchens.
          </Text>
          <Link href="/contact">
            <Button
              backgroundColor="black"
              textColor={"white"}
              size="lg"
              mt={10}
              w="100%"
            >
              Get In Touch
            </Button>
          </Link>
        </Box>
      </Flex>
      <Text fontSize="sm" mt={10} textAlign="center">
        *Pricing does not include any applicable sales tax, and fees may apply.
      </Text>
    </Box>
  );
};

export default Price;
