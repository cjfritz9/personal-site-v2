import React, { useState } from 'react';
import {
  Badge,
  Box,
  Flex,
  Icon,
  Image,
  Stack,
  Text,
  useFocusEffect
} from '@chakra-ui/react';
import { ago as timeAgo } from 'time-ago';

import { SnippetProps } from '../../../@types/props';
import { RiChat3Fill, RiChat3Line, RiStarLine } from 'react-icons/ri';
import { snippetScrollbar } from '../../../theme/BrandColors';

const Snippet: React.FC<SnippetProps> = ({
  author,
  avatarUrl,
  profileUrl,
  url,
  description,
  createdAt,
  fileText,
  languageName,
  languageColor,
  stargazerCount
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = (type: 'gist' | 'profile') => {
    window.open(type === 'gist' ? url : profileUrl, '_blank');
  };

  return (
    <Stack w='100%' gap='12px'>
      <Flex w='100%' justifyContent='space-between'>
        <Flex gap='12px'>
          <Image
            cursor='pointer'
            h='36px'
            w='36px'
            borderRadius='36px'
            src={avatarUrl}
            onClick={() => handleClick('profile')}
          />
          <Stack gap={0}>
            <Text
              cursor='pointer'
              variant='snippet'
              color='Secondary.indigo !important'
              fontWeight='bold'
              onClick={() => handleClick('profile')}
            >
              @{author}
            </Text>
            <Text variant='snippet'>{timeAgo(createdAt)}</Text>
          </Stack>
        </Flex>
        <Flex gap='1.5rem'>
          <Flex
            gap='8px'
            cursor='pointer'
            onClick={() => setShowDetails((prev) => !prev)}
          >
            <Icon as={showDetails ? RiChat3Fill : RiChat3Line} fontSize={16} />
            <Text variant='snippet'>details</Text>
          </Flex>
          <Stack>
            <Flex
              gap='8px'
              cursor='pointer'
              onClick={() => handleClick('gist')}
            >
              <Icon as={RiStarLine} fontSize={16} />
              <Text variant='snippet'>{`${
                stargazerCount === 1 ? '1 star' : `${stargazerCount} stars`
              }`}</Text>
            </Flex>
            <Badge cursor='default' bg={languageColor} textAlign='center'>
              {languageName}
            </Badge>
          </Stack>
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
          {showDetails ? description : fileText}
        </Text>
      </Box>
    </Stack>
  );
};

export default Snippet;
