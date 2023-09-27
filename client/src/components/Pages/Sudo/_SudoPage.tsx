import React, { useContext, useEffect, useState } from 'react';
import {
  Container,
  HStack,
  Heading,
  Link,
  Stack,
  Text
} from '@chakra-ui/react';
import JobApplicationTracker from './JobApplicationTracker';
import { SiteContext } from '../../../context/Site.context';
import { SiteInterface } from '../../../@types/context';
import { useNavigate } from 'react-router';
import AppForm from './AppForm';
import { JobAppResponse } from '../../../@types/responses';

const SudoPage: React.FC = () => {
  const [editingData, setEditingData] = useState<JobAppResponse | undefined>();
  // const { isSudoUser } = useContext(SiteContext) as SiteInterface;

  // const navigate = useNavigate();

  // if (!isSudoUser) {
  //   return (
  //     <Container variant='page'>
  //       <Heading color='Accent.purple !important'>Unauthorized</Heading>
  //       <Stack alignItems='center' gap='2rem'>
  //         <Text>You shouldn't be here!</Text>
  //         <Link color='Accent.orange !important' onClick={() => navigate('/')}>
  //           Go back home
  //         </Link>
  //       </Stack>
  //     </Container>
  //   );
  // }

  return (
    <Container variant='page' overflowY='scroll'>
      <HStack alignItems='flex-start' gap='4rem'>
        <AppForm editingData={editingData} setEditingData={setEditingData} />
        <JobApplicationTracker setEditingData={setEditingData} />
      </HStack>
    </Container>
  );
};

export default SudoPage;
