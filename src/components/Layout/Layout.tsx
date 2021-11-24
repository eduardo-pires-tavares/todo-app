import { GridItem, Grid, Container } from '@chakra-ui/react';
import { SideBar } from '..';

type Props = {
  children: JSX.Element;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Grid templateColumns="min-content 1fr" templateRows="1fr 1fr">
        <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={3}>
          {<SideBar />}
        </GridItem>
        <GridItem>
          <Container maxW={'container.xl'} h={'100vh'} p={4}>
            {children}
          </Container>
        </GridItem>
      </Grid>
    </>
  );
};
