import { extendTheme } from '@chakra-ui/react';

import colors from './BrandColors';
import containerConfig from './Container';
import headingConfig from './Heading';
import inputConfig from './Input';
import tabsConfig from './Tabs';
import textConfig from './Text';

const theme = extendTheme({
  colors,
  components: {
    Container: containerConfig,
    Heading: headingConfig,
    Input: inputConfig,
    Tabs: tabsConfig,
    Text: textConfig
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  fonts: {
    heading: "'Fira Code', monospace",
    body: "'Fira Code', monospace"
  }
});

export default theme;
