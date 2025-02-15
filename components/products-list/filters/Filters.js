"use client"
import { FiltersContainer, Input, SearchWithImageContainer } from './filters.styles'
import { Search } from 'lucide-react'
import CategoryDropdown from './category-dropdown/CategoryDropdown'
import { useProducts } from '@/hooks/useProducts'
import { Suspense, useState } from 'react'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'

const Filters = () => {
  const { searchQuery, setSearchQuery } = useProducts();
  const [timeoutId, setTimeoutId] = useState(null);
  const handleSearch = (e) => {
    const value = e.target.value;
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => setSearchQuery(value), 500));
  };
  return (
    <FiltersContainer>
      <SearchWithImageContainer>
        <Search size="24" className='icon-search' />
        <Input type="text" placeholder="Search..." defaultValue={searchQuery} onChange={(e) => handleSearch(e)} />
      </SearchWithImageContainer>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading categories...</div>}>
          <CategoryDropdown />
        </Suspense>
      </ErrorBoundary>
    </FiltersContainer>
  )
}

export default Filters