"use client"
import { FiltersContainer, Input, SearchWithImageContainer } from './filters.styles'
import { Search } from 'lucide-react'
import CategoryDropdown from './category-dropdown/CategoryDropdown'
import { useProducts } from '@/hooks/useProducts'
import { useRef, useEffect } from 'react'

export default function Filters() {
  const { setSearchQuery } = useProducts()
  const timeoutRef = useRef(null)
  const valueRef = useRef('')

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleSearch = (event) => {
    const value = event.target.value
    valueRef.current = value

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      if (valueRef.current === value) {
        setSearchQuery(value)
      }
    }, 500)
  }

  return (
    <FiltersContainer>
      <SearchWithImageContainer>
        <Search size={20} />
        <Input
          type="text"
          placeholder="Buscar produto"
          onChange={handleSearch}
          data-testid="search-input"
        />
      </SearchWithImageContainer>
      <CategoryDropdown />
    </FiltersContainer>
  )
}