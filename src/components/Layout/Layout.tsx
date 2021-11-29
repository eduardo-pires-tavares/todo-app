import { GridItem, Grid, Container } from '@chakra-ui/react';
import { SideBar } from '..';

type Props = {
  children: JSX.Element;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Grid templateColumns={{ base: '1fr', md: '200px 1fr' }}>
        <GridItem>{<SideBar />}</GridItem>
        <GridItem>
          <Container maxW="" h={'100vh'} p={4}>
            {children}
          </Container>
        </GridItem>
      </Grid>
    </>
  );
};
