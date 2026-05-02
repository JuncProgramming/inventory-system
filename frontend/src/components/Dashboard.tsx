import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '@/api/productApi'

export const Dashboard = () => {
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error loading inventory</div>

  return (
    <div>
      <h1>Inventory</h1>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Category: {product.category.name}</p>
            <p>Stock: {product.stockLevel === 0 ? 'Out of Stock' : `${product.stockLevel} units`}</p>
            <button>Update</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
