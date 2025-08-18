"use client";
import Image from "next/image";
import React from "react";
import { MapPin } from "lucide-react";
import heroImage from "@/assets/banner/banner3.jpg";
import heroImage2 from "@/assets/banner/banner2.jpg";
import Link from "next/link";

// Dynamic Data
const heroData = {
  title: "About Singapore Tours",
  subtitle:
    "Discover the heart and soul of the Lion City with those who know it best.",
  image: { heroImage },
  fallback: "https://placehold.co/1200x800/000000/FFFFFF?text=Singapore",
};

const storyData = {
  title: "Our Story",
  paragraphs: [
    "From the futuristic glow of Marina Bay to the vibrant, heritage-rich streets of Chinatown, Singapore is a city of captivating contrasts. Its a dazzling metropolis where lush green sanctuaries coexist with architectural marvels.",
    "At Singapore Tours, we believe the best way to discover this incredible island is through the eyes of locals. We are a team of passionate guides dedicated to sharing the magic of our city, moving beyond the guidebooks to offer authentic, immersive journeys.",
    "Our mission is to connect you with the true heart and soul of Singapore, creating memories that will last a lifetime.",
  ],
  image:
    "https://images.unsplash.com/photo-1563278911-3b41d28393c6?q=80&w=1974&auto=format&fit=crop",
  fallback: "https://placehold.co/600x400/111827/FFFFFF?text=Merlion",
};

const featuresData = [
  {
    title: "Expert Local Guides",
    description:
      "Our guides are storytellers who know the hidden gems and fascinating stories behind every landmark.",
    icon: MapPin,
  },
  {
    title: "Tailor-Made Experiences",
    description:
      "Your trip, your rules. We craft personalized itineraries that match your unique interests, pace, and budget.",
    icon: () => (
      <svg
        className="h-10 w-10 text-emerald-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Seamless & Stress-Free",
    description:
      "We handle all the details, from transport to tickets. Your only job is to relax and soak in the experience.",
    icon: () => (
      <svg
        className="h-10 w-10 text-emerald-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.94 0l.06-.06L12 11l2.94-2.96a2.17 2.17 0 0 1 2.94 0v0c.82.82.82 2.13 0 3.08L12 14Z" />
      </svg>
    ),
  },
];

const teamData = [
  {
    name: "Alex Chen",
    role: "Founder & Lead Guide",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "Cultural Specialist",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    name: "Ben Tan",
    role: "Food & Adventure Expert",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1998&auto=format&fit=crop",
  },
  {
    name: "Isabelle Dubois",
    role: "Client Relations",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
  },
];

// Reusable Components
const SectionImageText = ({ image, fallback, title, paragraphs, reverse }) => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className={reverse ? "order-2 md:order-1" : "order-1 md:order-1"}>
          <Image
            src={heroImage2}
            alt={title}
            width={800}
            height={600}
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />
        </div>
        <div className={reverse ? "order-1 md:order-2" : "order-2 md:order-2"}>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {title}
          </h2>
          {paragraphs.map((p, idx) => (
            <p key={idx} className="text-black mb-4 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex justify-center mb-4">
      <Icon />
    </div>
    <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
    <p className="text-black">{description}</p>
  </div>
);

const TeamMember = ({ name, role, image }) => (
  <div className="text-center">
    <Image
      src={image}
      width={128}
      height={128}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-emerald-400"
    />
    <h4 className="text-xl font-semibold text-black">{name}</h4>
    <p className="text-black">{role}</p>
  </div>
);

export default function AboutPage() {
  return (
    <div className="text-black font-sans">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-10"></div>
        <Image
          src={heroImage}
          alt={heroData.title}
          width={500}
          height={500}
          className="object-cover h-full w-full"
          priority
        />
        <div className="absolute bg-gray-700/30 z-20 p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold  text-white mb-4 text-shadow-lg">
            {heroData.title}
          </h1>
          <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto">{heroData.subtitle}</p>
        </div>
      </div>

      {/* Story Section */}
      <SectionImageText {...storyData} />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Why Journey With Us?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            We strive to make your Singapore adventure nothing short of exceptional.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {featuresData.map((f, idx) => (
              <FeatureCard key={idx} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Meet Our Team</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            The passionate locals behind your unforgettable journey.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((t, idx) => (
              <TeamMember key={idx} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore the Lion City?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Lets craft your perfect Singaporean adventure together. Get in touch with us today!
          </p>
         <Link href={"/tours"}>
          <button className="bg-emerald-500 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-emerald-400 transition-colors duration-300 transform hover:scale-105">
            Book Your Tour
          </button>
         </Link>
        </div>
      </section>
    </div>
  );
}
