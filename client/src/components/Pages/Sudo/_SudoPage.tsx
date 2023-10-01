import React, { useContext, useEffect, useState } from 'react';
import { Container, Heading, Link, Stack, Text } from '@chakra-ui/react';
import JobApplicationTracker from './JobApplicationTracker';
import AppForm from './AppForm';
import { JobAppResponse } from '../../../@types/responses';
import { SiteContext } from '../../../context/Site.context';
import { SiteInterface } from '../../../@types/context';

const SudoPage: React.FC = () => {
  const [editingData, setEditingData] = useState<JobAppResponse | undefined>();
  const [refreshList, setRefreshList] = useState(false);
  const { isSudoUser, navigate } = useContext(SiteContext) as SiteInterface;

  if (!isSudoUser) {
    return (
      <Container variant='page'>
        <Heading color='Accent.purple !important'>Unauthorized</Heading>
        <Stack alignItems='center' gap='2rem'>
          <Text>You shouldn't be here!</Text>
          <Link color='Accent.orange !important' onClick={() => navigate('/')}>
            Go back home
          </Link>
        </Stack>
      </Container>
    );
  }

  return (
    <Container variant='page' overflowY='auto'>
      <Stack
        alignItems={[
          'center',
          'center',
          'center',
          'center',
          'center',
          'flex-start'
        ]}
        justifyContent='center'
        flexDir={['column', 'column', 'column', 'column', 'column', 'row']}
        gap={['3rem', '3rem', '3rem','3rem', '3rem', '1rem']}
      >
        <AppForm
          editingData={editingData}
          setEditingData={setEditingData}
          setRefreshList={setRefreshList}
        />
        <JobApplicationTracker
          setEditingData={setEditingData}
          refreshList={refreshList}
        />
      </Stack>
    </Container>
  );
};

export default SudoPage;
