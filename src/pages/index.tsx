import { Button } from '@chakra-ui/button';
import { Heading, Box, HStack, Divider } from '@chakra-ui/layout';
import React from 'react';
import Main from '../components/Main';


const Home: React.FC = () => {
  return (
    <>
      <Box flexDirection="column" justifyContent="center" py={10} >
        <Heading textAlign="center">
          Undesign
        </Heading >
        <Heading as="h6" textAlign="center" fontSize="14" my="10">
          为制造商、开发人员和设计师收集免费的设计工具和资源
        </Heading>
        {/* <HStack>
          <Button bgGradient={[
            "linear(to-tr, teal.300, yellow.400)",
            "linear(to-t, blue.200, teal.500)",
            "linear(to-b, orange.100, purple.300)",
          ]} _hover={{ bg: "green.300" }} fontWeight="bold">Submit resource</Button>
        </HStack> */}
      </Box>
      <Divider />
      <Main />
    </>
  )
}

export default Home;
