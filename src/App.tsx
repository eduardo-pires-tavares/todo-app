import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components';
import { Router } from './router';
import { theme } from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Layout>
        <Router />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
