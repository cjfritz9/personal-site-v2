import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  Stack
} from '@chakra-ui/react';
import React, { ReactNode, useReducer, useState } from 'react';

const formReducer = (state: any, action: any) => {
  if (action.type === 'COMPANY') {
    state.companyName = action.value;
  }

  if (action.type === 'DATE') {
    const date = new Date(action.value);
    date.setDate(date.getDate() + 1);
    state.dateSubmitted = date.toLocaleDateString();
  }

  if (action.type === 'STATUS') {
    state.status = action.value;
  }

  return state;
};

const NewAppForm: React.FC = () => {
  const [formState, dispatchFormAction] = useReducer(formReducer, {
    companyName: '',
    dateSubmitted: '',
    status: {
      name: '',
      weight: 0
    }
  });

  console.log({ formState });
  return (
    <Box bg='Primary.dkGray' p='3rem' mt='2rem' pos='sticky' top='2rem'>
      <Stack>
        <HStack>
          <FormControl>
            <FormLabel htmlFor='company-name' size='md'>
              Company Name
            </FormLabel>
            <Input
              _focus={{
                border: '2px solid blue'
              }}
              id='company-name'
              bg='Primary.black'
              data-peer
              onChange={(e) =>
                dispatchFormAction({
                  type: 'COMPANY',
                  value: e.target.value
                })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='date' size='md'>
              Date Submitted
            </FormLabel>
            <Input
              id='date'
              type='date'
              bg='Primary.black'
              data-peer
              onChange={(e) =>
                dispatchFormAction({
                  type: 'DATE',
                  value: e.target.value
                })
              }
            />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel htmlFor='status' size='md'>
            Application Status
          </FormLabel>
          <StatusGroup dispatchFn={dispatchFormAction} />
        </FormControl>
      </Stack>
    </Box>
  );
};

interface Props {
  dispatchFn: React.Dispatch<any>;
}

const StatusGroup: React.FC<Props> = ({ dispatchFn }) => {
  const [activeBtn, setActiveBtn] = useState('submitted');

  const handleUpdate = (statusData: any) => {
    dispatchFn({ type: 'STATUS', value: statusData });
    setActiveBtn(statusData.name);
  };

  return (
    <InputGroup id='status' w='100%'>
      <Button
        variant='appStatus'
        bg={activeBtn === 'offer' ? 'Accent.emerald' : 'Primary.black'}
        color={activeBtn === 'offer' ? 'Primary.black' : 'Secondary.white'}
        borderRadius='8px 0 0 8px'
        borderRightColor='Lines'
        onClick={() => handleUpdate({ name: 'offer', weight: 4 })}
      >
        offer
      </Button>
      <Button
        variant='appStatus'
        bg={activeBtn === 'interviewing' ? 'Accent.emerald' : 'Primary.black'}
        color={
          activeBtn === 'interviewing' ? 'Primary.black' : 'Secondary.white'
        }
        borderRadius={0}
        borderRightColor='Lines'
        onClick={() => handleUpdate({ name: 'interviewing', weight: 3 })}
      >
        interviewing
      </Button>
      <Button
        variant='appStatus'
        bg={activeBtn === 'submitted' ? 'Accent.emerald' : 'Primary.black'}
        color={activeBtn === 'submitted' ? 'Primary.black' : 'Secondary.white'}
        borderRadius={0}
        borderRightColor='Lines'
        onClick={() => handleUpdate({ name: 'submitted', weight: 2 })}
      >
        submitted
      </Button>
      <Button
        variant='appStatus'
        bg={activeBtn === 'stale' ? 'Accent.emerald' : 'Primary.black'}
        color={activeBtn === 'stale' ? 'Primary.black' : 'Secondary.white'}
        borderRadius='0 8px 8px 0'
        onClick={() => handleUpdate({ name: 'stale', weight: 1 })}
      >
        stale
      </Button>
    </InputGroup>
  );
};

export default NewAppForm;
