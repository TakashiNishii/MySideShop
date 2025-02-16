const BASE_URL = 'https://fakestoreapi.in/api';

export const getProducts = async ({ searchQuery = '', category = 'all', page = 1 }) => {
  try {
    let url = `${BASE_URL}/products`;
    const params = new URLSearchParams();

    // Se tiver busca ou categoria específica, não usa paginação e pega todos os produtos
    if (searchQuery || category !== 'all') {
      params.append('limit', '150');
    } else {
      params.append('limit', '10');
      params.append('page', page);
    }

    // Se tiver categoria específica, usa endpoint de categoria
    if (category !== 'all') {
      url = `${url}/category`;
      params.append('type', category);
    }

    const response = await fetch(`${url}?${params.toString()}`);

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();

    // Aplica o filtro de texto se houver searchQuery
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

    // Se não houver busca, retorna os dados normalmente
    return data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};

export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) throw new Error('Failed to fetch product');
  return response.json();
}

export async function getAllCategories() {
  const response = await fetch(`${BASE_URL}/products/category`);
  if (!response.ok) throw new Error('Failed to fetch categories');
  return response.json();
}