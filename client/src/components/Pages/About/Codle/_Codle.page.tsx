import React from 'react';
import { Container } from '@chakra-ui/react';
import Codle from '../../Home/Codle/Codle';
import { CodleProvider } from '../../../../context/Codle.context';

const CodlePage: React.FC = () => {
  return (
    <Container
      display='block'
      variant='page'
      alignItems='center'
      justifyContent='center'
      overflowY='auto'
    >
      <CodleProvider>
        <Codle styles={{ mx: '2rem', mt: '3rem', my: '2rem', zIndex: 5}} />
      </CodleProvider>
    </Container>
  );
};

export default CodlePage;
