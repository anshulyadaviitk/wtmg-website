'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

export default function UpdateSection({ updates }) {
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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Recent Highlights
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most recent achievements and important announcements
          </p>
        </div>

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
  el: '#research-pagination',
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

          {updates.map((update) => (
            <SwiperSlide key={update.id}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{ height: '560px' }}>
                {/* Image with fixed aspect ratio */}
             <div className="relative aspect-video w-full overflow-hidden flex-shrink-0 bg-gray-100">
  <Image
    src={update.image}
    alt={update.title}
    fill
    className="object-contain transition-transform duration-500 group-hover:scale-105"
    priority
  />
</div>


                {/* Content update with constrained height and scroll */}
                <div className="p-6 flex flex-col flex-grow overflow-hidden">
                  <div className="flex-grow overflow-y-auto">
                    <div className="flex items-center mb-3">
                      {update.icon && (
                        <div className="p-2 rounded-lg bg-blue-50 mr-3">
                          <update.icon className="h-5 w-5 text-blue-600" />
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                        {update.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {update.description}
                    </p>
                    {update.projects?.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          Key Projects:
                        </h4>
                        <ul className="space-y-2 max-h-[120px] overflow-y-auto pr-2">
                          {update.projects.slice(0, 3).map((p, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="flex-shrink-0 mt-1 mr-2">
                                <svg
                                  className="h-4 w-4 text-blue-500"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </span>
                              <span className="text-sm text-gray-700 line-clamp-2">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Fixed position link at bottom */}
                  {update.link && (
                      <Link
                        href={update.link}
                        className="mt-4 text-blue-600 hover:underline text-sm font-medium inline-flex items-center"
                      >
                        Learn more <span className="ml-1">→</span>
                      </Link>
                    )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Rest of your existing code remains the same */}
        <div id="research-pagination" className="custom-pagination flex justify-center gap-2 mt-6" />

{/* Navigation Arrows */}
<button
  ref={prevRef}
  className="custom-prev absolute left-0 top-[35%] -translate-y-1/2 p-2 sm:p-3 rounded-full hover:bg-gray-50 transition-colors z-10"
>
  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
</button>

<button
  ref={nextRef}
  className="custom-next absolute right-0 top-[35%] -translate-y-1/2 p-2 sm:p-3 rounded-full hover:bg-gray-50 transition-colors z-10"
>
  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>

          </div>


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
  );
}