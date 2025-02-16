"use client"

import { ProductsGrid } from "./products.styles"
import { useProducts } from "@/hooks/useProducts";
import { useEffect } from "react";
import ProductCard from "./product-card/ProductCard";

const Products = () => {
  const {
    data,
    loading,
    error,
    fetchProducts,
    searchQuery,
    selectedCategory
  } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [searchQuery, selectedCategory]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <ProductsGrid id='products-section' data-testid='products-section'>
      {data.products && data.products.map((product) => {
        return (
          <ProductCard key={product.id} product={product} />
        );
      })}
    </ProductsGrid>
  )
}

export default Products