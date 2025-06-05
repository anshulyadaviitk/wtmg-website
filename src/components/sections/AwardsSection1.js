'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';


export default function AwardsSection1({ 
  awards = { faculty: [], guestEditors: [] }, 
  showEditorial = true 
}) {
  const swiperRef = useRef(null);
    const prevRef = useRef(null);
const nextRef = useRef(null);

useEffect(() => {
  if (swiperRef.current && prevRef.current && nextRef.current) {
    swiperRef.current.params.navigation.prevEl = prevRef.current;
    swiperRef.current.params.navigation.nextEl = nextRef.current;

    // Re-init navigation
    swiperRef.current.navigation.destroy();
    swiperRef.current.navigation.init();
    swiperRef.current.navigation.update();
  }
}, []);


  return (
    <>
      <section className="py-20 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100">


        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
               {/* <div className="relative mx-auto w-full max-w-md h-24 sm:h-32">
      <Image
        src="/images/awards/awardpic1.png"
        alt="Awards and Recognitions"
        layout="fill"
        objectFit="contain"
        priority
      />
    </div> */}
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Awards & Recognitions
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Recognitions for research contributions 
            </p>
          </div>

          {/* Swiper & Arrows inside same relative container */}
          <div className="relative">
            <Swiper
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  modules={[Pagination, Autoplay, Navigation]}
  navigation={false} // Prevent premature init
          spaceBetween={32}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            // ✅ Attach refs before Swiper initializes
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        pagination={{
  clickable: true,
  el: '#awards-pagination',
  bulletClass: 'custom-bullet',
  bulletActiveClass: 'custom-bullet-active',
}}

          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 28 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className="pb-16"
            >
              {awards?.faculty?.map((award) => (
                <SwiperSlide key={award.id}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{ height: '560px' }}>
                    {/* Image */}
                    <div className="relative w-full h-[350px] bg-gray-50">
                      <div className="relative w-full h-[350px] bg-gray-50">
  {Array.isArray(award.image) ? (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation
      className="h-full w-full"
    >
      {award.image.map((imgSrc, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[350px]">
  {/* Background gradient */}
  
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent z-0" />

  {/* Image in front */}
  <Image
    src={imgSrc}
    alt={`${award.title} ${index + 1}`}
    fill
    className="object-contain z-10 relative"
  />
</div>

        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    
  <div className="relative w-full h-[350px]">
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent z-0" />
  <Image
    src={award.image}
    alt={award.title}
    fill
    className="object-contain z-10 relative"
  />
</div>

  )}
</div>

                    </div>

                    {/* Text Content */}
                    <div className="p-6 flex flex-col flex-grow overflow-hidden">
                      <div className="flex-grow overflow-y-auto">
                        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 mb-3">
                          {award.title}
                        </h3>
                        <p className="text-sm text-gray-800 font-medium">
                          {award.organization}
                          <span className="mx-2 text-gray-500">•</span>
                          <span className="text-gray-600">{award.year}</span>
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          {award.description}
                        </p>

                         <p className="text-sm text-gray-700 mt-4">
                          {award.link && (
            <Link
              href={award.link}
              target="_blank"
              className="px-3 py-1 bg-gray-50 text-gray-600 rounded-md text-sm hover:bg-gray-100 transition-colors"
            >
              View
            </Link>)}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          {/* Navigation Arrows */}
<button
  ref={prevRef}
  className="custom-prev absolute left-0 top-[35%] -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors z-10"
>

  <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
</button>

<button
  ref={nextRef}
  className="custom-next absolute right-0 top-[35%] -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors z-10"
>
  <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>

          </div>

          {/* Pagination Dots */}
          <div id="awards-pagination" className="custom-pagination flex justify-center gap-2 mt-6" />


          {/* Custom Bullet Styling */}
          <style jsx global>{`
            .custom-bullet {
              background-color: #e5e7eb;
              width: 10px;
              height: 10px;
              border-radius: 9999px;
              display: inline-block;
              margin: 0 6px;
              opacity: 1;
              transition: all 0.3s ease;
            }
            .custom-bullet-active {
              background-color: #2563eb;
              width: 24px;
            }
          `}</style>
        </div>
      </section>

      {/* Editorial Roles Section - shown only if enabled */}
      {showEditorial && (
        <section className="mt-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
            Editorial Roles
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
                      {/* Optional icon can go here */}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-blue-700">
                        Special Issue: &quot;{editorship.title}&quot;
                      </h3>
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
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
