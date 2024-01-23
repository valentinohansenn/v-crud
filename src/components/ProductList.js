"use client";
import ProductCard from "./ProductCard";

export default async function ProductsList({products}) {
    return (
        <div className="flex gap-3 w-full rounded-lg flex-wrap justify-center items-center">
            {products && products.map((product) => (
                <ProductCard key={product.id} data={product}/>
            ))}
        </div>
    );
}