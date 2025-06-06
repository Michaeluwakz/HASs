import { ProductsSection } from '@/components/sections/products-section';

export default function ProductsPage() {
  return (
    <div className="bg-background"> {/* Ensure consistent background */}
      <ProductsSection 
        title="All Our Products"
        subtitle="Explore our full range of premium hair care solutions."
      />
    </div>
  );
}
