import React, { useContext, useEffect, useState } from 'react';
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
  TabPanel
} from '@chakra-ui/react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';

import Panel from '../Shared/Panel';
import { useNavigate } from 'react-router';
import { SiteContext } from '../../context/Site.context';
import { Pages, SiteInterface } from '../../@types/context';

const links = [
  { title: 'Home.tsx', path: '/home' },
  { title: 'AboutMe.tsx', path: '/about' },
  { title: 'Projects.tsx', path: '/projects' }
];

const Header: React.FC = () => {
  const { location, isSudoUser } = useContext(SiteContext) as SiteInterface;
  const [activeTab, setActiveTab] = useState<Pages>('home');
  const [isSmallerThan480, isSmallerThan992] = useMediaQuery([
    '(max-width: 480px)',
    '(max-width: 992px)'
  ]);

  const navigate = useNavigate();

  if (isSudoUser && !links[3]) {
    links.push({ title: 'Sudo.tsx', path: '/sudo' });
  }

  useEffect(() => {
    if (location.pathname.includes('/about')) {
      setActiveTab('about');
    }

    if (location.pathname.includes('/home') || location.pathname === '/') {
      setActiveTab('home');
    }

    if (location.pathname.includes('/projects')) {
      setActiveTab('projects');
    }

    if (location.pathname.includes('/sudo')) {
      setActiveTab('sudo');
    }
  }, [location.pathname]);

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
          <Tabs
            index={activeTab === 'home' ? 0 : activeTab === 'about' ? 1 : activeTab === 'projects' ? 2 : 3}
          >
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
