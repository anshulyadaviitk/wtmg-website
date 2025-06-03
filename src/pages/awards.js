import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { awards } from '@/content/awards';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Awards() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  const cardWidth = container.offsetWidth;

  // Track scroll position to update currentCardIndex
  const handleScroll = () => {
    const scrollPosition = container.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setCurrentCardIndex(newIndex);
  };

  container.addEventListener('scroll', handleScroll);

  // Autoplay scroll logic
  const scrollAmount = cardWidth;
  const interval = setInterval(() => {
    if (!isHovered) {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });

      const nearEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;
      if (nearEnd) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        }, 4000);
      }
    }
  }, 6000);

  return () => {
    container.removeEventListener('scroll', handleScroll);
    clearInterval(interval);
  };
}, [isHovered]);


  return (
    <Layout>
      <Head>
        <title>Awards & Recognition | Water Resources Group</title>
      </Head>

      <div className="container mx-auto px-4 py-12 space-y-20">
        <SectionTitle
          title="Awards & Recognitions"
          subtitle="Recognitions for our research contributions"
          align="center"
        />


{/*Faculty award section*/}        
<section className="relative">
  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
    Faculty Awards
  </h2>

  <div className="relative">
    {/* Left Arrow - Only show if multiple awards exist */}
    {awards.faculty.length > 1 && (
      <button
        onClick={() => {
          scrollRef.current.scrollBy({
            left: -scrollRef.current.offsetWidth,
            behavior: 'smooth'
          });
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all hover:scale-110 md:block hidden"
        aria-label="Previous awards"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    )}

    {/* Carousel Content */}
    <div
      ref={scrollRef}
      className="overflow-x-auto hide-scrollbar"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={(e) => {
        const touch = e.touches[0];
        setTouchStart(touch.clientX);
        setTouchEnd(touch.clientX);
      }}
      onTouchMove={(e) => {
        const touch = e.touches[0];
        setTouchEnd(touch.clientX);
      }}
      onTouchEnd={() => {
        if (touchStart - touchEnd > 50) {
          // Swipe left
          scrollRef.current.scrollBy({
            left: scrollRef.current.offsetWidth,
            behavior: 'smooth'
          });
        } else if (touchEnd - touchStart > 50) {
          // Swipe right
          scrollRef.current.scrollBy({
            left: -scrollRef.current.offsetWidth,
            behavior: 'smooth'
          });
        }
      }}
    >
      <div className="flex space-x-6 snap-x snap-mandatory px-1">
        {awards.faculty.map((award) => (
          <motion.div
            key={award.id}
            whileHover={{ scale: 1.03 }}
            className="w-[90vw] flex-shrink-0 bg-white rounded-xl shadow-md snap-center overflow-hidden transition-transform duration-300 md:w-[420px]"
          >
            {/* Image Gallery Section */}
            <div className="relative w-full h-[500px] bg-gray-50">
              {Array.isArray(award.image) ? (
                <>
                  {/* Multiple Images - Carousel */}
                  <div className="relative h-full w-full overflow-hidden">
                    {award.image.map((img, index) => (
                      <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <Image
                          src={img}
                          alt={`${award.title} - Image ${index + 1}`}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {award.image.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  {/* Navigation Arrows */}
                  {award.image.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(prev => 
                            prev === 0 ? award.image.length - 1 : prev - 1
                          );
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
                        aria-label="Previous image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(prev => 
                            prev === award.image.length - 1 ? 0 : prev + 1
                          );
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
                        aria-label="Next image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </>
              ) : (
                // Single Image
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-contain p-4"
                />
              )}
            </div>

            {/* Award Details */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-blue-700">{award.title}</h3>
              <p className="text-sm text-gray-600">
                {award.organization} • {award.year}
              </p>
              <p className="text-sm text-gray-700 mt-2">{award.description}</p>
              {award.link && (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-600 hover:underline text-sm"
                >
                  More details
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Right Arrow - Only show if multiple awards exist */}
    {awards.faculty.length > 1 && (
      <button
        onClick={() => {
          scrollRef.current.scrollBy({
            left: scrollRef.current.offsetWidth,
            behavior: 'smooth'
          });
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all hover:scale-110 md:block hidden"
        aria-label="Next awards"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    )}

    {/* Mobile dots indicator for cards */}
    {awards.faculty.length > 1 && (
      <div className="md:hidden flex justify-center space-x-2 mt-4">
        {awards.faculty.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              scrollRef.current.scrollTo({
                left: index * scrollRef.current.offsetWidth,
                behavior: 'smooth'
              });
            }}
            className={`w-2 h-2 rounded-full transition-all ${currentCardIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    )}
  </div>
</section>

{/* Guest Editor Section */}
<section className="mt-16">
  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
    Guest Editor Roles
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {awards.guestEditors.map((editorship) => (
      <motion.div
        key={`editorship-${editorship.id}`}
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg"
      >
        <div className="p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-blue-700">
                Special Issue: "{editorship.title}"
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium">{editorship.journal}</span>
                {editorship.impactFactor && (
                  <span> (IF: {editorship.impactFactor})</span>
                )}
              </p>
              {editorship.link && (
                <a
                  href={editorship.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 text-blue-600 hover:underline text-sm"
                >
                  View Special Issue
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>
        {/* Student Achievements */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
            Student Achievements
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recipient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Award</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {awards.students.map((award) => (
                  <tr key={award.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {award.recipient}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {award.title}
                      {award.paperTitle && (
                        <p className="text-xs text-gray-500 mt-1">{award.paperTitle}</p>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {award.year}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Layout>
  );
}
