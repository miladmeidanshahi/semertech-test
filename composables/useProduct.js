const products = ref([])
const productFilter = ref({
  sort: null,
  search: null,
  category: null
})

export const useProductService = () => {
  const getProducts = config => useFetch('https://fakestoreapi.com/products', config)
  const getCategories = () => useFetch('https://fakestoreapi.com/products/categories')
  const getProductByCategory = (category, config) => useFetch(`https://fakestoreapi.com/products/category/${category}`, config)

  return {
    products,
    productFilter,
    getProducts,
    getCategories,
    getProductByCategory
  }
}