import React, { useEffect } from 'react';
import { Container, Stack } from '@chakra-ui/react';

const HomePage: React.FC = () => {
  useEffect(() => {
    const viewHeight = document.body.clientHeight;
    const filler = document.getElementById('filler')! as HTMLDivElement;
    filler.style.height = viewHeight - 104 + 'px';
  }, []);
  
  return (
    <Container variant='page'>
      <Stack id='filler'></Stack>
    </Container>
  );
};

export default HomePage;
