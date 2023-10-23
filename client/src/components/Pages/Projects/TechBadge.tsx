import React, { useContext } from 'react';
import { Box, Center, Icon } from '@chakra-ui/react';
import { techItems } from './data/techItems';
import { TechBadgeProps } from '../../../@types/props';
import { ProjectsContext } from '../../../context/Projects.context';

const TechBadge: React.FC<TechBadgeProps> = ({ name }) => {
  const { filters, setFilters, setIsUpdating } = useContext(ProjectsContext)!;
  const { icon } = techItems.find(
    (filter) => filter.name.toLowerCase() === name
  )!;

  const handleClick = () => {
    setIsUpdating(true);
    if (filters.includes(name)) {
      setFilters((prev) => prev.filter((filter) => filter !== name));
    } else {
      setFilters((prev) => [...prev, name]);
    }
  };

  return (
    <Box
      h='1.75rem'
      w='1.75rem'
      bg='#86E1F9'
      borderRadius='4px'
      onClick={handleClick}
    >
      <Center h='100%'>
        <Icon as={icon} h='18px' w='18px' fill='black' />
      </Center>
    </Box>
  );
};

export default TechBadge;
