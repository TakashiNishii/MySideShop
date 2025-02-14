import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SearchWithImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border: 2px solid #ddd;
  border-radius: 18px;
  width: 75%;
  .icon-search {
    cursor: pointer;
    margin-left: 8px;
  }
`;

export const Input = styled.input`
  padding: 12px;
  border: none;
  font-size: 14px;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 16px;
  }
`;