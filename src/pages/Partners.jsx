import olabisiOnabanjoLogo from '../assets/olabisionabanjounilogo.jpeg';
import soillessFarmLogo from '../assets/soillessfarmlogo.jpeg';
import funaabLogo from '../assets/funaab.jpeg';
import partnersBackground from '../assets/partnerspages.jpeg';

const Partners = () => {
  const partners = [
    {
      name: "Olabisi Onabanjo University",
      description: "Olabisi Onabanjo University (OOU) is a state-owned Nigerian university founded in 1982. With campuses in Ago-Iwoye (main), Aiyetoro, Ibogun & Shagamu, it offers affordable education across faculties including Agriculture, Engineering & Medicine. Students ('Great OOUITES') engage via campus media platforms.",
      website: "https://web.oouagoiwoye.edu.ng/",
      logo: olabisiOnabanjoLogo,
      alt: "Olabisi Onabanjo University Logo"
    },
    {
      name: "Soilless Farm Lab",
      description: "Soilless Farm Lab pioneers tech-driven agriculture using greenhouses & modern irrigation for year-round food production. We develop sustainable farming tools that maximize yields while protecting the environment, focusing on zero postharvest loss.",
      website: "https://sfarmlab.com/",
      logo: soillessFarmLogo,
      alt: "Soilless Farm Lab Logo"
    },
    {
      name: "Federal University of Agriculture, Abeokuta (FUNAAB)",
      description: "FUNAAB, established in 1988 in Abeokuta, is one of Nigeria's three specialized agriculture universities. Originating from FUTAB (1983), it moved to its permanent 10,000-hectare campus in 1997. With 9 colleges spanning agriculture, sciences, engineering and management, it's a leader in agricultural education and research.",
      website: "https://funaab.edu.ng/",
      logo: funaabLogo,
      alt: "FUNAAB Logo"
    }
  ];

  return (
    <div 
      className="py-16 px-6 relative min-h-screen"
      style={{
        backgroundImage: `url(${partnersBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <h1 className="text-4xl font-bold mb-12 text-center text-white">Our Partners</h1>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Partner Logo */}
                <div className="flex-shrink-0">
                  <img 
                    src={partner.logo} 
                    alt={partner.alt}
                    className="w-48 h-32 object-contain rounded-lg shadow-md"
                  />
                </div>
                
                {/* Partner Information */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-[#0D3333]">{partner.name}</h3>
                  <p className="text-lg leading-relaxed text-[#0D3333] mb-6">
                    {partner.description}
                  </p>
                  
                  {/* Website Link */}
                  <a 
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#019A32] text-white font-semibold rounded-lg hover:bg-[#0D3333] transition-colors duration-300"
                  >
                    Visit Website
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Partnership Statement */}
        <div className="mt-12 bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#019A32]">Strategic Partnerships</h2>
          <p className="text-lg text-[#0D3333] leading-relaxed">
            We are proud to collaborate with leading educational institutions and agricultural innovators 
            to advance sustainable farming practices and empower the next generation of agricultural leaders. 
            These partnerships enable us to deliver cutting-edge solutions and comprehensive training programs 
            that drive agricultural transformation in Nigeria and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners; 