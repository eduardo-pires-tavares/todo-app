import { ChakraProvider, Text } from '@chakra-ui/react';
import { theme } from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <div className="App">
        <Text casing="capitalize">Hi</Text>
      </div>
    </ChakraProvider>
  );
};

export default App;
