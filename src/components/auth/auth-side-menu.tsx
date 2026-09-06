import React from 'react';
import { SideMenu, SideMenuItem, Breadcrumb, BreadcrumbLink } from './auth-side-menu.styles';

interface AuthSideMenuLink {
  label: string;
  href: string;
}

interface AuthSideMenuSection {
  title: string;
  items: AuthSideMenuLink[];
}

interface AuthSideMenuProps {
  breadcrumbLabel: string;
  sections: AuthSideMenuSection[];
}

const AuthSideMenu: React.FC<AuthSideMenuProps> = ({ breadcrumbLabel, sections }) => {
  return (
    <SideMenu>
      <Breadcrumb>
        <BreadcrumbLink href="/login">MY ACCOUNT</BreadcrumbLink> &gt; 
        <span>{breadcrumbLabel}</span>
      </Breadcrumb>      {sections.map((section) => (
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