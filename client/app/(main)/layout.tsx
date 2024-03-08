'use client'
import {FC} from 'react'
import SideNavbar from "../components/Client/sidebar/ClientSidebar";

interface Props {
  children: any;
}
const Layout: FC<Props> = ({ children }) => {
 
  return (
    <>
    <SideNavbar>{children}</SideNavbar>
    
    </>
  );
};

export default Layout;
