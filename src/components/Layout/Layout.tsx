import { GridItem, Grid } from '@chakra-ui/react';
import { Navigation } from '..';

type Props = {
  children: JSX.Element;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Grid columns={2} templateColumns="220px 1fr" h="100vh">
        <GridItem>
          <Navigation />
        </GridItem>
        <GridItem>{children}</GridItem>
      </Grid>
    </>
  );
};
