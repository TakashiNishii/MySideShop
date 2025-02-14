import styled from "styled-components";

export const CategoryDropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const CategoryDropdownTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin: 0;
  line-height: 1.3;
`;

export const CategoryDropdownSelect = styled.select`
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 18px;
  font-size: 14px;
  color: #333;
  background: white;
  cursor: pointer;
  :focus {
    outline: none;
    outline-color: transparent;
    outline-offset: 0px;
    outline-width: 0px;
  }
`;

export const CategoryDropdownOption = styled.option`
  font-size: 14px;
  color: #333;
  background: white;
  cursor: pointer;
  :focus {
    outline: none;
    outline-color: transparent;
    outline-offset: 0px;
    outline-width: 0px;
  }
`;