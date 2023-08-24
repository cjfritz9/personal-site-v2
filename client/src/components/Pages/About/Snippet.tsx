import React, { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';

interface Props {
  description: string;
  raw_url: string;
}

const Snippet: React.FC<Props> = ({ description, raw_url }) => {
  const [gist, setGist] = useState<any>();

  useEffect(() => {
    (async () => {
      const result = await axios.get(raw_url);
      setGist(result.data);
      console.log(description);
    })();
  }, []);

  return (
    <Box>
      <Text variant='snippet' whiteSpace='pre-wrap'>
        {gist}
      </Text>
    </Box>
  );
};

export default Snippet;
