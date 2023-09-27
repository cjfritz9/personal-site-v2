import React, { Dispatch, useContext, useEffect, useState } from 'react';
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
  IconButton,
  Spinner,
  Heading
} from '@chakra-ui/react';
import useJobApps from '../../../hooks/useJobApps';
import { JobAppData, JobAppResponse } from '../../../@types/responses';
import { IoEllipsisVerticalSharp, IoTrashBin } from 'react-icons/io5';
import { RiEdit2Line, RiExternalLinkLine } from 'react-icons/ri';
import { SiteContext } from '../../../context/Site.context';
import { SiteInterface } from '../../../@types/context';

interface Props {
  setEditingData: React.Dispatch<
    React.SetStateAction<JobAppResponse | undefined>
  >;
  refreshList: boolean;
}

const JobApplicationTracker: React.FC<Props> = ({
  setEditingData,
  refreshList
}) => {
  const { jobApps, isFirstLoad, getJobApps } = useJobApps();

  useEffect(() => {
    (async () => {
      await getJobApps();
    })();
  }, [refreshList]);

  return (
    <HStack
      spacing='1rem'
      alignItems='flex-start'
      mt='5rem'
      px='3rem'
      maxH='80.4dvh'
      overflowX='hidden'
      overflowY='scroll'
    >
      <Stack spacing='5' flex='1' alignItems='center'>
        <Text
          px='2rem'
          py='1rem'
          pos='absolute'
          top='4rem'
          borderRadius='8px'
          color='Accent.purple !important'
          bg='Primary.dkSlate'
          zIndex={2}
        >{`Active (${jobApps.filter((item) => item.isActive).length})`}</Text>
        {isFirstLoad && (
          <Center>
            <Spinner
              size='xl'
              speed='0.6s'
              thickness='3px'
              color='Accent.purple'
            />
          </Center>
        )}
        <List listStyleType='none'>
          <Stack spacing='3' width='full' minW='320px'>
            {jobApps.map((app) =>
              app && app.isActive ? (
                <AppCard data={app} setEditingData={setEditingData} />
              ) : null
            )}
          </Stack>
        </List>
      </Stack>
      <Stack spacing='5' flex='1' alignItems='center'>
        <Text
          px='2rem'
          py='1rem'
          pos='absolute'
          top='4rem'
          borderRadius='8px'
          color='Accent.purple !important'
          bg='Primary.dkSlate'
          zIndex={2}
        >{`Inactive (${
          jobApps && jobApps.filter((item) => !item.isActive).length
        })`}</Text>
        {isFirstLoad && (
          <Center>
            <Spinner
              size='xl'
              speed='0.6s'
              thickness='3px'
              color='Accent.purple'
            />
          </Center>
        )}
        <List listStyleType='none'>
          <Stack spacing='3' width='full' minW='320px'>
            {jobApps.map((app) =>
              app && !app.isActive ? (
                <AppCard data={app} setEditingData={setEditingData} />
              ) : null
            )}
          </Stack>
        </List>
      </Stack>
    </HStack>
  );
};

interface CardProps {
  data: JobAppResponse;
  setEditingData: React.Dispatch<
    React.SetStateAction<JobAppResponse | undefined>
  >;
}

const AppCard: React.FC<CardProps> = ({ data, setEditingData }) => {
  const { updateJobApp } = useJobApps();
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
                  {data.isActive && (
                    <MenuItem
                      _hover={{ color: 'white' }}
                      icon={<IoTrashBin />}
                      py='4px'
                      color='Secondary.slate'
                      onClick={handleDelete}
                    >
                      Delete
                    </MenuItem>
                  )}
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
              data.status.name === 'stale' || !data.isActive
                ? 'red'
                : data.status.name === 'submitted'
                ? 'cyan'
                : data.status.name === 'interviewing'
                ? 'yellow'
                : 'green'
            }
            size='sm'
          >
            {data.isActive ? data.status.name : 'Inactive'}
          </Badge>
          <Text fontSize='14px'>{data.dateSubmitted}</Text>
        </HStack>
      </Stack>
    </ListItem>
  );
};

export default JobApplicationTracker;
