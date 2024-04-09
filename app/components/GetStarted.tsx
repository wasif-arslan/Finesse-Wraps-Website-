import { Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

const GetStarted = () => {
  return (
    <Box
      bg="black"
      color="white"
      textAlign="center"
      p={{ base: "8", md: "20" }}
    >
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={8}>
        Contact Us To Unlock Your Dream Space, Today!
      </Text>
      <Text
        mb={8}
        fontSize={{ base: "lg", md: "2xl" }}
        ml={{ base: "2", md: "20" }}
        mr={{ base: "2", md: "20" }}
      >
        Transform your home with Finesse Wraps Ltd. Serving Kelowna and the
        Okanagan, we are your local experts in thermofoil cabinet design. Contact
        us for a free quote and lets create your dream space. Get in touch now!
      </Text>
      <Link href="/contact">
        <Button color="black" p={5} size="lg" fontSize="2xl" pl={20} pr={20}>
          Get Started
        </Button>
      </Link>
    </Box>
  );
};

export default GetStarted;
