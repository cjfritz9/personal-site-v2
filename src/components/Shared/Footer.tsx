import React from 'react';
import { Container, Flex, Icon, Text } from '@chakra-ui/react';
import { RiLinkedinBoxLine, RiGithubLine } from 'react-icons/ri';

const Footer: React.FC = () => {
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
        <Text color='Accent.emerald !important'>
          {'>'}
        </Text>
        <Text fontWeight='bold'>{'_'}</Text>
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
