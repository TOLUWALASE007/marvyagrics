const ServiceCard = ({ service }) => {
  return (
    <div className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 text-center cursor-pointer overflow-hidden">
      {/* Hover background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      <div className="absolute inset-[2px] bg-white/90 backdrop-blur-sm rounded-xl -z-5"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
        <h3 className="text-xl font-bold mb-4 text-[#019A32] group-hover:text-[#0D3333] transition-colors duration-300">{service.title}</h3>
        <p className="text-[#0D3333] group-hover:text-[#019A32] transition-colors duration-300 leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;