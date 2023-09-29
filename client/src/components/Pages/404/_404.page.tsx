import React, { useContext } from 'react';
import { Container, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { SiteContext } from '../../../context/Site.context';
import { SiteInterface } from '../../../@types/context';

const _404Page: React.FC = () => {
  const { navigate } = useContext(SiteContext) as SiteInterface;

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
