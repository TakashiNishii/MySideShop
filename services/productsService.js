export async function getProducts(filters) {
  const { searchQuery, category, page = 1 } = filters;
  const maxLimit = 150; // Total de produtos disponíveis
  const defaultLimit = 10; // Produtos por página
  let url = 'https://fakestoreapi.in/api/products';

  if (category && category !== 'all') {
    url += `/category?type=${category}`;
    if (searchQuery) {
      url += `&limit=${maxLimit}`;
    } else {
      url += `&limit=${defaultLimit}&page=${page}`;
    }
  } else {
    if (searchQuery) {
      url += `?limit=${maxLimit}`;
    } else {
      url += `?limit=${defaultLimit}&page=${page}`;
    }
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch products');

  const data = await response.json();

  if (searchQuery) {
    const filteredProducts = data.products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return {
      ...data,
      products: filteredProducts,
      currentPage: 1,
      totalPages: 1 // Não há paginação na busca
    };
  }

  // Calcula o total de páginas baseado no total de produtos
  const totalProducts = data.total || maxLimit;
  const totalPages = Math.ceil(totalProducts / defaultLimit);

  return {
    ...data,
    currentPage: page,
    totalPages,
    total: totalProducts
  };
}

export async function getProductById(id) {
  const response = await fetch(`https://fakestoreapi.in/api/products/${id}`);
  if (!response.ok) throw new Error('Failed to fetch product');
  return response.json();
}

export async function getAllCategories() {
  const response = await fetch('https://fakestoreapi.in/api/products/category');
  if (!response.ok) throw new Error('Failed to fetch categories');
  return response.json();
}