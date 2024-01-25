import {PaginationDemo} from "@/components/Pagination";
import ProductList from "@/components/ProductList";

export default function Home() {
    return (
        <main className="flex flex-col justify-between items-center mx-12 my-12 bg-white">
            <ProductList/>
            <PaginationDemo/>
        </main>
    );
}
