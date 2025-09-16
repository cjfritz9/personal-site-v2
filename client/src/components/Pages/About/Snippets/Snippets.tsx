import { Container, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import useSnippets from '../../../../hooks/useSnippets';
import { scrollbarStyles } from '../../../../theme/BrandColors';
import Snippet, { LoadingSnippet } from './Snippet';

const Snippets: React.FC = () => {
  const { snippets, isLoading } = useSnippets();

  console.log(snippets);

  return (
    <Container
      variant='snippets'
      display={['none', 'none', 'none', 'none', 'flex']}
    >
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
          {isLoading
            ? [
                <LoadingSnippet key={0} index={0} />,
                <LoadingSnippet key={1} index={1} />,
                <LoadingSnippet key={2} index={2} />
              ]
            : snippets.map((snippet, i) => {
              if (snippet.files.length < 2) return null;
              
                return (
                  <Snippet
                    key={i}
                    author={snippet.owner.login}
                    avatarUrl={snippet.owner.avatarUrl}
                    profileUrl={snippet.owner.url}
                    url={snippet.url}
                    createdAt={snippet.createdAt}
                    snippetText={
                      snippet.files[0].name.includes('snippet')
                        ? snippet.files[0].text
                        : snippet.files[1].text
                    }
                    descriptionText={
                      snippet.files[0].name.includes('description')
                        ? snippet.files[0].text
                        : snippet.files[1].text
                    }
                    languageName={snippet.files[0].language.name}
                    languageColor={snippet.files[0].language.color}
                    stargazerCount={snippet.stargazerCount}
                  />
                );
              })}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Snippets;
