import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-20 my-24 mb-48 border-t-2 font-sans">
      <div className="mx-48">
        <div className="flex justify-between">
          <div className="flex flex-col font-black">
            <h1 className="text-8xl">CRUD!</h1>
            <h2 className="flex justify-center font-bold text-gray-800">
              Create, Read, Update and Delete!
            </h2>
          </div>
          <div className="ml-72 flex flex-col items-end">
            <h1 className="text-4xl font-black">About This Website</h1>
            <p className="mt-2">
              This website has been developed as part of an internship program
              to develop a
            </p>
            <p>
              CRUD functionality for products resources sourced from Ambisius
              Lab.
            </p>
            <p>
              It interfaces with the{" "}
              <span className="ml-1 mr-1 text-blue-600 underline">
                <a href="https://dummyjson.com/docs/products">
                  DummyJSON Products API
                </a>
              </span>{" "}
              to accomplish its objectives.
            </p>
          </div>
        </div>
        <hr className="my-12 border-2" />
        <div className="flex justify-between text-xl">
          <h1>© Valentino Hansen</h1>
          <h3 className="flex justify-center text-s mb-4">
            <Link
              href="https://github.com/valentinohansenn/"
              className="text-blue-900 underline"
            >
              GitHub
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
