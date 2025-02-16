import styled from "styled-components";

export const AddCartButtonContainer = styled.button`
  width: 30px;
  height: 30px;
  padding: 12px;
  background: #16A34A;
  color: white;
  border: none;
  border-radius: 100%;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }

  &.expanded {
    width: 100%;
    height: 100%;
    padding: 12px;
  }
`;

