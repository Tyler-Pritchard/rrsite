import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AuthWrapper, ContentArea } from './AuthLayout.styles';
import AuthSideMenu from './auth-side-menu';

interface AuthPageConfig {
  breadcrumbLabel: string;
  sections: { title: string; items: { label: string; href: string }[] }[];
}

const AUTH_PAGES: Record<string, AuthPageConfig> = {
  '/login': {
    breadcrumbLabel: 'LOGIN',
    sections: [
      { title: 'Account Settings', items: [{ label: 'Create Account', href: '/register' }] },
      { title: 'Customer Service', items: [{ label: 'FAQ', href: '/help' }, { label: 'Privacy Policy', href: '/privacy-policy' }] },
    ],
  },
  '/register': {
    breadcrumbLabel: 'CREATE ACCOUNT',
    sections: [
      { title: 'Account Settings', items: [{ label: 'Sign In', href: '/login' }] },
      { title: 'Customer Service', items: [{ label: 'FAQ', href: '/help' }, { label: 'Privacy Policy', href: '/privacy-policy' }] },
    ],
  },
  '/reset-password': {
    breadcrumbLabel: 'RESET PASSWORD',
    sections: [
      { title: 'Account Settings', items: [{ label: 'Sign In', href: '/login' }] },
      { title: 'Customer Service', items: [{ label: 'FAQ', href: '/help' }, { label: 'Privacy Policy', href: '/privacy-policy' }] },
    ],
  },
};

const AuthLayout: React.FC = () => {
  const location = useLocation();
  const config = AUTH_PAGES[location.pathname] ?? AUTH_PAGES['/login'];

  return (
    <AuthWrapper>
      <AuthSideMenu breadcrumbLabel={config.breadcrumbLabel} sections={config.sections} />
      <ContentArea>
        <Outlet />
      </ContentArea>
    </AuthWrapper>
  );
};

export default AuthLayout;