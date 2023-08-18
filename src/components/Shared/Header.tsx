import React from 'react';
import { Flex, Container, Tab, TabList, Tabs, Text } from '@chakra-ui/react';

import Panel from './Panel';

const Header: React.FC = () => {
  return (
    <Container variant='header'>
      <Panel content={<Text>cj-fritz</Text>} variant='left' width='320px' />
      <Flex h='100%' grow={1}>
        <Tabs>
          <TabList>
            <Tab>Home.tsx</Tab>
            <Tab>AboutMe.tsx</Tab>
            <Tab>Projects.tsx</Tab>
          </TabList>
        </Tabs>
      </Flex>
      <Panel
        content={<Text>ContactMe.tsx</Text>}
        variant='right'
      />
    </Container>
  );
};

export default Header;
