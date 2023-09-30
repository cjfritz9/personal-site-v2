import React from 'react';
import { Stack } from '@chakra-ui/react';
import { contactItems, linksItems } from '../About/data/items';
import ContactsSection from './ContactsSection';

const ContactsPanel: React.FC = () => {
  return (
    <Stack h='100%' borderRight='1px solid' borderColor='Lines'>
      <ContactsSection title='contacts' listItems={contactItems} />
      <ContactsSection title='links' listItems={linksItems} />
    </Stack>
  );
};

export default ContactsPanel;
