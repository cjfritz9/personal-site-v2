import React from 'react';
import { Container } from '@chakra-ui/react';
import Section from './Section';
import Folder from './Folder';

const Directory: React.FC = () => {
  return (
    <Container variant='directory'>
      <Section title={'personal-info'} isFirst />
      <Folder folderColor='orange' folderName='bio' children={[]} />
      <Folder folderColor='teal' folderName='interests' children={[]} />
      <Folder
        folderColor='blue'
        folderName='education'
        children={['high-school', 'college']}
      />
      <Section title={'contacts'} />
    </Container>
  );
};

export default Directory;
