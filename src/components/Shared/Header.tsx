import React, { useState } from 'react';
import {
  Flex,
  Container,
  Tab,
  TabList,
  Tabs,
  Text,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  HStack,
  Button
} from '@chakra-ui/react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';

import Panel from './Panel';

const links = ['Home.tsx', 'AboutMe.tsx', 'Projects.tsx'];

const Header: React.FC = () => {
  const [isSmallerThan480, isSmallerThan992] = useMediaQuery([
    '(max-width: 480px)',
    '(max-width: 992px)'
  ]);

  if (isSmallerThan992) {
    return (
      <Container variant='header'>
        <Panel content={<Text fontSize='16px'>cj-fritz</Text>} variant='mobile' width='100%' />
        <Menu
          placement='bottom-end'
          offset={[0, 18]}
          lazyBehavior='unmount'
          isLazy
        >
          {({ isOpen }) => (
            <>
              <MenuButton>
                {isOpen ? <RiCloseLine /> : <RiMenuLine />}
              </MenuButton>
              <MenuList
                h={isSmallerThan480 ? 'calc(100dvh - 52px)' : '100%'}
                w={isSmallerThan480 ? '100dvw' : '100%'}
              >
                {links.map((link) => (
                  <MenuItem>{link}</MenuItem>
                ))}
              </MenuList>
            </>
          )}
        </Menu>
      </Container>
    );
  } else {
    return (
      <Container variant='header'>
        <Panel content={<Text>cj-fritz</Text>} variant='left' width='320px' />
        <Flex h='100%' grow={1}>
          <Tabs>
            <TabList>
              {links.map((link) => (
                <Tab>{link}</Tab>
              ))}
            </TabList>
          </Tabs>
        </Flex>
        <Panel content={<Text>ContactMe.tsx</Text>} variant='right' />
      </Container>
    );
  }
};

export default Header;
