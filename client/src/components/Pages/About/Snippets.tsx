import React, { useEffect, useState } from 'react';
import { Octokit } from 'octokit';
import { Container, Flex, Stack, Text } from '@chakra-ui/react';
import Snippet from './Snippet';
import { scrollbarStyles } from '../../../theme/BrandColors';
import useSnippets from '../../../hooks/useSnippets';

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_AUTH_TOKEN
});

const Snippets: React.FC = () => {
  const { snippets } = useSnippets();

  return (
    <Container variant='snippets'>
      <Stack gap='1px' w='100%'>
        <Flex
          h='40px'
          w='100%'
          m={0}
          p='.5rem'
          mt='1px'
          borderBottom='1px solid'
          borderRight='1px solid'
          borderColor='Lines'
          alignItems='center'
        >
          <Text variant='label'>// Code Snippets</Text>
        </Flex>
        <Stack
          mt='-1px'
          mb='-1px'
          p='1rem'
          overflowY='auto'
          css={scrollbarStyles}
        >
          {snippets &&
            snippets[0] &&
            snippets.map((snippet: any, i) => {
              return (
                <Snippet
                  key={i}
                  description={snippet.description}
                  //@ts-ignore
                  raw_url={Object.values(snippet.files)[0].raw_url}
                />
              );
            })}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Snippets;
