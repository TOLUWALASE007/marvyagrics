import { Link } from 'react-router-dom';
import video from '../assets/herosection_video.mp4';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Innovating Agriculture for a Sustainable Future
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Providing comprehensive agricultural solutions that transform farming practices and increase productivity.
        </p>
        <Link to="/services">
          <button className="bg-[#019A32] hover:bg-[#017a28] text-white font-bold py-4 px-8 rounded-lg transition text-lg">
            Explore Our Services
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;