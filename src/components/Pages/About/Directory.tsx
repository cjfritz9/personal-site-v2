import React from 'react'
import { Container }  from '@chakra-ui/react'
import Section from './Section';

const Directory: React.FC = () => {
  return (
    <Container variant='directory'>
      <Section title={'personal-info'} isFirst />
      <Section title={'contacts'} />
    </Container>
  );
}

export default Directory;