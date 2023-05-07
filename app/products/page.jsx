import Nav from "@/components/nav";
import { ProductHero } from "@/components/ProductHero";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className="bg-green-100">
      <Nav />
      <ProductHero />
      <ProductList />
    </div>
  );
}
