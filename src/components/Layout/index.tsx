import { VStack } from '@chakra-ui/layout';
import { Container } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import Header from './Header';

type Props = PropsWithChildren<{}>;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxW="container.xl" >
      <VStack spacing={0}>
        {/* Header */}
        <Header />
        {
          children
        }
        {/* Footer */}
      </VStack>
    </Container>
  )
}

export default Layout;