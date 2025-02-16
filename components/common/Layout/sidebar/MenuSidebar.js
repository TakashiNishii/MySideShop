"use client"
import { Fragment, useState } from 'react'
import { MobileLink, NavigationDivMobile, SidebarBackdrop, SidebarContent, SidebarHeader, SidebarWrapper } from './menusidebar.styles';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const MenuSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <Fragment>
      <NavigationDivMobile onClick={toggleSidebar}>
        <Menu size={24} aria-label="menu" />
      </NavigationDivMobile>

      <SidebarWrapper
        $isOpen={isSidebarOpen}
        data-testid="sidebar"
        data-isopen={isSidebarOpen}
      >
        <SidebarBackdrop onClick={closeSidebar} />

        <SidebarContent $isOpen={isSidebarOpen}>
          <SidebarHeader>
            <X size={24} onClick={closeSidebar} aria-label="close" />
          </SidebarHeader>

          <nav>
            <Link href="/" onClick={closeSidebar} className='link'>Home</Link>
            <Link href="/checkout" onClick={closeSidebar} className='link'>Checkout</Link>
            <Link href="/about" onClick={closeSidebar} className='link'>About us</Link>
            <Link href="/signup" onClick={closeSidebar} className="sign-up link">Sign up</Link>
          </nav>
        </SidebarContent>
      </SidebarWrapper>
    </Fragment>
  )
}

export default MenuSidebar