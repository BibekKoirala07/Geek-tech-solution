import { useState } from "react";
import { Product } from "../types/types";

const Home = ({
  products,
  setProducts,
  addToCart,
  removeFromCart,
}: {
  products: Product[];
  setProducts: (products: Product[]) => void;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}) => {
  const [title, setTitle] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();

  const handleSearch = () => {
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(title.toLowerCase()) &&
        (minPrice === undefined || product.price >= minPrice) &&
        (maxPrice === undefined || product.price <= maxPrice)
    );

    setProducts(filteredProducts);
  };

  return (
    <div className="">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="title" className="text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-10 w-full sm:w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
            placeholder="Search for title..."
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="min-price"
            className="text-sm font-medium text-gray-700"
          >
            Min Price
          </label>
          <input
            id="min-price"
            name="min-price"
            type="number"
            value={minPrice ?? ""}
            onChange={(e) =>
              setMinPrice(e.target.value ? Number(e.target.value) : undefined)
            }
            className="h-10 w-full sm:w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="max-price"
            className="text-sm font-medium text-gray-700"
          >
            Max Price
          </label>
          <input
            id="max-price"
            name="max-price"
            type="number"
            value={maxPrice ?? ""}
            onChange={(e) =>
              setMaxPrice(e.target.value ? Number(e.target.value) : undefined)
            }
            className="h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
          />
        </div>

        <div className="flex flex-col justify-end">
          <button
            onClick={handleSearch}
            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-black px-6 text-sm font-medium text-white transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-10 gap-5 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
        {products.length === 0 && (
          <div className="col-span-1 sm:col-span-2 md:col-span-3  h-[300px] text-2xl text-center text-gray-500 bg-gray-200 rounded-2xl w-full flex flex-col justify-around">
            <h1 className="">No Product available with that criteria.</h1>
          </div>
        )}
        {products.length > 0 &&
          products.map((each: Product) => (
            <div
              key={each.id}
              className="shadow-sm pb-4 md:shadow-md rounded-xl"
            >
              <div className="w-full p-7 text-center h-[248px] border-black flex items-center justify-center bg-gray-100 rounded-t-xl">
                <div className="flex flex-col rounded-t-xl items-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-12 h-12 mb-2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                    <line x1="3" y1="3" x2="21" y2="21" />
                  </svg>
                  <span className="text-sm font-medium">{each.name}</span>
                  <span className="text-sm font-medium">
                    {"Image should be related to " + each.name}
                  </span>
                </div>
              </div>
              <div className="p-3">
                <div className="flex justify-between align-middle">
                  <h1 className="text-2xl font-medium">{each.name}</h1>
                  <p className="font-medium text-xl">$ {each.price}</p>
                </div>
                <div className="mt-5 flex justify-end">
                  {!each.addedToCart ? (
                    <button
                      onClick={() => addToCart(each.id)}
                      className="bg-black cursor-pointer text-white px-7 p-2 rounded-md"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => removeFromCart(each.id)}
                      className="bg-black cursor-pointer text-white px-7 p-2 rounded-md"
                    >
                      Remove From Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
