import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Flex align="center" direction={{ base: "column", md: "row" }}>
            <Box flex={1} mr={{ md: 10 }}>
              <Heading as="h1" size="2xl" mb={4}>
                Open Asteroid Impact
              </Heading>
              <Text fontSize="xl" mb={8}>
                The future of astro mining is here. Join the space revolution and unlock the potential of asteroid resources.
              </Text>
              <Button colorScheme="blue" size="lg" rightIcon={<FaRocket />}>
                Get Started
              </Button>
            </Box>
            <Box flex={1}>
              <Image src="https://images.unsplash.com/photo-1578309756042-b445687e326c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhc3Rlcm9pZCUyMG1pbmluZ3xlbnwwfHx8fDE3MTIwMjI3NzN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Asteroid mining" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Testimonials section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            What Industry Leaders Say
          </Heading>
          <Stack spacing={8} direction={{ base: "column", md: "row" }}>
            <Box p={6} bg="white" rounded="md" shadow="md">
              <Text fontSize="lg" mb={4}>
                "Open Asteroid Impact is revolutionizing the space industry. Their astro mining technology is unparalleled."
              </Text>
              <Text fontWeight="bold">Elon Musk</Text>
              <Text fontSize="sm" color="gray.600">
                CEO, SpaceX
              </Text>
            </Box>
            <Box p={6} bg="white" rounded="md" shadow="md">
              <Text fontSize="lg" mb={4}>
                "The potential for asteroid mining is immense. Open Asteroid Impact is at the forefront of this exciting frontier."
              </Text>
              <Text fontWeight="bold">Andrew Carnegie</Text>
              <Text fontSize="sm" color="gray.600">
                Industrialist, 19th Century
              </Text>
            </Box>
            <Box p={6} bg="white" rounded="md" shadow="md">
              <Text fontSize="lg" mb={4}>
                "Open Asteroid Impact's vision for the future of space exploration and resource utilization is truly inspiring."
              </Text>
              <Text fontWeight="bold">John D. Rockefeller</Text>
              <Text fontSize="sm" color="gray.600">
                Business Magnate, 19th Century
              </Text>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Pricing section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Astro Mining Pricing Plans
          </Heading>
          <Stack spacing={8} direction={{ base: "column", md: "row" }}>
            <Box p={8} bg="white" rounded="md" shadow="md" flex={1}>
              <Heading as="h3" size="lg" mb={4}>
                Basic Plan
              </Heading>
              <Text fontSize="3xl" fontWeight="bold" mb={4}>
                $999/month
              </Text>
              <VStack align="start" spacing={4}>
                <Text>10 asteroid mining missions</Text>
                <Text>1 TB of asteroid data storage</Text>
                <Text>Basic analytics and reports</Text>
              </VStack>
              <Button colorScheme="blue" size="lg" mt={8}>
                Choose Plan
              </Button>
            </Box>
            <Box p={8} bg="white" rounded="md" shadow="md" flex={1}>
              <Heading as="h3" size="lg" mb={4}>
                Pro Plan
              </Heading>
              <Text fontSize="3xl" fontWeight="bold" mb={4}>
                $4999/month
              </Text>
              <VStack align="start" spacing={4}>
                <Text>100 asteroid mining missions</Text>
                <Text>10 TB of asteroid data storage</Text>
                <Text>Advanced analytics and reports</Text>
                <Text>Priority support</Text>
              </VStack>
              <Button colorScheme="blue" size="lg" mt={8}>
                Choose Plan
              </Button>
            </Box>
            <Box p={8} bg="white" rounded="md" shadow="md" flex={1}>
              <Heading as="h3" size="lg" mb={4}>
                Enterprise Plan
              </Heading>
              <Text fontSize="3xl" fontWeight="bold" mb={4}>
                Custom
              </Text>
              <VStack align="start" spacing={4}>
                <Text>Unlimited asteroid mining missions</Text>
                <Text>Unlimited asteroid data storage</Text>
                <Text>Dedicated support and consulting</Text>
                <Text>Custom integrations and APIs</Text>
              </VStack>
              <Button colorScheme="blue" size="lg" mt={8}>
                Contact Us
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
