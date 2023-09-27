import React, { Dispatch, useEffect, useState } from 'react';
import {
  Avatar,
  Badge,
  Center,
  chakra,
  Icon,
  HStack,
  Stack,
  Text,
  Menu,
  MenuButton,
  List,
  ListItem,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react';
import useJobApps from '../../../hooks/useJobApps';
import { JobAppResponse } from '../../../@types/responses';
import { IoEllipsisVerticalSharp, IoTrashBin } from 'react-icons/io5';
import { RiEdit2Line, RiExternalLinkLine } from 'react-icons/ri';
import { updateJobApp } from '../../../hooks/requests';

interface Props {
  setEditingData: React.Dispatch<
    React.SetStateAction<JobAppResponse | undefined>
  >;
}

const JobApplicationTracker: React.FC<Props> = ({ setEditingData }) => {
  const { jobApps, isLoading } = useJobApps();
  const [order, setOrder] = useState(() => jobApps.map((app) => app.id));

  useEffect(() => {
    setOrder(() => jobApps.map((app) => app.id));
  }, [jobApps]);

  return (
    <Center maxW='sm' mx='auto' py={{ base: '4', md: '8' }}>
      <Stack spacing='5' flex='1'>
        <List listStyleType='none'>
          <Stack spacing='3' width='full' minW='320px'>
            {order
              .map((item) => jobApps.find((app) => app.id === item))
              .map((app) =>
                app && app.isActive ? (
                  <AppCard data={app} setEditingData={setEditingData} />
                ) : null
              )}
          </Stack>
        </List>
      </Stack>
    </Center>
  );
};

interface CardProps {
  data: JobAppResponse;
  setEditingData: React.Dispatch<
    React.SetStateAction<JobAppResponse | undefined>
  >;
}

const AppCard: React.FC<CardProps> = ({ data, setEditingData }) => {
  const handleNav = (url: string) => {
    window.open(url, '_blank');
  };

  const handleDelete = async () => {
    data.isActive = false;
    await updateJobApp(data);
  };

  return (
    <ListItem
      key={data.id}
      value={data.id}
      bg='Primary.dkGray'
      p='4'
      boxShadow='sm'
      position='relative'
      borderRadius='lg'
      minW='480px'
    >
      <Stack shouldWrapChildren spacing='4'>
        <Stack spacing='0'>
          <HStack alignItems='flex-start' justifyContent='space-between'>
            <Text
              fontSize='18px'
              fontWeight='bold'
              color='Accent.emerald !important'
            >
              {data.companyName}
            </Text>
            <HStack>
              <Icon
                _hover={{
                  color: 'white',
                  transform: 'scale(1.1)'
                }}
                as={RiExternalLinkLine}
                fontSize='20px'
                onClick={() => handleNav(data.postLink)}
              />
              <Menu placement='left-start' offset={[-4, -12]} isLazy>
                <MenuButton
                  _active={{
                    color: 'white',
                    bg: 'transparent'
                  }}
                  _hover={{
                    color: 'white',
                    bg: 'transparent',
                    transform: 'scale(1.1)'
                  }}
                  color='Secondary.slate'
                  h='20px'
                  bg='transparent'
                  as={IconButton}
                  cursor='pointer'
                  icon={<IoEllipsisVerticalSharp />}
                  fontSize='20px'
                ></MenuButton>
                <MenuList minW='0px' boxShadow='none'>
                  <MenuItem
                    _hover={{ color: 'white' }}
                    icon={<RiEdit2Line />}
                    py='4px'
                    color='Secondary.slate'
                    onClick={() => setEditingData(data)}
                  >
                    Edit
                  </MenuItem>
                  <MenuItem
                    _hover={{ color: 'white' }}
                    icon={<IoTrashBin />}
                    py='4px'
                    color='Secondary.slate'
                    onClick={handleDelete}
                  >
                    Delete
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
          <Text fontSize='16px' color='Secondary.white !important'>
            {data.positionTitle}
          </Text>
        </Stack>
        <HStack justify='space-between'>
          <Badge
            colorScheme={
              data.status.name === 'submitted'
                ? 'cyan'
                : data.status.name === 'interviewing'
                ? 'yellow'
                : data.status.name === 'stale'
                ? 'red'
                : 'green'
            }
            size='sm'
          >
            {data.status.name}
          </Badge>
          <Text fontSize='14px'>{data.dateSubmitted}</Text>
        </HStack>
      </Stack>
    </ListItem>
  );
};

export default JobApplicationTracker;
