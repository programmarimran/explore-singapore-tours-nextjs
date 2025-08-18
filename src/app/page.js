import Banner from "@/components/home/banner/Banner";
import FeaturesSection from "@/components/home/featuresSection/FeaturesSection";
import PopularTour from "@/components/home/popularTourSection/PopularTour";
import HelpYouButton from "@/components/shared/HelpYouButton";

export default function Home() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section className=" max-w-7xl mx-auto">
         <div className=" pt-8">
          <FeaturesSection />
        </div>
        <div className=" pt-8">
          <PopularTour />
        </div>
       
      </section>

      <HelpYouButton />

      {/* CSS Animations */}
    </div>
  );
}
