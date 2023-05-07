export default function Services() {
  return (
    <div className="bg-green-600/25 py-16 mt-32 ">
      <div className="max-w-6xl mx-auto ">
        <div>
          <h1 class="text-2xl font-extrabold text-black  sm:text-3xl text-center">
            Our Services
          </h1>

          <div className="grid lg:grid-cols-2 gap-4 mt-6 px-4 lg:px-0">
            <div className="border border-gray-800 py-8 p-4 flex flex-col items-center">
              <img
                src={"/employer-colored.png"}
                alt="services"
                className="w-12 h-12"
              />
              <h1 className="text-center mt-4">Farmer</h1>
              <p className="text-center mt-4">
                Carry out your work with high-performance equipment and a TOP
                driver!More than 500 service providers offer their equipment:
                service is the most effective way to reduce mechanization
                costs!All of our service providers are certified.
              </p>
            </div>
            <div className="border border-gray-800 py-8 p-4 flex flex-col items-center">
              <img
                src={"/employer-colored.png"}
                alt="services"
                className="w-12 h-12"
              />
              <h1 className="text-center mt-4">Service provider</h1>
              <p className="text-center mt-4">
                Carry out your work with high-performance equipment and a TOP
                driver!More than 500 service providers offer their equipment:
                service is the most effective way to reduce mechanization
                costs!All of our service providers are certified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
