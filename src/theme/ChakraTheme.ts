import { extendTheme } from '@chakra-ui/react';

import colors from './BrandColors';
import headingConfig from './Heading';
import textConfig from './Text';

const theme = extendTheme({
  components: {
    Heading: headingConfig,
    Text: textConfig
  },
  colors,
  fonts: {
    heading: "'Fira Code', monospace",
    body: "'Fira Code', monospace"
  }
});

export default theme;
