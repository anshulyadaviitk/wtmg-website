// components/sections/AwardsSection.js

import { awards } from '@/content/awards';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function AwardsSection() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [imageIndices, setImageIndices] = useState({});

  useEffect(() => {
    const initialIndices = {};
    awards.faculty.forEach((award) => {
      if (Array.isArray(award.image)) {
        initialIndices[award.id] = 0;
      }
    });
    setImageIndices(initialIndices);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = container.offsetWidth;
      const scrollPosition = container.scrollLeft;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setCurrentCardIndex(newIndex);
    };

    container.addEventListener('scroll', handleScroll);

    const interval = setInterval(() => {
      if (!isHovered && container) {
        const nearEnd =
          container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;

        if (nearEnd) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
          setCurrentCardIndex(0);
        } else {
          container.scrollBy({
            left: container.offsetWidth,
            behavior: 'smooth',
          });
        }
      }
    }, 6000);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [isHovered]);

  const handleImageIndexChange = (awardId, newIndex) => {
    setImageIndices((prev) => ({
      ...prev,
      [awardId]: newIndex,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-20">
      <SectionTitle
        title="Awards & Recognitions"
        subtitle="Recognitions for research contributions"
        align="center"
      />
        {/* Faculty Awards */}
        <section className="relative">

          <div className="relative">
            {awards.faculty.length > 1 && (
              <button
                onClick={() => {
                  scrollRef.current.scrollBy({
                    left: -scrollRef.current.offsetWidth,
                    behavior: 'smooth',
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
                  scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: 'smooth' });
                } else if (touchEnd - touchStart > 50) {
                  scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: 'smooth' });
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
                    <div className="relative w-full h-[500px] bg-gray-50">
                      {Array.isArray(award.image) ? (
                        <>
                          <Image
                            src={award.image[imageIndices[award.id]]}
                            alt={award.title}
                            fill
                            className="object-contain p-4"
                          />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleImageIndexChange(
                                award.id,
                                imageIndices[award.id] === 0 ? award.image.length - 1 : imageIndices[award.id] - 1
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
                              handleImageIndexChange(
                                award.id,
                                imageIndices[award.id] === award.image.length - 1 ? 0 : imageIndices[award.id] + 1
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
                      ) : (
                        <Image src={award.image} alt={award.title} fill className="object-contain p-4" priority />
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-blue-700">{award.title}</h3>
                      <p className="text-sm text-gray-600">{award.organization} • {award.year}</p>
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

            {awards.faculty.length > 1 && (
              <button
                onClick={() => {
                  scrollRef.current.scrollBy({
                    left: scrollRef.current.offsetWidth,
                    behavior: 'smooth',
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

            {awards.faculty.length > 1 && (
              <div className="md:hidden flex justify-center space-x-2 mt-4">
                {awards.faculty.map((_, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      scrollRef.current.scrollTo({
                        left: index * scrollRef.current.offsetWidth,
                        behavior: 'smooth',
                      })
                    }
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
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Editorial Roles</h2>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-blue-700">Special Issue: "{editorship.title}"</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">{editorship.journal}</span>
                        {editorship.impactFactor && <span> (IF: {editorship.impactFactor})</span>}
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


      {/* Include Faculty Awards, Guest Editors, Student Achievements sections here */}
      {/* You can also split them into 3 components if needed */}
    </div>
  );
}
