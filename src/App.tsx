import { ChakraProvider } from '@chakra-ui/react';
import { ColorMode } from './components';
import { Router } from './router';
import { theme } from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Router />
    </ChakraProvider>
  );
};

export default App;
