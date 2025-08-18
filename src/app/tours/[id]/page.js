import React from 'react';
import Image from 'next/image';
import { 
  Clock, 
  DollarSign, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle, 
  XCircle,
  Users,
  Calendar,
  Award,
  Heart
} from 'lucide-react';

export const revalidate = 60; // ISR

export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://explore-singapore-tours-5irmmk1mp.vercel.app'}/api/tours`);
    
    if (!res.ok) {
      console.warn('Failed to fetch tours for static generation, using fallback');
      return [];
    }
    
    const posts = await res.json();
    return posts.map((post) => ({
      id: String(post.id),
    }));
  } catch (error) {
    console.warn('Error in generateStaticParams:', error.message);
    // Fallback to empty array - pages will be generated on-demand
    return [];
  }
}

const Page = async ({ params }) => {
  const { id } = params;

  // Server-side fetch with relative path
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://explore-singapore-tours-5irmmk1mp.vercel.app'}/api/tours/${id}`);
  
  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Tour Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400">The tour you absolutere looking for doesn not exist.</p>
        </div>
      </div>
    );
  }

  const tour = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={tour.mainImage}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="container mx-auto px-6 pb-8">
            <div className="text-white">
              <span className="inline-block bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {tour.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{tour.title}</h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">{tour.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Tour Highlights */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                <Award className="mr-3 text-yellow-500" size={32} />
                Tour Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Photo Gallery */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">Photo Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tour.gallery.map((image, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
                    <Image
                      src={image}
                      alt={`${tour.title} gallery ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed Itinerary */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                <Calendar className="mr-3 text-yellow-500" size={32} />
                Detailed Itinerary
              </h2>
              <div className="space-y-6">
                {tour.itinerary.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                          {item.activity}
                        </h3>
                        <span className="text-yellow-600 dark:text-yellow-400 font-medium bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-full text-sm">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">What is Included & Excluded</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Inclusions */}
                <div>
                  <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={24} />
                    Included
                  </h3>
                  <ul className="space-y-3">
                    {tour.inclusions.map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Exclusions */}
                <div>
                  <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4 flex items-center">
                    <XCircle className="mr-2" size={24} />
                    Not Included
                  </h3>
                  <ul className="space-y-3">
                    {tour.exclusions.map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <XCircle className="text-red-500 flex-shrink-0" size={16} />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Customer Reviews */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
                  <Users className="mr-3 text-yellow-500" size={32} />
                  Customer Reviews
                </h2>
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-500 fill-current" size={24} />
                  <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">{tour.rating}</span>
                  <span className="text-gray-600 dark:text-gray-400">out of 5</span>
                </div>
              </div>
              <div className="space-y-6">
                {tour.reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">{review.name}</h4>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < review.rating ? "text-yellow-500 fill-current" : "text-gray-300 dark:text-gray-600"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Price & Booking Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                    ${tour.price}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">per person</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <Clock className="text-gray-500" size={18} />
                      <span className="text-gray-700 dark:text-gray-300">Duration</span>
                    </div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{tour.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <MapPin className="text-gray-500" size={18} />
                      <span className="text-gray-700 dark:text-gray-300">Category</span>
                    </div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{tour.category}</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-2">
                      <Star className="text-gray-500" size={18} />
                      <span className="text-gray-700 dark:text-gray-300">Rating</span>
                    </div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{tour.rating}/5</span>
                  </div>
                </div>
                
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-105 mb-4">
                  Book Now
                </button>
                
                <button className="w-full border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-bold py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center">
                  <Heart className="mr-2" size={18} />
                  Add to Wishlist
                </button>
              </div>

              {/* Contact Information */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-yellow-500" size={18} />
                    <a href={`tel:${tour.contactInfo.phone}`} className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 transition duration-300">
                      {tour.contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-yellow-500" size={18} />
                    <a href={`mailto:${tour.contactInfo.email}`} className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 transition duration-300">
                      {tour.contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;