"use client";
import ProductsList from "@/components/ProductList";
import {getProducts} from "@/lib/products";
import {PaginationDemo} from "@/components/Pagination";
import {useStore} from "@/app/store";

export default async function Home() {
    const {q} = useStore();
    const data = await getProducts({
        limit: 100,
        skip: 0,
        text: q,
        // category: category,
    });
    return (
        <main className="flex flex-col justify-between items-center mx-12 my-12 bg-white">
            <ProductsList products={data.products}/>
            <PaginationDemo/>
        </main>
    )
}