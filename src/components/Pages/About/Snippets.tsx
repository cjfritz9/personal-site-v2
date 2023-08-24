import React, { useEffect, useState } from 'react';
import { Octokit } from 'octokit';
import { Container, Flex, Stack, Text } from '@chakra-ui/react';
import Snippet from './Snippet';
import { scrollbarStyles } from '../../../theme/BrandColors';

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_AUTH_TOKEN
});

const Snippets: React.FC = () => {
  const [gists, setGists] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const response = await octokit.request('GET /gists/starred', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });
      if (response.status === 200 && response.data[0]) {
        setGists(response.data);
      }
    })();
  }, []);

  return (
    <Container variant='snippets'>
      <Stack gap='1px' w='100%'>
        <Flex
          h='40px'
          w='100%'
          m={0}
          p='.5rem'
          mt='-1px'
          borderBottom='1px solid'
          borderRight='1px solid'
          borderColor='Lines'
          alignItems='center'
        >
          <Text variant='label'>// Code Snippets</Text>
        </Flex>
        <Stack mt='-1px' mb='-1px' p='1rem' overflowY='auto' css={scrollbarStyles}>
          {gists &&
            gists[0] &&
            gists.map((gist: any, i) => {
              return (
                <Snippet
                  key={i}
                  description={gist.description}
                  //@ts-ignore
                  raw_url={Object.values(gist.files)[0].raw_url}
                />
              );
            })}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Snippets;
