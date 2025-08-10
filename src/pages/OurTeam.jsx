import { Link } from 'react-router-dom';
import portraitImage from '../assets/portraitimage.jpeg';

const OurTeam = () => {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-[#0D3333]">Our Team</h1>
        
        {/* Managing Director Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#019A32]">Leadership</h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Portrait Image */}
            <div className="flex-shrink-0">
              <img 
                src={portraitImage} 
                alt="Engr. Samuel Oyeniyi - Managing Director"
                className="w-64 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Description */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3 text-[#0D3333]">Engr. Samuel Oyeniyi</h3>
              <p className="text-sm text-[#019A32] font-semibold mb-4">Managing Director</p>
              <p className="text-lg leading-relaxed text-[#0D3333]">
                Engr. Samuel Oyeniyi, MD of Marvy Agric Solutions, is an innovative leader bridging engineering and agriculture. 
                He pioneers hydroponics, precision farming and youth empowerment - training 100+ students and driving Nigeria's 
                agri-innovation for food security and economic growth.
              </p>
            </div>
          </div>
        </div>

        {/* Interns Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#019A32]">Interns</h2>
          
          <div className="text-center mb-8">
            <p className="text-lg leading-relaxed text-[#0D3333] mb-6">
              At Marvy Agric Solutions, we believe in nurturing the next generation of agricultural innovators. 
              Our internship program offers hands-on experience in sustainable farming, engineering solutions, 
              and agribusiness development. We welcome passionate students and recent graduates who are eager 
              to learn and contribute to the future of agriculture.
            </p>
            <Link 
              to="/interns" 
              className="inline-block bg-[#019A32] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0D3333] transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Meet Our Interns
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;