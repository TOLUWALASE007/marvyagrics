import portraitImage from '../assets/portraitimage.jpeg';

const Careers = () => {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-[#0D3333]">Careers</h1>
        
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
        
        {/* Career Opportunities Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#019A32]">Career Opportunities</h2>
          <p className="text-lg text-center text-[#0D3333]">
            This page will list career opportunities at Marvy Agric Solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;