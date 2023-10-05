import React, { useContext, useEffect, useReducer, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Textarea
} from '@chakra-ui/react';
import getFormIsValid from '../../../lib/contact';
import { ContactContext } from '../../../context/Contact.context';
import { postContactForm } from '../../../hooks/requests';

const ContactForm: React.FC = () => {
  const { dispatchFormAction, name, email, message } =
    useContext(ContactContext)!;
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async () => {
    const { isValid, statusMsg } = getFormIsValid({ name, email, message });

    if (isValid) {
      const response = await postContactForm({ name, email, message });

      if (response.success) {
        dispatchFormAction({ type: 'RESET' });
        setSuccess(response.success);
        setTimeout(() => {
          setSuccess('');
        }, 3000);
      } else {
        setError(response.error!);
      }
    } else {
      setError(statusMsg);
    }
  };

  useEffect(() => {
    if (error.length) {
      setError('');
    }
  }, [name, email, message]);

  return (
    <Box
      h='100%'
      w={['100%', '100%', '100%', '100%', '90%']}
      borderRight='1px solid'
      borderRightColor='Lines'
      overflowY='visible'
    >
      <Center w='100%'>
        <Stack
          my={['2rem', '4rem', '5rem', '7rem']}
          w={['90%', '80%', '70%', '60%']}
          gap='1.5rem'
        >
          <FormControl>
            <FormLabel>name</FormLabel>
            <Input
              variant='contactForm'
              value={name}
              onChange={(e) =>
                dispatchFormAction({
                  type: 'NAME',
                  value: e.target.value
                })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>email</FormLabel>
            <Input
              variant='contactForm'
              value={email}
              onChange={(e) =>
                dispatchFormAction({
                  type: 'EMAIL',
                  value: e.target.value
                })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>message</FormLabel>
            <Textarea
              _focus={{
                borderColor: 'Secondary.slate',
                borderWidth: '1px',
                boxShadow: 'none'
              }}
              h='224px'
              bgColor='Primary.dkGray'
              borderColor='Lines'
              resize='none'
              value={message}
              onChange={(e) =>
                dispatchFormAction({
                  type: 'MESSAGE',
                  value: e.target.value
                })
              }
            />
          </FormControl>
          <HStack w='100%' justifyContent='space-between' alignItems='start'>
            <Button
              _active={{
                transform: 'scale(.98)'
              }}
              w='10rem'
              fontWeight='normal'
              onClick={handleSubmit}
            >
              submit
            </Button>
            {success.length || error.length ? (
              <Badge colorScheme={success.length ? 'green' : 'red'}>
                {success || error}
              </Badge>
            ) : null}
          </HStack>
        </Stack>
      </Center>
    </Box>
  );
};

export default ContactForm;
