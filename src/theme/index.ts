import { extendTheme } from '@chakra-ui/react';
import { config } from './Config';
import { colours } from './Colours';
import { styles } from './GlobalStyles';
import { fonts } from './Fonts';
import { components } from './Components';

export const theme = extendTheme({
  fonts,
  colours,
  styles,
  config,
  components
});
