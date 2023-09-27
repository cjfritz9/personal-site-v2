import React from 'react'
import { Badge, Box, HStack, Icon, Input, Stack, Text } from '@chakra-ui/react'
import { JobAppResponse } from '../../../@types/responses';
import { RiExternalLinkLine } from 'react-icons/ri';

interface Props {
  data: JobAppResponse
}

const EditJobApp: React.FC<Props> = ({data}) => {
  return (
    <Stack shouldWrapChildren spacing='4'>
        <Stack spacing='0'>
          <HStack alignItems='flex-start' justifyContent='space-between'>
            <Text
              fontSize='18px'
              fontWeight='bold'
              color='Accent.emerald !important'
            >
              {data.companyName}
            </Text>
            <Icon as={RiExternalLinkLine} fontSize='20px' />
          </HStack>
          <Text fontSize='16px' color='Secondary.white !important'>
            {data.positionTitle}
          </Text>
        </Stack>
        <HStack justify='space-between'>
          <Badge
            colorScheme={
              data.status.name === 'submitted'
                ? 'cyan'
                : data.status.name === 'interviewing'
                ? 'yellow'
                : data.status.name === 'stale'
                ? 'red'
                : 'green'
            }
            size='sm'
          >
            {data.status.name}
          </Badge>
          <Text fontSize='14px'>{data.dateSubmitted}</Text>
        </HStack>
      </Stack>
  );
}

export default EditJobApp;