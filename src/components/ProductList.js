"use client";

import { useStore } from "@/app/store";
import { getProducts } from "@/lib/products";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const q = useStore((state) => state.q);

  useEffect(() => {
    const main = async () => {
      const { products } = await getProducts({
        limit: 100,
        skip: 0,
        text: q,
      });

      setProducts(products);
    };
    main();
  }, [q]);

  return (
    <div className="flex gap-3 w-full rounded-lg flex-wrap justify-center items-center">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
    </div>
  );
}
