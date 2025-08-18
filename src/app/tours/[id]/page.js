import React from 'react';

export const revalidate = 60; // ISR
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/tours`);
  const posts = await res.json();

  return posts.map((post) => ({
    id: String(post.id),
  }));
}

const Page = async ({ params }) => {
  const { id } = params;

  // Server-side fetch with relative path
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/tours/${id}`);
  console.log(res)
  // check
  if (!res.ok) {
    return <div>Tour not found</div>;
  }

  const tour = await res.json();

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-yellow-600 dark:text-yellow-400">
        {tour.title}
      </h1>
      <p className="mb-2">{tour.description}</p>
      <p className="font-semibold">Category: {tour.category}</p>
      <p className="font-semibold">Duration: {tour.duration}</p>
      <p className="font-bold text-yellow-500">${tour.price}</p>
    </div>
  );
};

export default Page;
