import React from "react";

const CompanyOverview = () => {
  const heroData = {
  title: "About Singapore Tours",
  subtitle:
    "Discover the heart and soul of the Lion City with those who know it best.",
  image: { heroImage },
  fallback: "https://placehold.co/1200x800/000000/FFFFFF?text=Singapore",
};

  return (
    <section className="py-10 px-6">
       {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center">
        <div className="absolute inset-0  z-10"></div>
        <Image
          src={heroImage}
          alt={heroData.title}
          width={500}
          height={500}
          className="object-cover h-full w-full"
          priority
        />
        <div className=" absolute z-20 p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-shadow-lg">
            {heroData.title}
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto">
            {heroData.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
