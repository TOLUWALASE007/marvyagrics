import ServiceCard from '../components/ServiceCard';
import magricImage from '../assets/magric.jpeg';
import mengrsImage from '../assets/mengrs.jpeg';
import marvymetalworksImage from '../assets/marvymetalworks.jpeg';

const Services = () => {
  const detailedServices = [
    {
      title: "Marvy Agric Solutions (MAgris)",
      description: "Comprehensive agricultural solutions including farm setup, management, and crop production. We provide end-to-end services to ensure your agricultural venture is successful from the ground up.",
      features: [
        "Farm setup and design",
        "Crop production management",
        "Soil analysis and improvement",
        "Irrigation system design",
        "Post-harvest handling"
      ],
      icon: magricImage
    },
    {
      title: "MarvyEngrs (ME)",
      description: "Specialized engineering solutions with emphasis on Controlled Environment Agriculture (Greenhouse technology). Our team designs and implements advanced agricultural structures.",
      features: [
        "Greenhouse design and construction",
        "Climate control systems",
        "Hydroponic and aeroponic systems",
        "Energy-efficient solutions",
        "Automation integration"
      ],
      icon: mengrsImage
    },
    {
      title: "MarvyMetalWorks (MMW)",
      description: "Our state-of-the-art metal workshop provides fabrication services for various agricultural needs, from equipment to structural components.",
      features: [
        "Custom agricultural equipment",
        "Structural fabrication",
        "Maintenance and repairs",
        "Precision metal work",
        "Durable and weather-resistant products"
      ],
      icon: marvymetalworksImage
    }
  ];

  return (
    <div className="py-16 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-[#0D3333]">Our Comprehensive Services</h1>
        <div className="space-y-16">
          {detailedServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/6 flex justify-center">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-32 h-36 md:w-48 md:h-56 lg:w-56 lg:h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-5/6">
                  <h2 className="text-2xl font-bold mb-4 text-[#019A32]">{service.title}</h2>
                  <p className="mb-6 text-lg">{service.description}</p>
                  <h3 className="text-xl font-bold mb-3">Key Features:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#019A32] mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;