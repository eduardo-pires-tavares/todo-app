import { Icon, IconProps } from '@chakra-ui/react';
import { ReactComponent as HeroSvg } from '../../assets/hero.svg';

export const Illustration = ({ ...rest }: IconProps) => {
  return (
    <Icon
      width="100%"
      viewBox="0 0 702 448"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <HeroSvg />
    </Icon>
  );
};
