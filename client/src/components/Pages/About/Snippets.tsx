import React from 'react';
import { Container, Flex, Stack, Text } from '@chakra-ui/react';
import Snippet from './Snippet';
import { scrollbarStyles } from '../../../theme/BrandColors';
import useSnippets from '../../../hooks/useSnippets';

const Snippets: React.FC = () => {
  const { snippets } = useSnippets();

  return (
    <Container variant='snippets'>
      <Stack gap='1px' w='100%'>
        <Flex
          h='40px'
          w='100%'
          m={0}
          py='.5rem'
          px='2.5rem'
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
          p='2.5rem'
          gap='2.5rem'
          overflowY='auto'
          css={scrollbarStyles}
        >
          {snippets.length > 0 &&
            snippets.map((snippet, i) => {
              return (
                <Snippet
                  key={i}
                  author={snippet.owner.login}
                  createdAt={snippet.created_at}
                  profileUrl={snippet.owner.url}
                  avatarUrl={snippet.owner.avatar_url}
                  description={snippet.description}
                  language={snippet.files['my-site-gist.ts'].language}
                  rawData={snippet.files['my-site-gist.ts'].raw_data}
                />
              );
            })}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Snippets;
