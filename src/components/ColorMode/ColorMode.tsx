import { Button, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button
        _active={{ bg: 'none' }}
        _focus={{ boxShadow: 'none' }}
        _hover={{ bg: 'none' }}
        variant="ghost"
        onClick={toggleColorMode}
      >
        {colorMode !== 'light' ? <SunIcon /> : <MoonIcon />}
      </Button>
    </header>
  );
};
