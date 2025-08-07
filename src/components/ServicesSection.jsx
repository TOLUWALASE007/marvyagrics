import ServiceCard from './ServiceCard';
import ourservicesVideo from '../assets/ourservices_video.mp4';

const ServicesSection = () => {
  const services = [
    {
      title: "Marvy Agric Solutions (MAgris)",
      description: "Farm setup, management, crop production and comprehensive agricultural solutions.",
      icon: "🌱"
    },
    {
      title: "MarvyEngrs (ME)",
      description: "Engineering solutions with emphasis on Controlled Environment Agriculture (Greenhouse technology).",
      icon: "🏗️"
    },
    {
      title: "MarvyMetalWorks (MMW)",
      description: "Metal workshop for fabrication of agricultural equipment and structures.",
      icon: "⚙️"
    }
  ];

  return (
    <section className="relative py-16 px-6 text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={ourservicesVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;