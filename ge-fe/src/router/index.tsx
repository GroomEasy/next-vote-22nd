import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/page';
import LoginPage from '../pages/auth/login/page';
import SignUpPage from '../pages/auth/signup/page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/auth/login',
    element: <LoginPage />,
  },
  {
    path: '/auth/signup',
    element: <SignUpPage />,
  },
]);
