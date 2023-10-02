import React from 'react';
import { Container, Flex, Stack, Text } from '@chakra-ui/react';
import { SuggestionsProps } from '../../@types/props';

const Suggestions: React.FC<SuggestionsProps> = ({
  mode,
  autoCompleteResults,
  cdResults
}) => {
 if (mode === 'cd') {
    return (
      <Container variant='suggestions'>
        <Flex w='100%'>
          {cdResults
            ?.filter((result) => result.dirname !== 'PARENT')
            .map((result, i) => (
              <Text key={i} pr='2rem'>
                {`${result.dirname}${
                  result.dirname === 'return to parent directory' ? '' : '/'
                }`}
              </Text>
            ))}
        </Flex>
      </Container>
    );
  } else {
    return (
      <Container variant='suggestions'>
        <Stack gap='4px'>
          {autoCompleteResults?.map((result, i) => (
            <Flex key={i}>
              <Text variant='terminalPrimary'>{result.type}:</Text>
              <Text w='100%'>{result.description}</Text>
            </Flex>
          ))}
        </Stack>
      </Container>
    );
  }
};

export default Suggestions;
