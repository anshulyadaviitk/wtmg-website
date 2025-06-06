'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function UpdateSection({ updates }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (!updates || updates.length === 0) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Recent Highlights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most recent achievements and important announcements
          </p>
        </div>

        <div className="relative">
          {/* Custom Arrows with responsive background */}
          <button
            ref={prevRef}
            aria-label="Previous Slide"
            className={`
              group absolute left-0 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 flex items-center justify-center
              transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400
              bg-transparent text-gray-700
              sm:bg-white sm:text-gray-700 sm:shadow-lg sm:hover:bg-gray-100 sm:rounded-full
            `}
            type="button"
            style={{ touchAction: 'manipulation' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            ref={nextRef}
            aria-label="Next Slide"
            className={`
              group absolute right-0 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 flex items-center justify-center
              transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400
              bg-transparent text-gray-700
              sm:bg-white sm:text-gray-700 sm:shadow-lg sm:hover:bg-gray-100 sm:rounded-full
            `}
            type="button"
            style={{ touchAction: 'manipulation' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={swiper => {
              if (typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            pagination={{ clickable: true }}
            loop
            className="!overflow-visible"
          >
            {updates.map((update, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col h-[520px]">
                  {update.image && (
                    <div className="relative w-full h-64">
                      <Image
                        src={update.image}
                        alt={update.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                        {update.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">{update.date}</p>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {update.description}
                      </p>
                    </div>

                    {update.link && (
                      <Link
                        href={update.link}
                        className="mt-4 text-blue-600 hover:underline text-sm font-medium"
                      >
                        Learn more →
                      </Link>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

UpdateSection.propTypes = {
  updates: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      link: PropTypes.string,
    })
  ).isRequired,
};
