import Link from "next/link";

export default function Footer() {
  return (
    <div className="md:px-48 py-20 my-24 mb-48 border-t-2 font-sans">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col font-black md:pr-96">
          <h1 className="text-8xl text-center md:text-left">CRUD!</h1>
          <h2 className="flex justify-center font-bold text-gray-800 pb-16 md:pb-0">
            Create, Read, Update and Delete!
          </h2>
        </div>
        <div className="flex flex-col mt-4 md:mt-0">
          <h1 className="text-4xl font-black text-center md:text-right">
            About This Website
          </h1>
          <span className="mt-2 md:text-right text-center px-4 md:px-0">
            This website has been developed as part of an internship program to
            develop a CRUD functionality for products resources sourced from
            Ambisius Lab. It interfaces with the
            <a
              className="ml-1 mr-1 text-blue-600 underline"
              href="https://dummyjson.com/docs/products"
            >
              DummyJSON Products API
            </a>
            to accomplish its objectives.
          </span>
        </div>
      </div>
      <hr className="my-12 border-2" />
      <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between text-xl">
        <h1 className="flex justify-center">© Valentino Hansen</h1>
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
  );
}
