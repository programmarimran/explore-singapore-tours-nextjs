import React from 'react';
import { Puzzle, Camera, FileText, Award } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Puzzle,
      title: "Ultimate flexibility",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Camera,
      title: "Memorable experiences",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: FileText,
      title: "Quality at our core",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Award,
      title: "Award-winning support",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Icon Container */}
              <div className={`${feature.bgColor} p-3 rounded-lg flex-shrink-0`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              
              {/* Text */}
              <div className="flex-1">
                <h3 className="text-gray-900 font-medium text-lg leading-tight">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;