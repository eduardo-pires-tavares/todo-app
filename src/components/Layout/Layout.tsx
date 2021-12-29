import { GridItem, Grid, useColorModeValue } from '@chakra-ui/react';
import { SideBar } from '..';

interface Props {
  children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Grid templateColumns={{ base: '1fr', md: '200px 1fr' }}>
        <GridItem>{<SideBar />}</GridItem>
        <GridItem bg={useColorModeValue('gray.200', 'gray.700')}>
          {children}
        </GridItem>
      </Grid>
    </>
  );
};
