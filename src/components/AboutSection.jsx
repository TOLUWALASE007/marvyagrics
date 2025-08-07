import video from '../assets/aboutsection_video.mp4';

const AboutSection = () => {
  return (
    <section className="py-16 px-6 bg-white text-[#0D3333]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6 text-lg leading-relaxed">
              Marvy Agric Solutions is an agricultural company established in Awowo Town, Abeokuta, Nigeria. 
              It specializes in general farming & agribusiness, agricultural training/consultancy including 
              design and implementation of agribusiness ventures, as well as market research and market linkages.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              The firm also supplies a variety of agricultural technologies. Marvy Agric Solutions has a team 
              of dedicated professionals including horticulturists/agronomists, agricultural economists, soil 
              scientists, natural resource management experts, agribusiness and enterprise development professionals, 
              food scientists, business developers, and agricultural engineers.
            </p>
            <p className="text-lg leading-relaxed">
              All these team members are vastly experienced in their respective fields, ensuring that we deliver 
              comprehensive and innovative agricultural solutions to our clients.
            </p>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              className="w-full h-80 md:h-96 lg:h-[500px] object-cover"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;