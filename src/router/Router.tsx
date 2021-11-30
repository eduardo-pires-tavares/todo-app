import { IconType } from 'react-icons';
import { Routes, Route } from 'react-router-dom';
import { Tasks, Home } from 'src/pages';
import { AiOutlineLogin, AiOutlineUser } from 'react-icons/ai';
import { BsHouse, BsCheck2Square } from 'react-icons/bs';

export enum RoutesPath {
  'Home' = '/',
  'Tasks' = '/Tasks',
  'SignIn' = '/SignIn',
  'SignUp' = '/SignUp'
}

type AppRoute = {
  name: string;
  path: RoutesPath;
  icon: IconType;
};

export const AppRoutes: AppRoute[] = [
  {
    name: 'Home',
    path: RoutesPath.Home,
    icon: BsHouse
  },
  {
    name: 'Tasks',
    path: RoutesPath.Tasks,
    icon: BsCheck2Square
  },
  {
    name: 'Sign In',
    path: RoutesPath.SignIn,
    icon: AiOutlineLogin
  },
  {
    name: 'Sign Up',
    path: RoutesPath.SignUp,
    icon: AiOutlineUser
  }
];

export const Router = () => {
  const [home, tasks, login, signUp] = AppRoutes;

  return (
    <Routes>
      <Route path={home.path} element={<Home />} />
      <Route path={tasks.path} element={<Tasks />} />
      <Route path={login.path} element={<Home />} />
      <Route path={signUp.path} element={<Home />} />
    </Routes>
  );
};
