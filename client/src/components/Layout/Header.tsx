import React from 'react';
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
  MenuItem
} from '@chakra-ui/react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';

import Panel from '../Shared/Panel';
import { useNavigate } from 'react-router';

const links = [
  { title: 'Home.tsx', path: '/home' },
  { title: 'AboutMe.tsx', path: '/about' },
  { title: 'Projects.tsx', path: '/projects' }
];

const Header: React.FC = () => {
  const [isSmallerThan480, isSmallerThan992] = useMediaQuery([
    '(max-width: 480px)',
    '(max-width: 992px)'
  ]);

  const navigate = useNavigate();

  if (isSmallerThan992) {
    return (
      <Container variant='header'>
        <Panel
          content={<Text fontSize='16px'>cj-fritz</Text>}
          variant='mobile'
          width='100%'
        />
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
                {links.map((link, i) => (
                  <MenuItem key={i} onClick={() => navigate(link.path)}>
                    {link.title}
                  </MenuItem>
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
        <Panel
          content={<Text>cj-fritz</Text>}
          variant='left'
          width='320px'
          styles={{ _hover: { bgColor: 'Primary.dkSlate' }, cursor: 'auto' }}
        />
        <Flex h='100%' grow={1}>
          <Tabs>
            <TabList>
              {links.map((link, i) => (
                <Tab key={i} onClick={() => navigate(link.path)}>
                  {link.title}
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </Flex>
        <Panel
          content={<Text>ContactMe.tsx</Text>}
          variant='right'
          clickHandler={() => navigate('/contact')}
        />
      </Container>
    );
  }
};

export default Header;
