import React from 'react';
import { Container, Flex, Icon, Text, useMediaQuery } from '@chakra-ui/react';
import { RiLinkedinBoxLine, RiGithubLine } from 'react-icons/ri';

import Panel from './Panel';
import Terminal from './Terminal';

const Footer: React.FC = () => {
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');
  return (
    <Container variant='footer'>
      {isLargerThan480 && (
        <Panel content={<Text>connect</Text>} variant='left' />
      )}
      <Panel
        content={<Icon as={RiLinkedinBoxLine} fontSize='24px' />}
        variant='left'
        styles={{ px: isLargerThan480 && '1.5rem' }}
      />
      <Terminal />
      <Panel
        content={
          <>
            {isLargerThan480 && <Text>@cjfritz9</Text>}
            <Icon as={RiGithubLine} fontSize='20px' />
          </>
        }
        variant='right'
      />
    </Container>
  );
};

export default Footer;
