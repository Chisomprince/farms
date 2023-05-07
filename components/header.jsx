import Link from "next/link";

export const Header = () => {
  return (
    <div className="overflow-hidden h-[calc(100vh-72px)]  bg-[linear-gradient(to_right_bottom,#030108B2,#030108B2),url('https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')]">
      <div className="flex justify-center flex-col px-4 py-36 h-full container max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
            <h2 className="max-w-lg mb-6  text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-[50px]">
              Bringing farmers and buyers together for a healthier planet.
            </h2>

            <Link
              href="/"
              aria-label=""
              className="font-medium bg-[#34A853] text-white text-sm py-2 px-4 rounded"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
