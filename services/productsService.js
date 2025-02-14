export async function getProducts(filters) {
  const { searchQuery, category } = filters;
  const maxLimit = 150;
  let url = 'https://fakestoreapi.in/api/products';

  if (category && category !== 'all') {
    url += `/category?type=${category}`;
  }

  if (searchQuery) {
    url += `?limit=${maxLimit}`;
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch products');
  if (searchQuery) {
    const data = await response.json();
    console.log(data.products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    ))
    return {
      ...response,
      products: data.products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
  }
  return response.json();
}

export async function getAllCategories() {
  const response = await fetch('https://fakestoreapi.in/api/products/category');
  if (!response.ok) throw new Error('Failed to fetch categories');
  return response.json();
}