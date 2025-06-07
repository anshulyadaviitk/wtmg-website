import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import { events } from '@/content/eventcontent';
import { CalendarIcon, ClockIcon, MapPinIcon, VideoCameraIcon, PhotoIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export default function EventPage() {
  return (
    <Layout>
      <Head>
        <title>Events | WTM Research Group</title>
        <meta name="description" content="Details of past and upcoming events organized by WTM Research Group" />
      </Head>

      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 space-y-16">
        {/* Upcoming Events Section */}
        <section className="space-y-8">
          <SectionTitle
            title="Upcoming Events"
            subtitle="Stay informed about our upcoming workshops, seminars, and academic events"
          />

          {events.upcoming.length > 0 ? (
            <div className="space-y-6">
              {events.upcoming.map((event, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {event.image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                      <div className="flex items-center text-gray-500 mt-1 space-x-4">
                        <span className="flex items-center text-sm">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {event.date}
                        </span>
                        {event.time && (
                          <span className="flex items-center text-sm">
                            <ClockIcon className="h-4 w-4 mr-1" />
                            {event.time}
                          </span>
                        )}
                      </div>
                      {event.location && (
                        <div className="flex items-center text-gray-500 mt-1">
                          <MapPinIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-700">{event.description}</p>
                    
                    {event.registerLink && (
                      <Link
                        href={event.registerLink}
                        className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Register Now
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-500">No upcoming events scheduled. Check back later!</p>
            </div>
          )}
        </section>

        {/* Past Events Section */}
<section className="space-y-8">
  <SectionTitle
    title="Past Events"
    subtitle="Explore highlights from our previous events and workshops"
  />

  <div className="space-y-8">
    {events.past.map((event, idx) => (
      <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 md:p-8 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{event.title}</h3>
            <div className="flex items-center text-gray-500 mt-2 space-x-4">
              <span className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                {event.date}
              </span>
              {event.location && (
                <span className="flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  {event.location}
                </span>
              )}
            </div>
            <p className="text-gray-700 mt-4">{event.description}</p>
          </div>

          {/* Media Section */}
          {(event.photos?.length > 0 || event.youtubeLinks) && (
            <div className="pt-4 border-t border-gray-100">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Event Media</h4>
              
              {/* Photo Gallery Slideshow */}
              {event.photos?.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center text-gray-700 mb-4">
                    <PhotoIcon className="h-5 w-5 mr-2 text-gray-500" />
                    <span className="font-semibold text-lg">Photo Gallery</span>
                  </div>
                  
                  <div className="relative group">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      slidesPerView={1}
                      spaceBetween={16}
                      autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                      }}
                      pagination={{
                        clickable: true,
                        el: '.photo-pagination',
                        type: 'bullets',
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                      }}
                      navigation={{
                        nextEl: '.photo-next',
                        prevEl: '.photo-prev',
                      }}
                      loop={true}
                      className="rounded-xl overflow-hidden shadow-md"
                    >
                      {event.photos.map((url, i) => (
                        <SwiperSlide key={i}>
                    <div className="flex justify-center">  {/* Centering wrapper */}
  <div className="relative aspect-video max-h-[300px] w-full overflow-hidden">
    <Image
      src={url}
      alt={`Event photo ${i+1}`}
      fill
      className="object-contain transition-transform duration-300 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, 75vw"
      priority={i === 0}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
  </div>
</div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Navigation Arrows */}
                    <button 
                      className="photo-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Previous photo"
                    >
                      <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button 
                      className="photo-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Next photo"
                    >
                      <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Pagination Dots */}
                    <div className="photo-pagination flex justify-center gap-1.5 mt-4" />
                  </div>
                </div>
              )}

              {/* YouTube Links Section */}
              {event.youtubeLinks && (
                <div className="mt-6">
                  <div className="flex items-center text-gray-700 mb-3">
                    <VideoCameraIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium">Video Recordings</span>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(event.youtubeLinks).map(([sessionType, url]) => (
                      <div key={sessionType} className="flex items-center">
                        <svg className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                        <a 
                          href={url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {sessionType.charAt(0).toUpperCase() + sessionType.slice(1).replace(/([A-Z])/g, ' $1')} Session
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</section>     </div>
    </Layout>
  );
}