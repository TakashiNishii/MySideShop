"use client"
import { Fragment, useState } from 'react'
import { MobileLink, NavigationDivMobile, SidebarBackdrop, SidebarContent, SidebarHeader, SidebarWrapper } from './menusidebar.styles';
import { Menu, X } from 'lucide-react';

const MenuSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <Fragment>
      <NavigationDivMobile onClick={toggleSidebar}>
        <Menu size={24} />
      </NavigationDivMobile>

      <SidebarWrapper $isOpen={isSidebarOpen}>
        <SidebarBackdrop onClick={closeSidebar} />

        <SidebarContent $isOpen={isSidebarOpen}>
          <SidebarHeader>
            <X size={24} onClick={closeSidebar} />
          </SidebarHeader>

          <nav>
            <MobileLink href="/" onClick={closeSidebar}>Catalogue</MobileLink>
            <MobileLink href="/cart" onClick={closeSidebar}>Cart</MobileLink>
            <MobileLink href="/about" onClick={closeSidebar}>About us</MobileLink>
            <MobileLink href="/signup" onClick={closeSidebar} className="sign-up">Sign up</MobileLink>
          </nav>
        </SidebarContent>
      </SidebarWrapper>
    </Fragment>
  )
}

export default MenuSidebar