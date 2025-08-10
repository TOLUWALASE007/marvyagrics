import internImage from '../assets/intern(1).jpeg';

const Interns = () => {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-[#0D3333]">Our Interns</h1>
        
        {/* Interns Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#019A32]">Current Interns</h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Intern Image */}
            <div className="flex-shrink-0">
              <img 
                src={internImage} 
                alt="Ebomah Divine Victor - Graduate Agricultural Engineer"
                className="w-64 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Description */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3 text-[#0D3333]">Ebomah Divine Victor</h3>
              <p className="text-sm text-[#019A32] font-semibold mb-4">Graduate Agricultural Engineer</p>
              <p className="text-lg leading-relaxed text-[#0D3333]">
                Ebomah Divine Victor is a Graduate Agricultural Engineer at Marvy Agric Solutions passionate about merging sustainability, 
                biotechnology, and autonomous systems to solve real-world challenges. With experience in greenhouse design, hydroponics, 
                and environmental management, he combines CAD expertise with growing skills in machine learning and AI to drive smarter 
                resource use and precision farming. A member of ASABE with certifications in effective communication and problem-solving. 
                He envisions a future where technology and ecological stewardship create thriving, self-sustaining systems.
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Interns;
