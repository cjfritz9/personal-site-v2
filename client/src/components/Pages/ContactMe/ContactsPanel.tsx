import React from 'react';
import { Stack } from '@chakra-ui/react';
import { contactItems, linksItems } from '../About/data/items';
import ContactsSection from './ContactsSection';

const ContactsPanel: React.FC = () => {
  return (
    <Stack
      pos='sticky'
      top={0}
      h='100%'
      w={['100%', '100%', '224px', '336px']}
      borderRight='1px solid'
      borderColor='Lines'
      gap={0}
      bgColor='Primary.dkSlate'
      zIndex={3}
    >
      <ContactsSection title='contacts' listItems={contactItems} />
      <ContactsSection title='links' listItems={linksItems} />
    </Stack>
  );
};

export default ContactsPanel;
