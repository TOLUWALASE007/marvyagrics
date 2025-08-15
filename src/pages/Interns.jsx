import internImage1 from '../assets/intern(1).jpg';
import internImage2 from '../assets/intern(2).jpeg';
import internImage3 from '../assets/intern(3).jpeg';
import internImage4 from '../assets/intern(4).jpg';

const Interns = () => {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-[#0D3333]">Our Interns</h1>
        
        {/* First Intern - Ebomah Divine Victor */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#019A32]">Current Interns</h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Intern Image */}
            <div className="flex-shrink-0">
              <img 
                src={internImage1} 
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

        {/* Second Intern - Adesina Jude Ademola */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Intern Image */}
            <div className="flex-shrink-0">
              <img 
                src={internImage2} 
                alt="Adesina Jude Ademola - Undergraduate Agricultural Engineering Student"
                className="w-64 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Description */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3 text-[#0D3333]">Adesina Jude Ademola</h3>
              <p className="text-sm text-[#019A32] font-semibold mb-4">Undergraduate Agricultural Engineering Student</p>
              <p className="text-lg leading-relaxed text-[#0D3333]">
                Adesina Jude Ademola is an undergraduate student of Agricultural Engineering at the University of Ibadan, passionate about applying mechanical expertise to improve agricultural productivity. With hands-on experience from his internship at the International Institute of Tropical Agriculture, he has developed skills in machinery repair, maintenance, and diagnostics. Adept in welding, fabrication, and safety protocols, he has also contributed to departmental projects such as mini tractor maintenance and preventive servicing of equipment. A member of the Nigerian Society of Black Engineers (Student Chapter), he actively participates in initiatives that promote sustainable and efficient farming practices. He envisions a career where innovative engineering solutions drive progress in agricultural technology and food security.
              </p>
            </div>
          </div>
        </div>

        {/* Third Intern - Wendeh Teryima */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Intern Image */}
            <div className="flex-shrink-0">
              <img 
                src={internImage3} 
                alt="Wendeh Teryima - Undergraduate Student"
                className="w-64 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Description */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3 text-[#0D3333]">Wendeh Teryima</h3>
              <p className="text-sm text-[#019A32] font-semibold mb-4">Undergraduate Student</p>
              <p className="text-lg leading-relaxed text-[#0D3333]">
                I'm Wendeh Teryima, a dedicated undergraduate student at Joseph Sarwuan Tarka University, Makurdi, Benue State. My academic pursuits are complemented by a keen interest in agriculture and hydroponics. I'm passionate about exploring innovative approaches to sustainable food production and looking forward to contributing to the field.
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Intern - Comr. Atoo Terna Simon */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Intern Image */}
            <div className="flex-shrink-0">
              <img 
                src={internImage4} 
                alt="Comr. Atoo Terna Simon - Undergraduate Agricultural and Bio-systems Engineering Student"
                className="w-64 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Description */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3 text-[#0D3333]">Comr. Atoo Terna Simon</h3>
              <p className="text-sm text-[#019A32] font-semibold mb-4">Undergraduate Agricultural and Bio-systems Engineering Student</p>
              <p className="text-lg leading-relaxed text-[#0D3333]">
                An Undergraduate, Agricultural and Bio-systems Engineering at Joseph Sarwuan Tarka University, Makurdi. Comr. Atoo T. Simon is a youth activist driven by the passion to change the narratives among contemporary youths about Agriculture being a herculean commitment to a sustainable and modern business venture. He's a member of the Nigerian Institution of Agricultural Engineers Students' Body (NIAESB) JOSTUM Chapter, currently serving as the Chapter President. His vision is aimed at solving world-farming challenges by leveraging technology to achieve food security on a global scale. He has a growing knowledge on greenhouse design and installation, leadership, entrepreneurship/business and environmental control.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Interns;
