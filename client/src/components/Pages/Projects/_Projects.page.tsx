import React, { useState } from 'react';
import { Container, HStack, Stack } from '@chakra-ui/react';
import Filter from './Filter';
import ProjectsDisplay from './ProjectsDisplay';
import { projectItems } from './data/projectItems';
import { ProjectsProvider } from '../../../context/Projects.context';
import { scrollbarStyles } from '../../../theme/BrandColors';

const ProjectsPage: React.FC = () => {
  return (
    <ProjectsProvider>
      <Container variant='page'>
        <Stack
          alignItems='flex-start'
          h='100%'
          w='100%'
          gap={0}
          flexDir={['column', 'column', 'row']}
          overflowY={['scroll', 'scroll', 'hidden']}
          css={scrollbarStyles}
        >
          <Filter />
          <ProjectsDisplay />
        </Stack>
      </Container>
    </ProjectsProvider>
  );
};

export default ProjectsPage;
