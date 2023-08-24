import React from 'react';
import { Container, Flex, Icon, Text, useMediaQuery } from '@chakra-ui/react';
import { RiLinkedinBoxLine, RiGithubLine } from 'react-icons/ri';

import Panel from '../Shared/Panel';
import Terminal from '../Terminal/Terminal';

const Footer: React.FC = () => {
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');
  return (
    <Container variant='footer'>
      {isLargerThan480 && (
        <Panel
          content={<Text>connect</Text>}
          variant='left'
          styles={{ _hover: { bgColor: 'Primary.dkSlate' }, cursor: 'auto' }}
        />
      )}
      <Panel
        content={<Icon as={RiLinkedinBoxLine} />}
        variant='left'
        clickHandler={() =>
          window.open('https://linkedin.com/in/cj-fritz', '_blank')
        }
        styles={{
          px: isLargerThan480 && '1.5rem'
        }}
      />
      <Terminal />
      <Panel
        content={
          <>
            {isLargerThan480 && <Text>@cjfritz9</Text>}
            <Icon as={RiGithubLine} />
          </>
        }
        variant='right'
        clickHandler={() =>
          window.open('https://github.com/cjfritz9', '_blank')
        }
      />
    </Container>
  );
};

export default Footer;
