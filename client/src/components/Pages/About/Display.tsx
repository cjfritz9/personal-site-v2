import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import { Box, Container, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { SiteContext } from '../../../context/Site.context';
import { SiteInterface } from '../../../@types/context';
import { RiCloseLine } from 'react-icons/ri';
import display from './data/display';
import { scrollbarStyles } from '../../../theme/BrandColors';

const Display: React.FC = () => {
  const { currentDisplayContent, setCurrentDisplayContent } = useContext(
    SiteContext
  ) as SiteInterface;
  const [lineCount, setLineCount] = useState<number>(0);
  const textWrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (textWrapRef && textWrapRef.current && currentDisplayContent) {
      const offset = Math.floor(textWrapRef.current.clientWidth / 700);
      const height = textWrapRef.current.clientHeight;
      setLineCount(Math.ceil(height / (23.5 + offset)));
    }
  }, [textWrapRef.current, currentDisplayContent]);

  return (
    <Container variant='display'>
      <Stack gap='1px'>
        <Flex
          h='40px'
          w='fit-content'
          m={0}
          display={['none', 'none', 'flex']}
          p='10px'
          borderRight='1px solid'
          borderColor='Lines'
          alignItems='center'
        >
          <Text variant='label' pr='2rem'>
            {currentDisplayContent}
          </Text>
          <Icon
            as={RiCloseLine}
            onClick={() => setCurrentDisplayContent('default')}
            fontSize='20px'
          />
        </Flex>
        <Flex
          py='1rem'
          px='2rem'
          mt='-1px'
          mb='-1px'
          mr='-1px'
          minH='fit-content'
          h='100% !important'
          w='100% !important'
          grow={1}
          borderTop='1px solid'
          borderColor='Lines'
          overflowY={['visible', 'visible', 'scroll']}
          css={scrollbarStyles}
        >
          <Stack display={['none', 'flex']} pl='8px' pr='40px' gap='0px'>
            {Array.from({ length: lineCount + 2 }, (_, i) => i + 1).map(
              (num: number, i: number) => {
                return (
                  <Text key={i} variant='label'>
                    {num}
                  </Text>
                );
              }
            )}
          </Stack>
          <Stack
            display={['none', 'flex']}
            pl='0'
            pr='8px'
            gap='0px'
            alignItems='center'
          >
            <Text variant='label' w='30px' textAlign='right'>
              /**
            </Text>
            {Array.from({ length: lineCount }, (_, i) => i + 1).map((_, i) => {
              return (
                <Text key={i} variant='label' w='2rem' textAlign='center'>
                  *
                </Text>
              );
            })}
            <Text variant='label' w='28px' textAlign='right'>
              */
            </Text>
          </Stack>
          <Stack h='100%' pt='24px' gap={0} w='100%'>
            <Text variant='label'>{display[currentDisplayContent].title}</Text>
            <Stack ref={textWrapRef} gap='24px'>
              {display[currentDisplayContent].paragraphs.map(
                (p: string, i: number) => (
                  <Text
                    key={i}
                    variant='label'
                    _last={{
                      marginBottom: '2rem'
                    }}
                  >
                    {p}
                  </Text>
                )
              )}
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Display;
