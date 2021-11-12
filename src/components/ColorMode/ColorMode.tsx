import { Button, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      _active={{ bg: 'none' }}
      _focus={{ boxShadow: 'none' }}
      _hover={{ bg: 'none' }}
      variant="ghost"
      color="whiteAlpha.900"
      onClick={toggleColorMode}
    >
      {colorMode !== 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
