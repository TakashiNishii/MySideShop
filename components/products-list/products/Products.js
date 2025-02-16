"use client"

import { ProductsGrid } from "./products.styles"
import { useProducts } from "@/hooks/useProducts";
import { useEffect } from "react";
import ProductCard from "./product-card/ProductCard";
import Pagination from "../filters/pagination/Pagination";

const Products = () => {
  const {
    data,
    loading,
    error,
    fetchProducts,
    searchQuery,
    selectedCategory,
    page,
    totalPages,
    setPage
  } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [searchQuery, selectedCategory, page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {!searchQuery && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      <ProductsGrid id='products-section' data-testid='products-section'>
        {data?.products && data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>

      {!searchQuery && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default Products;