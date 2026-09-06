import React from 'react';
import { SideMenu, SideMenuItem, Breadcrumb } from './auth-side-menu.styles';

interface AuthSideMenuLink {
  label: string;
  href: string;
}

interface AuthSideMenuSection {
  title: string;
  items: AuthSideMenuLink[];
}

interface AuthSideMenuProps {
  sections: AuthSideMenuSection[];
}

const AuthSideMenu: React.FC<AuthSideMenuProps> = ({ sections }) => {
  return (
    <SideMenu>
      <Breadcrumb>MY ACCOUNT &gt; <span>LOGIN</span></Breadcrumb>
      {sections.map((section) => (
        <React.Fragment key={section.title}>
          <h3>{section.title}</h3>
          {section.items.map((item) => (
            <SideMenuItem key={item.href} href={item.href}>
              {item.label}
            </SideMenuItem>
          ))}
        </React.Fragment>
      ))}
    </SideMenu>
  );
};

export default AuthSideMenu;