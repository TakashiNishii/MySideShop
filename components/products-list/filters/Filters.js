"use client"
import { FiltersContainer, Input, SearchWithImageContainer } from './filters.styles'
import { Search } from 'lucide-react'
import CategoryDropdown from './category-dropdown/CategoryDropdown'
import { useProducts } from '@/hooks/useProducts'
import { useState } from 'react'

const Filters = () => {
  const { searchQuery, setSearchQuery } = useProducts();
  const [timeoutId, setTimeoutId] = useState(null);
  const handleSearch = (e) => {
    const value = e.target.value;
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => setSearchQuery(value), 500));
  };
  return (
    <FiltersContainer id='filters-section'>
      <SearchWithImageContainer>
        <Search size="24" className='icon-search' />
        <Input type="text" placeholder="Search..." defaultValue={searchQuery} onChange={(e) => handleSearch(e)} />
      </SearchWithImageContainer>
      <CategoryDropdown />
    </FiltersContainer>
  )
}

export default Filters