import React from 'react'
import { CategoryDropdownContainer, CategoryDropdownOption, CategoryDropdownSelect, CategoryDropdownTitle } from './categorydropdown.styles'

const CategoryDropdown = () => {
  return (
    <CategoryDropdownContainer>
      <CategoryDropdownTitle>Category</CategoryDropdownTitle>
      <CategoryDropdownSelect>
        <CategoryDropdownOption value="all">All</CategoryDropdownOption>
        <CategoryDropdownOption value="tv">TV</CategoryDropdownOption>
        <CategoryDropdownOption value="audio">Audio</CategoryDropdownOption>
        <CategoryDropdownOption value="laptop">Laptop</CategoryDropdownOption>
        <CategoryDropdownOption value="mobile">Mobile</CategoryDropdownOption>
        <CategoryDropdownOption value="gaming">Gaming</CategoryDropdownOption>
        <CategoryDropdownOption value="appliances">Appliances</CategoryDropdownOption>
      </CategoryDropdownSelect>
    </CategoryDropdownContainer>
  )
}

export default CategoryDropdown