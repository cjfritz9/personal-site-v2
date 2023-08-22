import React from 'react';
import { Container, Heading, Link, Stack, Text } from '@chakra-ui/react';

const _404Page: React.FC = () => {
  return (
    <Container variant='page'>
      <Heading color='Accent.purple !important'>404</Heading>
      <Stack alignItems='center' gap='2rem'>

      <Text>The page you are looking for was not found</Text>
      <Text color='Accent.orange !important' as={Link} href={'/home'}>
        Go back home
      </Text>
      </Stack>
    </Container>
  );
};

export default _404Page;
