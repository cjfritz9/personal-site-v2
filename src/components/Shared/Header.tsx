import React from 'react';
import { Flex, Container, Tab, TabList, Tabs, Text } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Container variant='header'>
      <Flex
        h='100%'
        w='320px'
        alignItems='center'
        pl='1.5rem'
        borderRight='1px solid'
        borderRightColor='Lines'
      >
        <Text>cj-fritz</Text>
      </Flex>
      <Flex h='100%' grow={1}>
        <Tabs>
          <TabList>
            <Tab>Home.tsx</Tab>
            <Tab>AboutMe.tsx</Tab>
            <Tab>Projects.tsx</Tab>
          </TabList>
        </Tabs>
      </Flex>
      <Flex
        h='100%'
        px='1.5rem'
        alignItems='center'
        borderLeft='1px solid'
        borderLeftColor='Lines'
      >
        <Text>ContactMe.tsx</Text>
      </Flex>
    </Container>
  );
};

export default Header;
