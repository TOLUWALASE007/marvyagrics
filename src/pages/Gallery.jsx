import { useState } from 'react';

// Import gallery images
import gallery3 from '../assets/gallery/gallery(3).jpeg';
import gallery8 from '../assets/gallery/gallery(8).jpeg';
import gallery9 from '../assets/gallery/gallery(9).jpeg';
import gallery10 from '../assets/gallery/gallery(10).jpeg';
import gallery11 from '../assets/gallery/gallery(11).jpeg';
import gallery12 from '../assets/gallery/gallery(12).jpeg';
import gallery14 from '../assets/gallery/gallery(14).jpeg';
import gallery15 from '../assets/gallery/gallery(15).jpeg';
import gallery16 from '../assets/gallery/gallery(16).jpeg';
import gallery17 from '../assets/gallery/gallery(17).jpeg';
import gallery19 from '../assets/gallery/gallery(19).jpeg';
import gallery20 from '../assets/gallery/gallery(20).jpeg';
import gallery21 from '../assets/gallery/gallery(21).jpeg';
import gallery22 from '../assets/gallery/gallery(22).jpeg';
import gallery23 from '../assets/gallery/gallery(23).jpeg';
import gallery24 from '../assets/gallery/gallery(24).jpeg';
import gallery25 from '../assets/gallery/gallery(25).jpeg';
import gallery26 from '../assets/gallery/gallery(26).jpeg';
import gallery27 from '../assets/gallery/gallery(27).jpeg';
import gallery28 from '../assets/gallery/gallery(28).jpeg';
import gallery29 from '../assets/gallery/gallery(29).jpeg';
import gallery30 from '../assets/gallery/gallery(30).jpeg';
import gallery31 from '../assets/gallery/gallery(31).jpeg';
import gallery32 from '../assets/gallery/gallery(32).jpeg';
import gallery33 from '../assets/gallery/gallery(33).jpeg';

// Import gallery videos
import gallery1Video from '../assets/gallery/gallery(1).mp4';
import gallery2Video from '../assets/gallery/gallery(2).mp4';
import gallery4Video from '../assets/gallery/gallery(4).mp4';
import gallery5Video from '../assets/gallery/gallery(5).mp4';
import gallery6Video from '../assets/gallery/gallery(6).mp4';
import gallery7Video from '../assets/gallery/gallery(7).mp4';
import gallery13Video from '../assets/gallery/gallery(13).mp4';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery items with different sizes for collage effect (images and videos)
  const galleryItems = [
    { src: gallery3, alt: "Gallery Image 3", size: "large", type: "image" },
    { src: gallery1Video, alt: "Gallery Video 1", size: "large", type: "video" },
    { src: gallery8, alt: "Gallery Image 8", size: "medium", type: "image" },
    { src: gallery9, alt: "Gallery Image 9", size: "small", type: "image" },
    { src: gallery10, alt: "Gallery Image 10", size: "medium", type: "image" },
    { src: gallery2Video, alt: "Gallery Video 2", size: "large", type: "video" },
    { src: gallery11, alt: "Gallery Image 11", size: "small", type: "image" },
    { src: gallery12, alt: "Gallery Image 12", size: "large", type: "image" },
    { src: gallery14, alt: "Gallery Image 14", size: "medium", type: "image" },
    { src: gallery4Video, alt: "Gallery Video 4", size: "medium", type: "video" },
    { src: gallery15, alt: "Gallery Image 15", size: "small", type: "image" },
    { src: gallery16, alt: "Gallery Image 16", size: "medium", type: "image" },
    { src: gallery17, alt: "Gallery Image 17", size: "large", type: "image" },
    { src: gallery5Video, alt: "Gallery Video 5", size: "small", type: "video" },
    { src: gallery19, alt: "Gallery Image 19", size: "small", type: "image" },
    { src: gallery20, alt: "Gallery Image 20", size: "medium", type: "image" },
    { src: gallery21, alt: "Gallery Image 21", size: "small", type: "image" },
    { src: gallery6Video, alt: "Gallery Video 6", size: "large", type: "video" },
    { src: gallery22, alt: "Gallery Image 22", size: "large", type: "image" },
    { src: gallery23, alt: "Gallery Image 23", size: "medium", type: "image" },
    { src: gallery24, alt: "Gallery Image 24", size: "small", type: "image" },
    { src: gallery25, alt: "Gallery Image 25", size: "medium", type: "image" },
    { src: gallery7Video, alt: "Gallery Video 7", size: "medium", type: "video" },
    { src: gallery26, alt: "Gallery Image 26", size: "small", type: "image" },
    { src: gallery27, alt: "Gallery Image 27", size: "large", type: "image" },
    { src: gallery28, alt: "Gallery Image 28", size: "medium", type: "image" },
    { src: gallery13Video, alt: "Gallery Video 13", size: "large", type: "video" },
    { src: gallery29, alt: "Gallery Image 29", size: "small", type: "image" },
    { src: gallery30, alt: "Gallery Image 30", size: "medium", type: "image" },
    { src: gallery31, alt: "Gallery Image 31", size: "large", type: "image" },
    { src: gallery32, alt: "Gallery Image 32", size: "small", type: "image" },
    { src: gallery33, alt: "Gallery Image 33", size: "medium", type: "image" },
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2 h-48 md:h-64 lg:h-96';
      case 'medium':
        return 'col-span-1 row-span-1 h-32 md:h-48 lg:h-64';
      case 'small':
        return 'col-span-1 row-span-1 h-24 md:h-32 lg:h-48';
      default:
        return 'col-span-1 row-span-1 h-32 md:h-48 lg:h-64';
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-[#0D3333]">Gallery</h1>
        
        <p className="text-lg text-center text-[#0D3333] mb-12 max-w-3xl mx-auto">
          Explore our journey through agriculture, innovation, and community impact. 
          These moments capture the essence of Marvy Agric Solutions' commitment to 
          transforming agricultural practices and empowering communities.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-auto">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`${getSizeClasses(item.size)} group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              onClick={() => openModal(item)}
            >
              <div className="relative w-full h-full">
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                
                {/* Video Play Icon Overlay for Videos */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-3 group-hover:bg-opacity-75 transition-all duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.type === 'video' ? (
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    ) : (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged view */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full">
              {selectedImage.type === 'video' ? (
                <video
                  src={selectedImage.src}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              ) : (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              )}
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;