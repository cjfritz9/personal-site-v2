import React, { useEffect, useState } from 'react';
import {
  Badge,
  Box,
  Flex,
  Icon,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text
} from '@chakra-ui/react';
import { ago as timeAgo } from 'time-ago';

import { SnippetProps } from '../../../../@types/props';
import { RiChat3Fill, RiChat3Line, RiStarLine } from 'react-icons/ri';
import { snippetScrollbar } from '../../../../theme/BrandColors';

const Snippet: React.FC<SnippetProps> = ({
  author,
  avatarUrl,
  profileUrl,
  url,
  descriptionText,
  createdAt,
  snippetText,
  languageName,
  languageColor,
  stargazerCount
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const handleClick = (type: 'gist' | 'profile') => {
    window.open(type === 'gist' ? url : profileUrl, '_blank');
  };

  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <Stack w='100%' gap='12px' opacity={opacity} transition='all .5s ease'>
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
        <Stack>
          <Flex gap='1.5rem'>
            <Flex
              gap='8px'
              cursor='pointer'
              onClick={() => setShowDetails((prev) => !prev)}
            >
              <Icon
                as={showDetails ? RiChat3Fill : RiChat3Line}
                fontSize={16}
              />
              <Text variant='snippet'>details</Text>
            </Flex>
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
          </Flex>
          <Flex w='100%' justifyContent='flex-end'>
            <Badge
              cursor='default'
              color={
                languageName === 'JavaScript'
                  ? 'blackAlpha.900'
                  : 'whiteAlpha.900'
              }
              bg={languageColor}
              textAlign='center'
            >
              {languageName}
            </Badge>
          </Flex>
        </Stack>
      </Flex>
      <Box
        maxH='372px'
        bg='Primary.black'
        border='1px solid'
        borderColor='Lines'
        borderRadius='15px'
        px='30px'
        py='1.5rem'
        overflowY='scroll'
        css={snippetScrollbar}
      >
        <Text variant='snippet' whiteSpace='pre-wrap'>
          {showDetails ? descriptionText : snippetText}
        </Text>
      </Box>
    </Stack>
  );
};

export const LoadingSnippet: React.FC<{ index: number }> = ({ index }) => {
  let heightVariant = '172px';

  if (index === 1) {
    heightVariant = '252px';
  } else if (index === 2) {
    heightVariant = '332px';
  }

  const animationSpeed = 1.2;

  return (
    <Stack w='100%' gap='12px'>
      <Flex w='100%' justifyContent='space-between'>
        <Flex gap='12px'>
          <SkeletonCircle
            h='36px'
            w='36px'
            borderRadius='36px'
            speed={animationSpeed}
          />
          <Stack gap='4px'>
            <Skeleton h='23px' w='fit-content' speed={animationSpeed}>
              <Text>.......</Text>
            </Skeleton>
            <Skeleton h='19px' w='fit-content' speed={animationSpeed}>
              <Text variant='snippet'>..........</Text>
            </Skeleton>
          </Stack>
        </Flex>
        <Stack>
          <Flex gap='1.5rem'>
            <Skeleton speed={animationSpeed}>
              <Flex gap='8px' cursor='pointer'>
                <Icon as={RiChat3Fill} fontSize={16} />
                <Text variant='snippet'>details</Text>
              </Flex>
            </Skeleton>
            <Skeleton speed={animationSpeed}>
              <Flex gap='8px' cursor='pointer'>
                <Icon as={RiStarLine} fontSize={16} />
                <Text variant='snippet'>5 stars</Text>
              </Flex>
            </Skeleton>
          </Flex>
          <Flex w='100%' justifyContent='flex-end'>
            <Skeleton h='18px' speed={animationSpeed}>
              <Badge cursor='default' textAlign='center'>
                ...........
              </Badge>
            </Skeleton>
          </Flex>
        </Stack>
      </Flex>
      <Skeleton h={heightVariant} borderRadius='15px' speed={animationSpeed}>
        <Box
          // h={heightVariant}
          maxH='372px'
          bg='Primary.black'
          border='1px solid'
          borderColor='Lines'
          borderRadius='15px'
          px='30px'
          py='1.5rem'
          overflowY='scroll'
          css={snippetScrollbar}
        >
          <Text variant='snippet' whiteSpace='pre-wrap'>
            ...
          </Text>
        </Box>
      </Skeleton>
    </Stack>
  );
};

export default Snippet;
