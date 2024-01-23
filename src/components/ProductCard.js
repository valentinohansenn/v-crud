import Image from "next/image";
import HalfRating from "@/components/Rating";
import Link from "next/link";

export default function ProductCard({ data }) {
  const { id, title, price, discountPercentage, rating, thumbnail } =
    data || {};
  return (
    <Link
      className="flex justify-center bg-gray-100 hover:bg-gray-200 hover:cursor-pointer shadow-lg hover:shadow-xl rounded p-2 w-[372px] h-[542px] m-1"
      href={`/product/${id}`}
    >
      <div className="flex flex-col">
        <div className="flex h-3/5 justify-center">
          <div className="flex">
            <Image
              src={thumbnail}
              alt={title}
              width={422}
              height={150}
              className="object-center h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col h-2/5 gap-1">
          <span className="font-semibold text-xl font-sans pt-1">{title}</span>
          <div className="pt-1">
            <HalfRating rating={rating} />
          </div>
          <span className="flex pt-1 font-semibold font-sans">
            <span className="flex items-end text-green-600 text-xl pr-2">
              -{discountPercentage}%
            </span>
            <small className="relative top-1.5 text-xs">$</small>
            <span className="text-2xl relative top-0.5">{price}</span>
          </span>
          <span className="text-xs text-gray-400 font-sans">
            RRP: ${(price + (price * discountPercentage) / 100).toFixed(0)}
          </span>
        </div>
      </div>
    </Link>
  );
}
