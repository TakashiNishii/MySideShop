import React, { useEffect } from 'react';
import { useCategories } from '@/hooks/useCategories';
import { useProducts } from '@/hooks/useProducts';
import {
  CategoryDropdownContainer,
  CategoryDropdownOption,
  CategoryDropdownSelect,
  CategoryDropdownTitle
} from './categorydropdown.styles';

const CategoryDropdown = () => {
  const { categories, loading, error, fetchCategories } = useCategories();
  const { selectedCategory, setCategory } = useProducts();

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error loading categories: {error}</div>;
  if (!categories) return <div>No categories found</div>;

  return (
    <CategoryDropdownContainer>
      <CategoryDropdownTitle>Category</CategoryDropdownTitle>
      <CategoryDropdownSelect
        value={selectedCategory}
        onChange={(e) => setCategory(e.target.value)}
      >
        <CategoryDropdownOption value="all">All</CategoryDropdownOption>
        {categories.categories.map((category) => (
          <CategoryDropdownOption key={category} value={category}>
            {category}
          </CategoryDropdownOption>
        ))}
      </CategoryDropdownSelect>
    </CategoryDropdownContainer>
  );
};

export default CategoryDropdown;