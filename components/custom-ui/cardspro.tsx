import React from "react";
import Card from "../card";


const CardList = () => {
  const factors = [
    {
         icon: "FaRocket",
          title: "Unique Factor 1" 
        },
    { 
        icon: "FaUsers", 
        title: "Unique Factor 2"
    
    },
    { icon: "FaShieldAlt",
         title: "Unique Factor 3" 
        },
    { 
        icon: "FaLightbulb",
         title: "Unique Factor 4" 
        },
  ];

  return (

   <>
  <section className="bg-gray-900 py-12 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
        What Makes Us Unique
      </h2>

      <div className="flex gap-4 justify-center mt-6">
        {factors.map((factor, index) => (
          <Card key={index} 
          icon={factor.icon} 
          title={factor.title} />
        ))}
      </div>
    </div>
  </section>
</>
  );
};

export default CardList;

