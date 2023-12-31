import React, { useReducer } from 'react';
import { Container, Flex, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import ContactsPanel from './ContactsPanel';
import ContactForm from './ContactForm';
import FormCode from './FormCode';
import { RiCloseLine } from 'react-icons/ri';
import { contactFormReducer } from '../../../lib/contact';
import { ContactProvider } from '../../../context/Contact.context';
import { scrollbarStyles } from '../../../theme/BrandColors';

const ContactMePage: React.FC = () => {
  return (
    <Container variant='page'>
      <Stack
        flexDir={['column', 'column', 'row']}
        alignItems='flex-start'
        h='100%'
        w='100%'
        gap={0}
        overflowY={['auto', 'auto', 'auto', 'hidden']}
        css={scrollbarStyles}
      >
        <ContactsPanel />
        <Stack h='100%' w='100%' gap={0}>
          <Flex
            h='40px'
            w='fit-content'
            py='10px'
            px='1rem'
            alignItems='center'
            borderRight='1px solid'
            borderRightColor='Lines'
            display={['none', 'none', 'flex']}
          >
            <Text variant='label' pr='2rem'>
              contact-form
            </Text>
            <Icon as={RiCloseLine} fontSize='20px' />
          </Flex>
          <ContactProvider>
            <HStack
              h='100%'
              w='100%'
              borderTop='1px solid'
              borderTopColor='Lines'
            >
              <ContactForm />
              <FormCode />
            </HStack>
          </ContactProvider>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ContactMePage;
