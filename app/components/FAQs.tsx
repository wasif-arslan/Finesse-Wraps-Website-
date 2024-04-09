"use client";
import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

const FAQs = () => {
  return (
    <Box bg="white">
      <Text fontSize="3xl" fontWeight="bold" mb={10} mt={20} textAlign="center">
        Frequently Asked Questions
      </Text>
      <Text
        fontSize="xl"
        textAlign="center"
        ml={{ base: "1", md: "20" }}
        mr={{ base: "1", md: "20" }}
      >
        Explore our FAQs to find quick answers on the versatility and benefits
        of Thermofoil wrapping for your kitchen and bathroom, or reach out for a
        free consultation and tailored quote.
      </Text>
      <Accordion
        allowToggle
        m={{ base: "5", md: "20" }}
      >
        <AccordionItem borderRadius="lg" boxShadow="lg" p={3}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize={"xl"}>
                What makes thermofoil a preferred choice for busy,
                family-friendly homes?
              </Box>
              <AddIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel fontSize={"lg"}>
            Thermofoil is a great choice for busy homes because it is durable,
            easy to clean, and resistant to moisture and heat.
          </AccordionPanel>
        </AccordionItem>
        {/* Add similar structure for other FAQ questions */}
        <AccordionItem borderRadius="lg" boxShadow="lg" p={3}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize={"xl"}>
                How do thermofoil cabinets stand up to everyday wear and tear
                compared to solid wood?{" "}
              </Box>
              <AddIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel fontSize={"lg"}>
            The duration of a kitchen renovation can vary depending on the scope
            of work and other factors. On average, it may take anywhere from a
            few weeks to a few months.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem borderRadius="lg" boxShadow="lg" p={3}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize={"xl"}>
                In terms of maintenance, what advantages does thermofoil offer
                over other cabinet materials?{" "}
              </Box>
              <AddIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel fontSize={"lg"}>
            Common materials used for kitchen countertops include granite,
            quartz, marble, laminate, and butcher block.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem borderRadius="lg" boxShadow="lg" p={3}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize={"xl"}>
                Can thermofoil wrapping be customized to fit unique cabinet
                shapes and kitchen layouts?
              </Box>
              <AddIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel fontSize={"lg"}>
            Common materials used for kitchen countertops include granite,
            quartz, marble, laminate, and butcher block.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FAQs;
