export async function getProducts(filters) {
  const { searchQuery, category } = filters;
  let url = 'https://fakestoreapi.in/api/products';

  const params = new URLSearchParams();
  if (category && category !== 'all') params.append('category', category);
  if (searchQuery) params.append('search', searchQuery);

  if (params.toString()) url += `?${params.toString()}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
}

export async function getAllCategories() {
  const response = await fetch('https://fakestoreapi.in/api/products/categories');
  if (!response.ok) throw new Error('Failed to fetch categories');
  return response.json();
}