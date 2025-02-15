import Link from 'next/link';
import {
  HeaderStyled,
  NavigationDiv,
} from './header.styles';
import MenuSidebar from './sidebar/MenuSidebar';
import { Suspense } from 'react';
import { ErrorBoundary } from '../ErrorBoundary';

const Header = () => {
  return (
    <HeaderStyled>
      <h1>MySide Shop 🏬</h1>

      <NavigationDiv>
        <Link href="/">Catalogue</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/about">About us</Link>
        <Link href="/signup" className="sign-up">Sign up</Link>
      </NavigationDiv>
      <ErrorBoundary>
        <Suspense fallback={<></>}>
          <MenuSidebar />
        </Suspense>
      </ErrorBoundary>
    </HeaderStyled>
  );
};

export default Header;