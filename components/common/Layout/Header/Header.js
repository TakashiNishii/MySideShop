import Link from 'next/link';
import {
  HeaderStyled,
  NavigationDiv,
} from './header.styles';
import MenuSidebar from '../sidebar/MenuSidebar';
import { Suspense } from 'react';

const Header = () => {
  return (
    <HeaderStyled>
      <h1>MySide Shop 🏬</h1>

      <NavigationDiv>
        <Link href="/">Home</Link>
        <Link href="/checkout">Checkout</Link>
        <Link href="/about">About us</Link>
        <Link href="/signup" className="sign-up">Sign up</Link>
      </NavigationDiv>
      <Suspense fallback={<></>}>
        <MenuSidebar />
      </Suspense>
    </HeaderStyled>
  );
};

export default Header; 