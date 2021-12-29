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
          为开发人员和设计师收集免费的设计工具和资源
        </Heading>
      </Box>
      <Divider />
      <Main />
    </>
  )
}

export default Home;
