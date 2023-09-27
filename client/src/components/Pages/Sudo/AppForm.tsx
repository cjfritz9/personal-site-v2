import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  Spinner,
  Stack,
  Text
} from '@chakra-ui/react';
import React, { useEffect, useReducer, useState } from 'react';
import { formReducer, validateForm } from '../../../utils/sudo';
import useJobApps from '../../../hooks/useJobApps';
import { JobAppResponse } from '../../../@types/responses';

interface FormProps {
  editingData?: JobAppResponse;
  setEditingData: React.Dispatch<
    React.SetStateAction<JobAppResponse | undefined>
  >;
  setRefreshList: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppForm: React.FC<FormProps> = ({
  editingData,
  setEditingData,
  setRefreshList
}) => {
  const [formState, dispatchFormAction] = useReducer(formReducer, {
    companyName: '',
    dateSubmitted: '',
    positionTitle: '',
    postLink: '',
    isActive: true,
    status: {
      name: 'submitted',
      weight: 2
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const { createJobApp, updateJobApp } = useJobApps();

  const handleSubmit = async () => {
    setIsSubmitting(true);
    if (!validateForm(formState) && !editingData) {
      setIsSubmitting(false);
      setError('Missing Field');
      setTimeout(() => {
        setError('');
      }, 2500);
    } else {
      let result: any;
      if (!editingData) {
        result = await createJobApp(formState);
      } else {
        result = await updateJobApp(formState);
        setEditingData(undefined);
      }
      setRefreshList((prev) => !prev);
      if (result?.success) {
        setSuccess(true);
        resetForm();
        setTimeout(() => {
          setSuccess(false);
        }, 2500);
      } else {
        setError('Server error');
        setTimeout(() => {
          setError('');
        }, 2500);
      }
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setEditingData(undefined);
    resetForm();
  };

  const resetForm = () => {
    dispatchFormAction({ type: 'RESET' });
    (document.getElementById('position-title')! as HTMLInputElement).value = '';
    (document.getElementById('company-name')! as HTMLInputElement).value = '';
    (document.getElementById('date')! as HTMLInputElement).value = '';
    (document.getElementById('post-link')! as HTMLInputElement).value = '';
  };

  useEffect(() => {
    if (editingData?.id) {
      dispatchFormAction({ type: 'EDIT', value: editingData });
    }
  }, [editingData?.id]);

  if (editingData) {
    return (
      <Box bg='Primary.dkGray' p='2.5rem' mt='2rem' pos='sticky' top='2rem'>
        <Stack>
          <FormControl>
            <FormLabel htmlFor='position-title'>Position Title</FormLabel>
            <Input
              _focus={{
                border: '2px solid blue'
              }}
              placeholder={editingData.positionTitle}
              id='position-title'
              bg='Primary.black'
              data-peer
              onChange={(e) =>
                dispatchFormAction({
                  type: 'POSITION',
                  value: e.target.value
                })
              }
            />
          </FormControl>
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
                placeholder={editingData.companyName}
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
                _focus={{
                  border: '2px solid blue'
                }}
                id='date'
                placeholder={editingData.dateSubmitted}
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
            <FormLabel htmlFor='post-link'>Posting Link</FormLabel>
            <Input
              _focus={{
                border: '2px solid blue'
              }}
              id='post-link'
              placeholder={editingData.postLink}
              bg='Primary.black'
              data-peer
              onChange={(e) =>
                dispatchFormAction({
                  type: 'LINK',
                  value: e.target.value
                })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='status' size='md'>
              Application Status
            </FormLabel>
            <StatusGroup dispatchFn={dispatchFormAction} />
          </FormControl>
          <HStack pt='2rem' w='100%' justifyContent='flex-end'>
            <Button
              _active={{ transform: 'scale(.98)' }}
              _hover={{ filter: 'brightness(1.1)' }}
              w='100%'
              bg='gray.600'
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              _active={{ transform: 'scale(.98)' }}
              _hover={{ filter: 'brightness(1.1)' }}
              w='100%'
              bg={
                error.length
                  ? 'Accent.rose'
                  : success
                  ? 'Accent.emerald'
                  : 'Secondary.indigo'
              }
              onClick={handleSubmit}
            >
              {isSubmitting ? (
                <Spinner />
              ) : (
                <Text color='Secondary.white !important'>
                  {error.length ? error : success ? 'Success' : 'Submit'}
                </Text>
              )}
            </Button>
          </HStack>
        </Stack>
      </Box>
    );
  }

  return (
    <Box bg='Primary.dkGray' p='2.5rem' mt='2rem' pos='sticky' top='2rem'>
      <Stack>
        <FormControl>
          <FormLabel htmlFor='position-title'>Position Title</FormLabel>
          <Input
            _focus={{
              border: '2px solid blue'
            }}
            id='position-title'
            bg='Primary.black'
            data-peer
            onChange={(e) =>
              dispatchFormAction({
                type: 'POSITION',
                value: e.target.value
              })
            }
          />
        </FormControl>
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
              _focus={{
                border: '2px solid blue'
              }}
              id='date'
              placeholder='mm/dd/yyyy'
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
          <FormLabel htmlFor='post-link'>Posting Link</FormLabel>
          <Input
            _focus={{
              border: '2px solid blue'
            }}
            id='post-link'
            bg='Primary.black'
            data-peer
            onChange={(e) =>
              dispatchFormAction({
                type: 'LINK',
                value: e.target.value
              })
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='status' size='md'>
            Application Status
          </FormLabel>
          <StatusGroup dispatchFn={dispatchFormAction} />
        </FormControl>
        <HStack pt='2rem' w='100%' justifyContent='flex-end'>
          <Button
            _active={{ transform: 'scale(.98)' }}
            _hover={{ filter: 'brightness(1.1)' }}
            w='100%'
            bg={
              error.length
                ? 'Accent.rose'
                : success
                ? 'Accent.emerald'
                : 'Secondary.indigo'
            }
            onClick={handleSubmit}
          >
            {isSubmitting ? (
              <Spinner />
            ) : (
              <Text color='Secondary.white !important'>
                {error.length ? error : success ? 'Success' : 'Submit'}
              </Text>
            )}
          </Button>
        </HStack>
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

export default AppForm;
