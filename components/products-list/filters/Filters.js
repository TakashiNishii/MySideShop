"use client"
import { FiltersContainer, Input, SearchWithImageContainer } from './filters.styles'
import { Search } from 'lucide-react'
import CategoryDropdown from './category-dropdown/CategoryDropdown'

const Filters = () => {
  return (
    <FiltersContainer>
      <SearchWithImageContainer>
        <Search size="24" className='icon-search' />
        <Input type="text" placeholder="Search..." />
      </SearchWithImageContainer>
      <CategoryDropdown />
    </FiltersContainer>
  )
}

export default Filters