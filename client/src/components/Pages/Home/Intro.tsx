import React from 'react';
import {
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useMediaQuery
} from '@chakra-ui/react';

const Intro: React.FC = () => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');

  return (
    <Stack h='100%' px='2rem' gap='5rem' justifyContent='center'>
      <Stack gap={0}>
        <Text color='Secondary.white !important'>👋 Hey! I'm</Text>
        <Heading mt='-1rem'>C.J. Fritz</Heading>
        <Heading
          variant='subHeadline'
          mt='-1rem'
          color='Secondary.indigo !important'
        >
          {'>'} Full-stack Developer
        </Heading>
      </Stack>
      <Stack>
        {isLargerThan992 ? (
          <>
            <Text>// complete the "Codle" to continue</Text>
            <Text>// view the source code on my Github</Text>
          </>
        ) : (
          <Text>// follow me on Github: </Text>
        )}
        <Flex gap='8px'>
          <Text color='Secondary.indigo !important'>const</Text>
          <Text color='Accent.emerald !important'>githubLink</Text>
          <Text color='Secondary.white !important'>{'='}</Text>
          <Text
            as={Link}
            color='Accent.orange !important'
            href='https://github.com/cjfritz9'
            isExternal
            overflowWrap='anywhere'
          >
            "github.com/cjfritz9"
          </Text>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Intro;
