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

  let activeCount = -1;
  let inactiveCount = -1;

  useEffect(() => {
    (async () => {
      await getJobApps();
    })();
  }, [refreshList]);

  return (
    <Stack
      flexDir={['column', 'column', 'column', 'row']}
      spacing='1rem'
      alignItems='flex-start'
      mt='0rem'
      pr='1rem'
      mb='1rem'
    >
      <Stack spacing='5' flex='1' alignItems='center'>
        <Text
          px='2rem'
          py='1rem'
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
          <Stack
            p='8px'
            spacing='4'
            width='full'
            maxH='78dvh'
            minW='320px'
            borderRadius='8px'
            overflowX='hidden'
            overflowY='scroll'
            boxShadow='0 4px 10px #011221 inset'
            css={{
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            {jobApps.map((app, i) => {
              app?.isActive ? activeCount++ : null;
              return app && app.isActive ? (
                <AppCard
                  key={i}
                  data={app}
                  count={activeCount}
                  setEditingData={setEditingData}
                />
              ) : null;
            })}
          </Stack>
        </List>
      </Stack>
      <Stack spacing='5' flex='1' alignItems='center'>
        <Text
          px='2rem'
          py='1rem'
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
          <Stack
            p='8px'
            spacing='4'
            width='full'
            maxH='78dvh'
            minW='320px'
            overflowX='hidden'
            overflowY='scroll'
            borderRadius='8px'
            boxShadow='0 4px 10px #011221 inset'
            css={{
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            {jobApps.map((app, i) => {
              !app.isActive ? inactiveCount++ : null;
              return app && !app.isActive ? (
                <AppCard
                  key={i}
                  data={app}
                  count={inactiveCount}
                  setEditingData={setEditingData}
                />
              ) : null;
            })}
          </Stack>
        </List>
      </Stack>
    </Stack>
  );
};

interface CardProps {
  data: JobAppResponse;
  setEditingData: React.Dispatch<
    React.SetStateAction<JobAppResponse | undefined>
  >;
  count: number;
}

const AppCard: React.FC<CardProps> = ({ data, count, setEditingData }) => {
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
      bg='Primary.dkSlate'
      p='4'
      boxShadow='sm'
      position='relative'
      borderRadius='lg'
      w={['320px', '400px', '400px', '400px', '400px', '480px']}
      shadow='dark-lg'
      pos='sticky'
      top={count * 12 + 'px'}
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
