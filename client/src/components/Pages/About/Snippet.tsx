import React, { useEffect, useState } from 'react';
import { Box, Flex, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { ago as timeAgo } from 'time-ago';

import { fetchRawSnippet } from '../../../hooks/requests';
import { SnippetProps } from '../../../@types/props';
import { RiChat3Line, RiStarLine } from 'react-icons/ri';
import { snippetScrollbar } from '../../../theme/BrandColors';

const Snippet: React.FC<SnippetProps> = ({
  author,
  createdAt,
  avatarUrl,
  // language,
  // profileUrl,
  // description,
  rawData
}) => {
  console.log(rawData)
  return (
    <Stack w='100%' gap='12px'>
      <Flex w='100%' justifyContent='space-between'>
        <Flex gap='12px'>
          <Image h='36px' w='36px' borderRadius='36px' src={avatarUrl} />
          <Stack gap={0}>
            <Text
              variant='snippet'
              color='Secondary.indigo !important'
              fontWeight='bold'
            >
              @{author}
            </Text>
            <Text variant='snippet'>{timeAgo(createdAt)}</Text>
          </Stack>
        </Flex>
        <Flex gap='1.5rem'>
          <Flex gap='8px'>
            <Icon as={RiChat3Line} fontSize={16} />
            <Text variant='snippet'>details</Text>
          </Flex>
          <Flex gap='8px'>
            <Icon as={RiStarLine} fontSize={16} />
            <Text variant='snippet'>0 stars</Text>
          </Flex>
        </Flex>
      </Flex>
      <Box
        maxH='424px'
        bg='Primary.black'
        border='1px solid'
        borderColor='Lines'
        borderRadius='15px'
        px='30px'
        py='1.5rem'
        overflowY='scroll'
        css={snippetScrollbar}
      >
        {/* <Text variant='snippet'>{description}</Text> */}
        <Text variant='snippet' whiteSpace='pre-wrap'>
          {rawData}
        </Text>
      </Box>
    </Stack>
  );
};

export default Snippet;
