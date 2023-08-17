import React, { useEffect, useState } from 'react';
import { Container, Flex, Icon, Input, Text } from '@chakra-ui/react';
import { RiLinkedinBoxLine, RiGithubLine } from 'react-icons/ri';

const Footer: React.FC = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 600);

    return () => {
      if (cursorInterval) {
        clearInterval(cursorInterval);
      }
    };
  }, []);

  return (
    <Container variant='footer'>
      <Flex
        h='100%'
        alignItems='center'
        px='1.5rem'
        borderRight='1px solid'
        borderRightColor='Lines'
      >
        <Text>connect</Text>
      </Flex>
      <Flex
        h='100%'
        alignItems='center'
        px='.75rem'
        borderRight='1px solid'
        borderRightColor='Lines'
      >
        <Icon as={RiLinkedinBoxLine} fontSize='24px' />
      </Flex>
      <Flex h='100%' grow={1} alignItems='center' px='1.5rem'>
        <Text color='Accent.emerald !important'>{'>'}</Text>
        <Input placeholder={showCursor ? '_' : ''}></Input>
      </Flex>
      <Flex
        h='100%'
        alignItems='center'
        px='1.5rem'
        borderLeft='1px solid'
        borderLeftColor='Lines'
        gap='.75rem'
      >
        <Text>@cjfritz9</Text>
        <Icon as={RiGithubLine} fontSize='20px' />
      </Flex>
    </Container>
  );
};

export default Footer;
