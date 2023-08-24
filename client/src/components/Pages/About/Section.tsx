import React, { useState } from 'react';
import { Container, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { RiArrowDownSFill, RiArrowRightSFill } from 'react-icons/ri';
import { SectionProps } from '../../../@types/props';
import Folder from './Folder';

const Section: React.FC<SectionProps> = ({ title, folders }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Stack>
      <Container
        variant='section'
        mt='-1px'
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <Icon
          as={isExpanded ? RiArrowDownSFill : RiArrowRightSFill}
          fontSize='20px'
          style={{ color: 'white' }}
        />
        <Text variant='label' color='Secondary.white !important'>
          {title}
        </Text>
      </Container>
      {isExpanded && (
        <Stack pt='.5rem' pb='1rem'>
          {folders.map((folder, i) => (
            <Folder
              key={i}
              folderName={folder.folderName}
              folderColor={folder.folderColor}
              items={folder.items}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default Section;
