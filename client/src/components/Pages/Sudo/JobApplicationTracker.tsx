import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import {
  Avatar,
  Badge,
  Center,
  chakra,
  HStack,
  Stack,
  Text
} from '@chakra-ui/react';
import { Reorder } from 'framer-motion';
import useJobApps from '../../../hooks/useJobApps';

const List = chakra(Reorder.Group);
const ListItem = chakra(Reorder.Item);

const JobApplicationTracker: React.FC = () => {
  const { jobApps, isLoading } = useJobApps();
  const [order, setOrder] = useState(() => jobApps.map((app) => app.id));

  useEffect(() => {
    setOrder(() => jobApps.map((app) => app.id));
  }, [jobApps]);

  return (
    <Center maxW='sm' mx='auto' py={{ base: '4', md: '8' }}>
      <Stack spacing='5' flex='1'>
        <List values={order} onReorder={setOrder} listStyleType='none'>
          <Stack spacing='3' width='full' minW='320px'>
            {order
              .map((item) => jobApps.find((app) => app.id === item))
              .map((app) =>
                app ? (
                  <ListItem
                    key={app.id}
                    value={app.id}
                    bg='Primary.dkGray'
                    p='4'
                    boxShadow='sm'
                    position='relative'
                    borderRadius='lg'
                    cursor='grab'
                    whileTap={{ cursor: 'grabbing', scale: 1.1 }}
                  >
                    <Stack shouldWrapChildren spacing='4'>
                      <Stack spacing='0'>
                        <Text
                        fontSize='18px'
                          fontWeight='bold'
                          color='Accent.emerald !important'
                        >
                          {app.companyName}
                        </Text>
                        <Text fontSize='14px'>{app.dateSubmitted}</Text>
                      </Stack>
                      <HStack justify='space-between'>
                        <Badge
                          colorScheme={
                            app.status.name === 'submitted'
                              ? 'cyan'
                              : app.status.name === 'interviewing'
                              ? 'yellow'
                              : app.status.name === 'stale'
                              ? 'red'
                              : 'green'
                          }
                          size='sm'
                        >
                          {app.status.name}
                        </Badge>
                      </HStack>
                    </Stack>
                  </ListItem>
                ) : null
              )}
          </Stack>
        </List>
      </Stack>
    </Center>
  );
};

export default JobApplicationTracker;
