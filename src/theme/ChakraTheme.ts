import { extendTheme } from '@chakra-ui/react';

import colors from './BrandColors';
import containerConfig from './Container';
import headingConfig from './Heading';
import tabsConfig from './Tabs';
import textConfig from './Text';

const theme = extendTheme({
  components: {
    Container: containerConfig,
    Heading: headingConfig,
    Tabs: tabsConfig,
    Text: textConfig
  },
  colors,
  fonts: {
    heading: "'Fira Code', monospace",
    body: "'Fira Code', monospace"
  }
});

export default theme;
