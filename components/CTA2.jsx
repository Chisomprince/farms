import Link from "next/link";

export default function CTA2() {
  return (
    <div class="flex-col-reverse   grid grid-cols-1 gap-4 lg:gap-28 sm:grid-cols-2 mx-auto max-w-6xl mt-32  px-4 lg:px-0">
      <div class="flex lg:justify-start justify-center order-last lg:order-first">
        <img
          src="https://plus.unsplash.com/premium_photo-1666777246850-e18916172de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          class="w-10/12 max-h-[500px] object-cover"
          alt="Tree"
        />
      </div>
      <div class="w-10/12  flex flex-col justify-center ">
        <h2 class="text-2xl font-extrabold text-black  sm:text-3xl">
          <span class="block">Shop from Farmers directly</span>
        </h2>
        <p class="text-md mt-3 text-gray-400">
          Lorem ipsum dolor sit amet consectetur. Sit augue dui et commodo id
          risus leo a fames.
        </p>

        <Link
          href="/"
          aria-label=""
          className="font-medium bg-[#34A853] text-white text-sm py-2 px-4 rounded mt-4 w-32 text-center"
        >
          Start Selling
        </Link>
      </div>
    </div>
  );
}
