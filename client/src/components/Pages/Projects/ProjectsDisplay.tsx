import React, { useContext, useEffect, useState } from 'react';
import { Container, Flex, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { RiCloseLine } from 'react-icons/ri';
import { scrollbarStyles } from '../../../theme/BrandColors';
import ProjectCard from './ProjectCard';
import { ProjectsContext } from '../../../context/Projects.context';
import { getFilteredProjects } from '../../../utils/projects';

const ProjectsDisplay: React.FC = () => {
  const { filteredProjects, filters, isUpdating, setFilters } =
    useContext(ProjectsContext)!;

  return (
    <Container variant='display'>
      <Stack gap='1px' h='100%' w='100%'>
        <Flex
          h='40px'
          w={['100%', 'fit-content','fit-content']}
          m={0}
          display={['none', 'none', 'flex']}
          p='8.5px'
          borderRight='1px solid'
          borderColor='Lines'
          alignItems='center'
        >
          <Text variant='label' px='1rem'>
            {filters.length
              ? `${filters.join(' + ')} projects`
              : 'all projects'}
          </Text>
          <Icon
            as={RiCloseLine}
            fontSize='20px'
            onClick={() => setFilters([])}
          />
        </Flex>
        <Flex
          h='100%'
          // grow={1}
          py={['2rem','2rem','2rem','2rem','4rem','4rem']}
          px={['1rem', '1rem', '4rem', '4rem', '4rem', '8rem']}
          mt='-1px'
          mb='-1px'
          mr='-1px'
          borderTop='1px solid'
          borderColor='Lines'
          gap='2rem'
          flexWrap='wrap'
          justifyContent={['center', 'center', 'start']}
          overflowY={['visible', 'visible', 'scroll']}
          css={scrollbarStyles}
        >
          {filteredProjects.length || isUpdating ? (
            filteredProjects.map((project, i) => {
              const showCard = getFilteredProjects(filters).find(
                (proj) => proj.title === project.title
              );
              return (
                <ProjectCard
                  key={i}
                  showCard={showCard ? true : false}
                  projectNum={i + 1}
                  project={project}
                />
              );
            })
          ) : (
            <HStack>
              <Text>no</Text>
              <Text color='Accent.rose !important'>{filters.join(' + ')}</Text>
              <Text>projects were found</Text>
            </HStack>
          )}
        </Flex>
      </Stack>
    </Container>
  );
};

export default ProjectsDisplay;
