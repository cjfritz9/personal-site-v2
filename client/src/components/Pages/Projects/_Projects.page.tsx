import React, { useState } from 'react';
import { Container, HStack } from '@chakra-ui/react';
import Filter from './Filter';
import ProjectsDisplay from './ProjectsDisplay';
import { projectItems } from './data/projectItems';
import { ProjectsProvider } from '../../../context/Projects.context';

const ProjectsPage: React.FC = () => {

  return (
    <Container variant='page'>
      <ProjectsProvider>
        <HStack alignItems='flex-start' h='100%' w='100%' gap={0}>
          <Filter />
          <ProjectsDisplay />
        </HStack>
      </ProjectsProvider>
    </Container>
  );
};

export default ProjectsPage;
