import * as React from 'react';
import { Box } from '@mui/material';
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
    <Box sx={{ p: '5px' }} >
      {children}
    </Box>
  </>;
};

export default Layout;

