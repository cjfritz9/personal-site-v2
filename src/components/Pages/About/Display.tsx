import React, { useContext } from 'react';
import { Box, Container, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { SiteContext } from '../../../context/Site.context';
import { SiteInterface } from '../../../@types/context';
import { RiCloseLine } from 'react-icons/ri';
import display from './data/display';

const Display: React.FC = () => {
  const { currentDisplayContent, setCurrentDisplayContent } = useContext(
    SiteContext
  ) as SiteInterface;

  return (
    <Container variant='display'>
      <Stack w='100%'>
        <Flex h='40px' mt='-1px' borderBottom='1px solid' borderColor='Lines'>
          <Flex
            alignItems='center'
            px='1rem'
            borderRight='1px solid'
            borderColor='Lines'
          >
            <Text variant='label' pr='2rem'>
              {currentDisplayContent}
            </Text>
            <Icon
              as={RiCloseLine}
              onClick={() => setCurrentDisplayContent('')}
              fontSize='20px'
            />
          </Flex>
        </Flex>
        <Flex pt='.5rem' px='2rem'>
          <Stack pl='8px' pr='40px' gap='0px'>
            {Array.from({ length: 17 }, (_, i) => i + 1).map(
              (num: number, i: number) => {
                console.log(num);
                return (
                  <Text key={i} variant='label'>
                    {num}
                  </Text>
                );
              }
            )}
          </Stack>
          <Stack pl='0' pr='8px' gap='0px' alignItems='center'>
            <Text variant='label' w='30px' textAlign='right'>
              /**
            </Text>
            {Array.from({ length: 15 }, (_, i) => i + 1).map((_, i) => {
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
          <Stack gap='0px' pt='24px'>
            <Text variant='label'>{display[currentDisplayContent].title}</Text>
            {display[currentDisplayContent].paragraphs.map(
              (p: string, i: number) => (
                <Text key={i} variant='label'>
                  {p}
                </Text>
              )
            )}
          </Stack>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Display;
