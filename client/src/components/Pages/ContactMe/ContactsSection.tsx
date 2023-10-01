import React, { useState } from 'react';
import { Container, Icon, Stack, Text } from '@chakra-ui/react';
import { RiArrowDownSFill, RiArrowRightSFill } from 'react-icons/ri';
import { ContactsSectionProps } from '../../../@types/props';
import Item from '../About/Item';

const ContactsSection: React.FC<ContactsSectionProps> = ({
  title,
  listItems
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <Stack>
      <Container
        variant='section'
        w={['100%', '100%', '224px', '336px']}
        mt='-1px'
        pl='1rem'
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <Icon
          as={isExpanded ? RiArrowDownSFill : RiArrowRightSFill}
          fontSize='20px'
          style={{ color: 'white' }}
        />
        <Text variant='label' color='Secondary.white !important'>
          {title}
        </Text>
      </Container>
      {isExpanded && (
        <Stack pt='.5rem' pb='1rem'>
          {listItems.map((item, i) => (
            <Item
              key={i}
              name={item.name}
              icon={item.icon}
              iconColor={item.iconColor}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default ContactsSection;
