"use client";

import { useStore } from "@/app/store";
import { getProducts } from "@/lib/products";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const setAllProducts = useStore((state) => state.setAllProducts);
  const setTotal = useStore((state) => state.setTotal);
  const limit = useStore((state) => state.limit);
  const skip = useStore((state) => state.skip);
  const q = useStore((state) => state.q);
  const category = useStore((state) => state.category);
  const products = useStore((state) => state.allProducts);

  useEffect(() => {
    const main = async () => {
      const productsList = await getProducts({
        limit: limit,
        skip: skip,
        text: q,
        category: category,
      });
      setAllProducts(productsList.products);
      setTotal(productsList.total);
    };
    main();
  }, [limit, skip, q, category]);

  return (
    <div className="flex gap-3 w-full rounded-lg flex-wrap justify-center items-center">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
    </div>
  );
}
