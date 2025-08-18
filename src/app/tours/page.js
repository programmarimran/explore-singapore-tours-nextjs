import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Tourspage =async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/singapore-tours.json`)
  const tours = await data.json()

    return (
           <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-yellow-600 dark:text-yellow-400">
        Singapore Tours
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="border rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
          >
            <Image
              src={tour.mainImage}
              alt={tour.title}
              width={500}
              height={500}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{tour.title}</h2>
              <p className="text-sm mt-1">
                {tour.category} | {tour.duration}
              </p>
              <div className=' flex justify-between items-center'>

                <p className="text-yellow-500 font-bold mt-2">${tour.price}</p>
               <Link
                href="/book-now" 
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

export default Tourspage;