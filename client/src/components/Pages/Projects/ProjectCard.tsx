import React from 'react';
import { Box, Button, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { ProjectItemProps } from '../../../@types/props';
import { projectItems } from './data/projectItems';
import TechBadge from './TechBadge';

const ProjectCard: React.FC<ProjectItemProps> = ({ projectNum, project }) => {
  const { title, description, links, thumbnail, technologies } = project;

  const handleNav = (href: string) => {
    window.open(href, '_blank');
  };
  return (
    <Stack>
      <HStack>
        <Text variant='cardHeading'>{`Project ${projectNum}`}</Text>
        <Text>{`// ${title}`}</Text>
      </HStack>
      <Box
        h='320px'
        w='368px'
        border='1px solid'
        borderColor='Lines'
        borderRadius='15px'
        pos='relative'
      >
        <HStack
          pos='absolute'
          w='368px'
          mt='1rem'
          px='1.25rem'
          zIndex={2}
          justify='flex-end'
        >
          {technologies.map((t, i) => (
            <TechBadge key={i} name={t} />
          ))}
        </HStack>
        <Image
          filter='brightness(50%)'
          h='9rem'
          w='100%'
          borderTopRadius='15px'
          src={thumbnail}
          objectFit='cover'
        />
        <Stack
          h='11rem'
          py='1.5rem'
          px='2rem'
          justifyContent='space-between'
          borderTop='1px solid'
          borderBottom='1px solid'
          borderTopColor='Lines'
          bgColor='Primary.dkGray'
          borderBottomRadius='15px'
        >
          <Text maxH='3.5rem' overflowY='hidden'>
            {description}
          </Text>
          <HStack w='100%'>
            <Button
              variant='cardPrimary'
              w='100%'
              onClick={() => handleNav(links[0])}
            >
              deployment
            </Button>
            <Button
              variant='cardSecondary'
              w='60%'
              onClick={() => handleNav(links[1])}
            >
              repo
            </Button>
          </HStack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProjectCard;
