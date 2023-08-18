import React from 'react';
import { Container, Flex, Icon, Input, Text } from '@chakra-ui/react';
import { RiLinkedinBoxLine, RiGithubLine } from 'react-icons/ri';

import Panel from './Panel';
import Terminal from './Terminal';

const Footer: React.FC = () => {
  return (
    <Container variant='footer'>
      <Panel content={<Text>connect</Text>} variant='left' />
      <Panel
        content={<Icon as={RiLinkedinBoxLine} fontSize='24px' />}
        variant='left'
      />
      <Terminal />
      <Panel
        content={
          <>
            <Text>@cjfritz9</Text>
            <Icon as={RiGithubLine} fontSize='20px' />
          </>
        }
        variant='right'
      />
    </Container>
  );
};

export default Footer;
