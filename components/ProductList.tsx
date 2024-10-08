import { ProductCard } from '@/components/ProductCard';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
  features: string[];
  image: string;
}

interface ProductListProps {
  products: Product[];
  totalModels: number;
}

export function ProductList({ products, totalModels }: ProductListProps) {
  return (
    <div className="w-full md:w-3/4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recommended Products</h2>
        <div className="text-sm">
          <span className="font-medium">{totalModels}</span> Total Models |{' '}
          <span className="font-medium">{products.length}</span> Recommended
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}