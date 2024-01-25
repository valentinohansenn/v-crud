"use client";
import labels from "@/app/labels";
import { useStore } from "@/app/store";
import ComboboxDemo from "@/components/ComboBox";
import CreateProduct from "@/components/CreateProduct";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const setText = useStore((state) => state.setText);
  const setCategory = useStore((state) => state.setCategory);
  const limit = useStore((state) => state.limit);
  const skip = useStore((state) => state.skip);

  const onSubmitRouter = useRouter();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const cate = event.currentTarget.textContent;
    const searchText = form.get("query");
    const text = searchText ? `&q=${searchText}` : "";
    setText(searchText);
    setCategory(cate.toLowerCase());
    onSubmitRouter.push(
      `/?limit=${limit}&skip=${skip}${text}&category=${cate.toLowerCase()}`,
    );
  };

  return (
    <div className="flex justify-between py-7 px-3 flex-wrap">
      <div className="flex justify-between w-full mx-12 mt-4 flex-wrap">
        {/* Website Name section */}
        <Link
          href="/"
          className="font-extrabold text-4xl text-black font-sans flex items-center"
        >
          CRUD!
        </Link>
        {/* Searching Bar section */}
        <form
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
          className="w-2/5 lg:w-3/5 flex justify-center items-center"
        >
          <div className="flex items-center rounded-full border-2 border-black w-full focus-within:ring focus-within:ring-gray-950 transition duration-300 focus:rounded-md">
            {/* Adjusted width for the dropdown */}
            <div className="h-12 rounded rounded-l-full w-fit flex items-center justify-center bg-black hover:bg-gray-700">
              <ComboboxDemo name="category" />
            </div>
            {/* Adjusted width for the input */}
            <div className="flex-grow">
              <input
                type="text"
                name="query"
                placeholder="Search..."
                autoComplete="off"
                className="h-12 bg-gray-100 rounded-none px-4 pl-2 pr-6 font-light text-black w-full focus:outline-none font-sans"
              />
            </div>
            {/* Adjusted width for the search icon */}
            <button
              className="h-12 outline-none hover:bg-gray-700 rounded rounded-r-full w-1/6 lg:w-1/12 flex items-center justify-center bg-black"
              type="submit"
            >
              <SearchIcon className="text-gray-100" />
            </button>
          </div>
        </form>
        {/* Add Product section */}
        <div>
          <CreateProduct labels={labels} />
        </div>
      </div>
    </div>
  );
}
