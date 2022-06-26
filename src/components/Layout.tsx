import * as React from 'react';
import { Header } from './Header';

interface ILayoutProps {
}


const mockUser = {
  email: 'email',
  id: 1,
  name: 'name',
  avatar: ''
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return <>
    <Header user={mockUser} />
    {children}
  </>;
};

export default Layout;

