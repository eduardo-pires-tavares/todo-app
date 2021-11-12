import { FlexProps, Link, Flex, Icon } from '@chakra-ui/react';
import { ReactText } from 'react';
import { IconType } from 'react-icons';

interface NavItemProps extends FlexProps {
  icon: IconType;
  path: string;
  children: ReactText;
}

export const NavItem = ({ children, path, icon, ...rest }: NavItemProps) => {
  return (
    <Link color="whiteAlpha.900" to={path} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        m="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        justifyContent={{ base: 'start', md: 'center' }}
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};
