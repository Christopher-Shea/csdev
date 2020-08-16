import { Flex, Image, Text } from "@chakra-ui/core";

export default function Home() {
  return (
    <Flex
      direction="column"
      align="center"
      h="100vh"qq
      minH={600}
      minW={500}
      px={4}
      py={2}
      bg="blue.700"
    >
      <Text fontSize="6xl" color="white" mb={4} mt={6}>hello i am a tiger</Text>
      <Image
        w="50%"
        maxW={550}
        minW={400}
        h="auto"
        src="/tiger_chris.png"
        rounded="full"
        border="1px"
        borderColor="white"
      />
    </Flex>
  )
}
