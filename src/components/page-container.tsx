import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface PageContainerProps {
  isOpen: boolean;
  children: ReactNode;
}

const Container = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(100%)'};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
`;

export const PageContainer: FC<PageContainerProps> = ({ isOpen, children }) => {
  return <Container $isOpen={isOpen}>{children}</Container>;
};
