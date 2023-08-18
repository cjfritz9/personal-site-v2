import React, { useEffect, useState } from 'react';
import { Flex, Text, Input } from '@chakra-ui/react';

const Terminal: React.FC = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 600);

    return () => {
      if (cursorInterval) {
        clearInterval(cursorInterval);
      }
    };
  }, []);

  return (
    <Flex h='100%' grow={1} alignItems='center' px='1.5rem'>
      <Text color='Accent.emerald !important'>{'>'}</Text>
      <Input placeholder={showCursor ? '_' : ''}></Input>
    </Flex>
  );
};

export default Terminal;
