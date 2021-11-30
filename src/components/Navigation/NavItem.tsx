import { FlexProps, Flex, Icon } from '@chakra-ui/react';
import { ReactText } from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface NavItemProps extends FlexProps {
  icon: IconType;
  path: string;
  children: ReactText;
}

export const NavItem = ({ children, path, icon, ...rest }: NavItemProps) => {
  return (
    <Link to={path}>
      <Flex
        p="4"
        m="4"
        color="whiteAlpha.900"
        align="center"
        borderRadius="lg"
        role="group"
        _hover={{
          bg: 'yellow.200',
          color: 'gray.800'
        }}
        cursor="pointer"
        fontSize="18"
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            _groupHover={{
              color: 'gray.800'
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
