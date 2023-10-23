import React from 'react';
import {
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useMediaQuery
} from '@chakra-ui/react';
import TechBanner from './TechBanner';

const Intro: React.FC = () => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');

  return (
    <Stack h='100%' px='2rem' gap='3.5rem' justifyContent='center'>
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
        <TechBanner />
      </Stack>
      <Stack>
        {isLargerThan992 ? (
          <>
            <Text>// see if you can guess today's Codle</Text>
            <Text>// view the source code on my Github</Text>
          </>
        ) : (
          <Text>// connect with me on Github </Text>
        )}
        <Flex gap='8px' wrap='wrap'>
          <Text color='Secondary.indigo !important'>const</Text>
          <Text color='Accent.emerald !important'>githubLink</Text>
          <Text color='Secondary.white !important'>{'='}</Text>
          <Text
            wordBreak='break-word'
            as={Link}
            color='Accent.orange !important'
            href='https://github.com/cjfritz9'
            isExternal
            overflowWrap='anywhere'
            pointerEvents='all'
          >
            "github.com/cjfritz9"
          </Text>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Intro;
