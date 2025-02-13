"use client"

import { ProductCard, ProductsGrid } from "./products.styles"
import { useProducts } from "@/hooks/useProducts";
import { useEffect } from "react";

const Products = () => {
  const {
    products,
    loading,
    error,
    fetchProducts,
    searchQuery,
    selectedCategory
  } = useProducts();
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, [searchQuery, selectedCategory]);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <ProductsGrid>

    </ProductsGrid>
  )
}

export default Products