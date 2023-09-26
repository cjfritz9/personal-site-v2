import { extendTheme } from '@chakra-ui/react';

import colors from './BrandColors';
import containerConfig from './components/Container';
import headingConfig from './components/Heading';
import inputConfig from './components/Input';
import menuConfig from './components/Menu';
import tabsConfig from './components/Tabs';
import textConfig from './components/Text';
import iconConfig from './components/Icon';
import tooltipConfig from './components/Tooltip';
import buttonConfig from './components/Button';

const theme = extendTheme({
  colors,
  components: {
    Button: buttonConfig,
    Container: containerConfig,
    Heading: headingConfig,
    Icon: iconConfig,
    Input: inputConfig,
    Menu: menuConfig,
    Tabs: tabsConfig,
    Text: textConfig,
    Tooltip: tooltipConfig
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
