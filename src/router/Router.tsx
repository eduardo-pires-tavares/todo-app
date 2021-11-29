import { IconType } from 'react-icons';
import { Routes, Route } from 'react-router-dom';
import { Tasks, Home } from 'src/pages';
import { AiOutlineLogin, AiOutlineUser } from 'react-icons/ai';
import { BsHouse, BsCheck2Square } from 'react-icons/bs';

type AppRoute = {
  name: string;
  path: string;
  icon: IconType;
};

export const AppRoutes: AppRoute[] = [
  {
    name: 'Home',
    path: '/',
    icon: BsHouse
  },
  {
    name: 'Tasks',
    path: '/Tasks',
    icon: BsCheck2Square
  },
  {
    name: 'Sign In',
    path: '/SignIn',
    icon: AiOutlineLogin
  },
  {
    name: 'Sign Up',
    path: '/SignUp',
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
