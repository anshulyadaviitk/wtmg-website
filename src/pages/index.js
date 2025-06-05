import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { pi } from '@/content/people';
import { researchAreas } from '@/content/research';
import { awards } from '@/content/awards';
import ResearchAreaCard from '@/components/research/ResearchAreaCard';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
// Import at the top
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { notices } from '@/content/noticedata';
import { upcomingevents } from '@/content/noticedata';
import ResearchSection from '@/components/ResearchSection';
import AwardsSection1 from '@/components/sections/AwardsSection1';
// Replace your current Swiper imports with:
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  BuildingOfficeIcon, 
  AcademicCapIcon, 
  BookOpenIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

export default function Home() {
  const featuredAwards = awards.faculty.slice(0, 2);
  const featuredResearch = researchAreas.slice(0, 3);

  return (
    <Layout>
      <Head>
        <title>Home | Water Treatment & Management Group</title>
      </Head>

{/* Combined Hero Section */}
<section className="relative bg-gradient-to-br from-blue-900 to-blue-700 py-16 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Text Content */}
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        Water Resources Development <br className="hidden md:block" /> & Management
      </h1>
      <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
        Advancing sustainable water solutions through innovation at IIT Roorkee
      </p>
    </div>

    {/* Building Images with Logos in Between */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-8 mb-6">
      {/* IIT Roorkee Building - Left */}
      <div className="w-full max-w-full">
        <img
          src="/images/IITR_JT.jpg"
          alt="IIT Roorkee Campus"
          className="rounded-xl shadow-2xl border-4 border-white/20 w-full h-auto object-cover min-h-[300px]"
        />
      </div>

      {/* Logos in the middle with glass morphism */}
      {/* Logos in the middle with glass morphism */}
<div className="flex flex-row md:flex-col items-center justify-center gap-8 my-6">
  {/* WRDM Logo */}
  <div className="aspect-square w-24 md:w-32 rounded-full backdrop-blur-md bg-white/20 p-1 shadow-lg border border-white/20">
    <img
      src="/images/wrdm_logo_white.png"
      alt="WRDM Logo"
      className="w-full h-full object-contain rounded-full"
    />
  </div>

  {/* Connecting line */}
  <div className="w-2 h-1 md:w-1 md:h-2 bg-gradient-to-r md:bg-gradient-to-b from-blue-300 to-blue-500 rounded-full"></div>

  {/* IIT Roorkee Logo */}
  <div className="aspect-square w-24 md:w-32 rounded-full backdrop-blur-md bg-white/20 p-1 shadow-lg border border-white/20">
    <img
      src="/images/iitr_logo.png"
      alt="IIT Roorkee Logo"
      className="w-full h-full object-contain rounded-full"
    />
  </div>
</div>


      {/* WRDM Building - Right */}
      <div className="w-full max-w-full">
        <img
        
          src="/images/wrdm_photo.jpeg"
          alt="WRDM Department"
          className="rounded-xl shadow-2xl border-4 border-white/20 w-full h-auto object-cover min-h-[300px]"

        />
      </div>
    </div>

   {/* Call to Action with modern buttons */}
    <div className="flex flex-wrap justify-center gap-6 mt-8 animate-fade-in-up">
      <Link
        href="#about"
        className="px-10 py-4 bg-white text-blue-800 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        Explore Programs →
      </Link>
      <Link
        href="/research"
        className="px-10 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:shadow-lg transform hover:-translate-y-1"
      >
        Research Projects →
      </Link>
    </div>
  </div>
</section>

      {/* PI Introduction */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-start gap-8">
      {/* Photo Section */}
      <div className="md:w-1/3">
        <div className="relative w-full max-w-xs h-96 mx-auto overflow-hidden rounded-lg shadow-xl border border-gray-200">
          <Image
            src={pi.photo}
            alt={pi.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Contact Information */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <EnvelopeIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
              <a href={`mailto:${pi.contact.email}`} className="text-gray-700 hover:text-blue-600">
                {pi.contact.email}
              </a>
            </li>
            <li className="flex items-start">
              <PhoneIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
              <span className="text-gray-700 whitespace-pre-line">{pi.contact.phone}</span>
            </li>
            <li className="flex items-start">
              <BuildingOfficeIcon className="h-10 w-10 text-blue-600 mr-2 mt-0.5" />
              <span className="text-gray-700 whitespace-pre-line">{pi.contact.office}</span>
            </li>
          </ul>
          
          {/* Social Links */}
       {/* Social Links with Icons */}
  <div className="flex gap-6 mt-4 items-center">
  
  <Link href="https://www.researchgate.net/profile/Anshul-Yadav-14" target="_blank">
    <img
      src="/images/logos/research.png"
      alt="ResearchGate"
      className="h-10 w-10 object-contain rounded-xl shadow-sm border border-gray-200"
    />
  </Link>

  <Link href="https://www.linkedin.com/in/anshul-yadav-2b29ab305/" target="_blank">
    <img
      src="/images/logos/LinkedIn_logo.png"
      alt="LinkedIn"
      className="h-10 w-10 object-contain rounded-xl shadow-sm border border-gray-200"
    />
  </Link>
  <Link href="https://scholar.google.com/citations?user=ZIGtPEIAAAAJ&hl=en" target="_blank">
    <img
      src="/images/logos/scholars.png"
      alt="Google Scholar"
      className="h-10 w-10 object-contain rounded-xl shadow-sm border border-gray-200"
    />
  </Link>
</div>
  
        </div>
      </div>

      {/* Information Section */}
      <div className="md:w-2/3 space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-1">
            {pi.name}
          </h2>
          <p className="text-xl text-blue-600 mb-2">{pi.position}</p>
          <p className="text-gray-600 whitespace-pre-line">{pi.department}</p>
        </div>

        {/* Research Interests */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Research Interests</h3>
          <div className="flex flex-wrap gap-2">
            {pi.researchInterests.map((interest, index) => (
              <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Education</h3>
          <ul className="space-y-2">
            {pi.education.map((degree, index) => (
              <li key={index} className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">{degree}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Current Projects */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Current Projects</h3>
          <div className="space-y-4">
            {pi.projects.map((project, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800">{project.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{project.funding} • {project.duration}</p>
                <p className="text-gray-700 mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">About</h3>
          <p className="text-gray-700 leading-relaxed">
            {pi.bio}
          </p>
        </div>

        <Button href="/PI" className="mt-6" variant="outline">
          View Full Profile & Publications →
        </Button>
      </div>
    </div>
  </div>
</section>

   {/* Research Areas */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">

    <ResearchSection researchAreas={researchAreas} />

    <div className="text-center mt-10">
    
    </div>
  </div>
</section>


   {/*Awards section*/} 
<AwardsSection1 awards={awards} showEditorial={false} />


      {/* Notice Board */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-6 max-w-6xl">
    <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
      News & Events
    </h2>

    <div className="flex flex-col md:flex-row gap-5 md:gap-16">
 {/* Notice  */}
<div className="flex-1">
  <h3 className="text-2xl font-bold mb-5 border-b-2 border-blue-600 pb-1 text-blue-900">
    Notice Board
  </h3>

  <ul className="space-y-4 max-h-[360px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100">

    {[...notices]
      .sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return new Date(b.date) - new Date(a.date);
      })
      .map((notice) => (
        <li
          key={notice.id}
          className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-all p-4"
        >
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <div>
              <a
                href={notice.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-gray-800 hover:text-blue-600"
              >
                {notice.title}
              </a>
              {notice.isNew && (
                <span className="ml-2 inline-block px-2 py-0.5 text-xs font-medium bg-red-100 text-red-700 rounded-full">
                  New
                </span>
              )}
            </div>
            <time
              dateTime={notice.date}
              className="text-sm text-gray-500 italic min-w-fit"
              title={new Date(notice.date).toLocaleString()}
            >
              {new Date(notice.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          </div>
        </li>
      ))}
  </ul>

  <div className="mt-6 text-center">
    <Button href="/notice" variant="outline" className="px-6 py-2 text-base">
      View All Notices
    </Button>
  </div>
</div>


      {/* Upcoming Events (Right) */}
<div className="flex-1">
  <h3 className="text-2xl font-bold mb-5 border-b-2 border-green-600 pb-1 text-green-900">
    Upcoming Events
  </h3>

  {/* Scrollable area */}
  <ul className="space-y-4 max-h-[360px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100">

    {[...upcomingevents]
      .sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return new Date(b.date) - new Date(a.date);
      })
      .map((event) => (
        <li
          key={event.id}
          className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-all p-4"
        >
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <div>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-gray-800 hover:text-green-600"
              >
                {event.title}
              </a>
              {event.isNew && (
                <span className="ml-2 inline-block px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                  New
                </span>
              )}
            </div>
            <time
              dateTime={event.date}
              className="text-sm text-gray-500 italic min-w-fit"
              title={new Date(event.date).toLocaleString()}
            >
              {new Date(event.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          </div>
        </li>
      ))}
  </ul>

  <div className="mt-6 text-center">
    <Button href="/events" variant="outline" className="px-6 py-2 text-base">
      View All Events
    </Button>
  </div>
</div>




    </div>
  </div>
</section>


    </Layout>
  );
}