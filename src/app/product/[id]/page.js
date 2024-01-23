import labels from "@/app/labels";
import { getProductById } from "@/lib/products";
import CreateProduct from "@/components/CreateProduct";
import { DeleteProduct } from "@/components/DeleteProduct";
import Image from "next/image";
import HalfRating from "@/components/Rating";
import Link from "next/link";

export default async function page(idObj) {
  const id = idObj.params.id;
  const product = await getProductById(id);
  labels.forEach((label) => (label.defaultValue = product[label.name]));
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex font-sans font-semibold gap-20 pb-20">
        <div className="flex flex-col">
          <div className="mb-6">
            <Link href="/">← Back to Home page</Link>
          </div>
          <div className="flex h-full justify-center">
            <Image
              src={product.thumbnail}
              alt="image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div>
            <h1 className="text-4xl">{product.title}</h1>
            <span className="text-xl">${product.price}</span>
            <p className="font-light pb-3 pt-1">{product.description}</p>
          </div>
          <hr className="border-2 mt-10" />
          <div className="pt-4 gap-2 font-medium">
            <table className="table-auto">
              <tbody>
                <tr>
                  <td className="font-bold pr-20 py-1">Brand</td>
                  <td>{product.brand}</td>
                </tr>
                <tr>
                  <td className="font-bold pr-20 py-1">Rating</td>
                  <td>
                    <HalfRating rating={product.rating} />
                  </td>
                </tr>
                <tr>
                  <td className="font-bold pr-20 py-1">Discount</td>
                  <td>{product.discountPercentage}%</td>
                </tr>
                <tr>
                  <td className="font-bold pr-20 py-1">Stock</td>
                  <td>{product.stock}</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
          <hr className="border-2 my-8" />
          <div className="flex justify-around gap-4 h-14 mt-8">
            <CreateProduct labels={labels} data={product} />
            <DeleteProduct id={id} />
          </div>
        </div>
      </div>
    </main>
  );
}
