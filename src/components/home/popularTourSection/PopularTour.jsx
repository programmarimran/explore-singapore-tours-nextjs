import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularTour = async () => {
  // const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/singapore-tours.json`)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/homePage`, {
    cache: "no-store",
  });
  const tours = await res.json();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-8">
      <h1 className="text-3xl text-center font-bold mb-6 text-yellow-600 dark:text-yellow-400">
       Popular Tours
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="border rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
          >
            <div className="   hover:scale-105 transition-all duration-300 ">
              <Image
                src={tour?.mainImage}
                priority={true}
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAAAQAgCdASoQAAsABUB8JbACdACwBNa/YCYAAP7bqFnqGusb+eYXTWIHPFjJkco/m5F2QWCDi/G+A41D9cUyjErTRMxsEsJrwAA="
                className="rounded-lg h-36 md:h-48 lg:h-[224px] w-full"
                alt="Picture of the News card"
                width={500}
                height={500}
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{tour.title}</h2>
              <p className="text-sm mt-1">
                {tour.category} | {tour.duration}
              </p>
              <div className=" flex justify-between items-center">
                <p className="text-yellow-500 font-bold mt-2">${tour.price}</p>
                <Link
                  href={`/tours/${tour.id}`}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTour;
