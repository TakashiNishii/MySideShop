import { getProducts, getProductById, getAllCategories } from '@/services/productsService';

// Mock do fetch global
global.fetch = jest.fn();

describe('Products Service', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('Should fetch products successfully', async () => {
    const mockProducts = {
      products: [
        { id: 1, title: 'Product 1' },
        { id: 2, title: 'Product 2' }
      ]
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts
    });

    const result = await getProducts({ searchQuery: '', category: 'all' });

    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.in/api/products');
    expect(result).toEqual(mockProducts);
  });

  it('Should filter products by search query', async () => {
    const mockProducts = {
      products: [
        { id: 1, title: 'iPhone' },
        { id: 2, title: 'Samsung' }
      ]
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts
    });

    const result = await getProducts({ searchQuery: 'iphone', category: 'all' });

    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.in/api/products?limit=150');
    expect(result.products).toHaveLength(1);
    expect(result.products[0].title).toContain('iPhone');
  });

  it('Should fetch products by category', async () => {
    const mockProducts = {
      products: [
        { id: 1, title: 'Product 1', category: 'mobile' }
      ]
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts
    });

    await getProducts({ category: 'mobile' });

    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.in/api/products/category?type=mobile');
  });

  it('Should fetch product by ID', async () => {
    const mockProduct = { id: 1, title: 'Product 1' };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct
    });

    const result = await getProductById(1);

    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.in/api/products/1');
    expect(result).toEqual(mockProduct);
  });

  it('Should fetch all categories', async () => {
    const mockCategories = ['mobile', 'laptop', 'tv'];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockCategories
    });

    const result = await getAllCategories();

    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.in/api/products/category');
    expect(result).toEqual(mockCategories);
  });

  it('Should handle API errors', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found'
    });

    await expect(getProducts({})).rejects.toThrow('Failed to fetch products');

    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found'
    });

    await expect(getProductById(1)).rejects.toThrow('Failed to fetch product');

    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found'
    });

    await expect(getAllCategories()).rejects.toThrow('Failed to fetch categories');
  });
}); 