import React from 'react';
import { Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { FolderProps } from '../../../@types/props';
import { RiFolder3Fill, RiGraduationCapFill } from 'react-icons/ri';

const Folder: React.FC<FolderProps> = ({
  folderColor,
  folderName,
  children
}) => {
  return (
    <Stack>
      <Flex>
        <Icon as={RiFolder3Fill} color={folderColor} />
        <Text variant='label'>{folderName}</Text>
      </Flex>
      {children.map((child, i) => (
        <Flex key={i}>
          <Icon as={RiGraduationCapFill} />
          <Text variant='label'>{child}</Text>
        </Flex>
      ))}
    </Stack>
  );
};

export default Folder;
