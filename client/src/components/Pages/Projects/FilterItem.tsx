import React, { useContext, useEffect, useState } from 'react';
import { Box, Checkbox, HStack, Icon, Text } from '@chakra-ui/react';
import { FilterItemProps } from '../../../@types/props';
import { projectItems } from './data/projectItems';
import { ProjectsContext } from '../../../context/Projects.context';
import { Technologies } from '../../../@types/projects';

const FilterItem: React.FC<FilterItemProps> = ({ item }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { filters, setFilters, setIsUpdating } = useContext(ProjectsContext)!;
  const { name, icon } = item;

  const handleUpdateFilter = () => {
    setIsUpdating(true);
    if (isSelected) {
      setFilters((prev) => prev.filter((tech) => tech !== name.toLowerCase()));
    } else {
      setFilters((prev) => [...prev, name.toLowerCase() as Technologies[0]]);
    }
    setIsSelected((prev) => !prev);
  };

  useEffect(() => {
    if (filters.length === 0) {
      setIsSelected(false);
    }
    if (filters.includes(name.toLowerCase() as Technologies[0])) {
      setIsSelected(true);
    }
  }, [filters]);

  return (
    <Box px='1rem'>
      <HStack
        color={isSelected ? 'Secondary.white' : 'Secondary.slate'}
        userSelect='none'
        cursor='pointer'
        justifyContent='center'
        onClick={handleUpdateFilter}
      >
        <Checkbox
          h='24px'
          w='24px'
          mr='8px'
          isChecked={isSelected}
          pointerEvents='none'
        />
        <Icon
          role='checkbox'
          as={icon}
          fill={isSelected ? 'Secondary.white' : ''}
          color='inherit !important'
          h='20px'
          w='20px'
        />
        <Text color='inherit !important'>{name}</Text>
      </HStack>
    </Box>
  );
};

export default FilterItem;
