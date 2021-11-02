import { mode } from '@chakra-ui/theme-tools';

export const styles = {
  global: (props: any) => ({
    body: {
      color: mode('gray.900', 'whiteAlpha.900')(props),
      bg: mode('whiteAlpha.900', 'gray.800')(props),
      letterSpacing: '.02em',
      lineHeight: '1.2rem',
      fontSize: '1rem',
      height: '100vh',
      width: '100%'
    }
  })
};
