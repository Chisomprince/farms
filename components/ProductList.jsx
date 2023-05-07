// import { StarIcon } from "@heroicons/react/solid";

const products = [
  {
    id: 1,
    name: "Organize Basic Set (Walnut)",
    price: 1490,
    rating: 5,
    reviewCount: 38,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 2,
    name: "Organize Pen Holder",
    price: 1553,
    rating: 5,
    reviewCount: 18,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 3,
    name: "Organize Sticky Note Holder",
    price: 15123,
    rating: 5,
    reviewCount: 14,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 4,
    name: "Organize Phone Holder",
    price: 1500,
    rating: 4,
    reviewCount: 21,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  // More products...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductList() {
  return (
    <div className="bg-green-100 min-h-screen mt-20">
      <div className="max-w-7xl mx-auto overflow-hidden p-4 sm:px-6 lg:px-8">
        <h1 className="mb-4">Products</h1>
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-2 gap-4 sm:mx-0 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white shadow-lg">
              <div className=" overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full max-h-64 object-center object-cover"
                />
              </div>
              <div className="pt-4 pb-4  p-2  sm:p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <div className="mt-3 flex flex-col">
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <div className="flex ">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "flex-shrink-0 h-4 w-"
                        )}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}{" "}
                  </div>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">
                  #{product.price?.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
