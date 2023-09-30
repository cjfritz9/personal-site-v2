import React, { useContext, useEffect, useState } from 'react';
import { Container, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { RiCloseLine } from 'react-icons/ri';
import { scrollbarStyles } from '../../../theme/BrandColors';
import ProjectCard from './ProjectCard';
import { ProjectsContext } from '../../../context/Projects.context';

const ProjectsDisplay: React.FC = () => {
  const { filteredProjects, filters, setFilters } = useContext(ProjectsContext)!;

  return (
    <Container variant='display'>
      <Stack gap='1px' w='100%'>
        <Flex
          h='40px'
          w='fit-content'
          m={0}
          p='.5rem'
          borderRight='1px solid'
          borderColor='Lines'
          alignItems='center'
        >
          <Text variant='label' px='1rem'>
            {filters.length ? `${filters.join(' + ')} projects` : 'all projects'}
          </Text>
          <Icon as={RiCloseLine} fontSize='20px' onClick={() => setFilters([])} />
        </Flex>
        <Flex
          py='4rem'
          px='8rem'
          mt='-1px'
          mb='-1px'
          mr='-1px'
          borderTop='1px solid'
          borderColor='Lines'
          overflowY='scroll'
          css={scrollbarStyles}
          gap='2.5rem'
          flexWrap='wrap'
        >
          {filteredProjects.map((project, i) => {
            return <ProjectCard key={i} projectNum={i + 1} project={project} />;
          })}
        </Flex>
      </Stack>
    </Container>
  );
};

export default ProjectsDisplay;
