import styled from "styled-components";

export const NavigationDivMobile = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

// Sidebar components
export const SidebarWrapper = styled.div`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transition: visibility 0.3s;
  }
`;

export const SidebarBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
`;

export const SidebarContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  max-width: 300px;
  background: ${({ theme }) => theme.colors.background.light};
  padding: ${({ theme }) => theme.spacing.large};
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  box-shadow: ${({ theme }) => theme.shadows.hover};
  display: flex;
  flex-direction: column;
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing.xxlarge};

  svg {
    cursor: pointer;
    transition: transform 0.2s;
    color: ${({ theme }) => theme.colors.text.primary};

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const MobileLink = styled.a`
  display: block;
  padding: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.sizes.body};
  transition: background-color 0.2s;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.dark};
  }

  &.sign-up {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.typography.weights.bold};
    margin-top: ${({ theme }) => theme.spacing.large};
  }
`;