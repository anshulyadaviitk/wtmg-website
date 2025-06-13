import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { pi } from '@/content/groupmembers';
import { researchAreas } from '@/content/researchAreas';
import { awards } from '@/content/awards';
import ResearchAreaCard from '@/components/research/ResearchAreaCard';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
// Import at the top
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { notices } from '@/content/notice&updatedata';
import { upcomingevents } from '@/content/notice&updatedata';
import ResearchSection from '@/components/sections/ResearchSection';
import AwardsSection1 from '@/components/sections/AwardsSection1';
import { InvitedTalksSection } from '@/components/sections/talksection';
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

{/* Modern Professional Hero Section */}
{/* Modern Hero Section */}
<section className="relative bg-gradient-to-br from-sky-50 to-blue-100 py-24 px-2 text-gray-800 overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Text Content */}
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
          Water Resources Development 
        </span>
        <br className="hidden md:block" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
          & Management
        </span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
        Pioneering sustainable water solutions through cutting-edge research and innovation at Indian Institute of Technology Roorkee
      </p>
    </div>

    {/* Logo and Images Section */}
    <div className="flex flex-col items-center justify-center relative">
      {/* Top Logo with decorative line */}
      <div className="relative mb-16 w-full flex justify-center items-center">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent z-0" />
        <div className="relative z-10 w-32 aspect-square rounded-full bg-white/80 backdrop-blur-md border-2 border-white shadow-lg flex items-center justify-center transition-all duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src="/images/iitr_logo.png"
            alt="IIT Roorkee Logo"
            className="w-28 aspect-square object-contain rounded-full"
          />
        </div>


        
      </div>

      {/* Side-by-side buildings with modern layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 w-full">
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl border-4 border-white/30 transition-all duration-700 hover:shadow-2xl hover:border-blue-300/50">
          <img
            src="/images/iitr_building.jpg"
            alt="IIT Roorkee Campus"
            className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
            <h3 className="text-white text-2xl font-semibold">IIT Roorkee Campus</h3>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl border-4 border-white/30 transition-all duration-700 hover:shadow-2xl hover:border-cyan-300/50">
          <img
            src="/images/logos/wrdm_building.jpg"
            alt="WRDM Department"
            className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
            <h3 className="text-white text-2xl font-semibold">WRDM Department</h3>
          </div>
        </div>
      </div>

      {/* Bottom Logo with decorative line */}
      <div className="relative mt-16 w-full flex justify-center items-center">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent z-0" />
        <div className="relative z-10 w-32 aspect-square rounded-full bg-white/80 backdrop-blur-md border-2 border-white shadow-lg flex items-center justify-center transition-all duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src="/images/wrdm_logo_white.png"
            alt="WRDM Logo"
            className="w-28 aspect-square object-contain rounded-full"
          />
        </div>
      </div>
    </div>

    {/* Call to Action Buttons */}
    <div className="flex flex-wrap justify-center gap-6 mt-20">
      <a
        href="https://iitr.ac.in/Departments/Water%20Resources%20Development%20and%20Management%20Department/Home.html"
        target="_blank"
        rel="noopener noreferrer"
        className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
      >
        Explore Programs
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>

      <Link
        href="/research"
        className="px-10 py-4 bg-white text-blue-800 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 border border-blue-200"
      >
        Research
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  </div>
</section>



      {/* PI Introduction */}
<section className="py-12 bg-white">
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

        {/* Bio */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">About</h3>
          <p className="text-gray-700 leading-relaxed">
            {pi.bio}
          </p>
        </div>

        <Button href="/PI" className="mt-6" variant="outline">
          View Full Profile →
        </Button>
      </div>
    </div>
  </div>
</section>

   {/* Research Areas */}
<section id="research" className="py-16 bg-gray-50">
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