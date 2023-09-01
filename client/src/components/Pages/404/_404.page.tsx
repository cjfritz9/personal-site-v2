import React from 'react';
import { Container, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

const _404Page: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container variant='page'>
      <Heading color='Accent.purple !important'>404</Heading>
      <Stack alignItems='center' gap='2rem'>
        <Text>The page you are looking for was not found</Text>
        <Link color='Accent.orange !important' onClick={() => navigate('/')}>
          Go back home
        </Link>
      </Stack>
    </Container>
  );
};

export default _404Page;
