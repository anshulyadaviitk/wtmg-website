import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { pi } from '@/content/people';
import { researchAreas } from '@/content/research';
import { awards } from '@/content/awards';
import ResearchAreaCard from '@/components/research/ResearchAreaCard';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { notices } from '@/content/noticedata';
import { upcomingevents } from '@/content/noticedata';
import ResearchSection from '@/components/ResearchSection';
import AwardsSection from '@/components/sections/AwardsSection';
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
      <div className="flex flex-col items-center justify-center gap-8 my-6">
        {/* WRDM Logo */}
        <div className="aspect-square w-24 md:w-32 rounded-full backdrop-blur-md bg-white/20 p-1 shadow-lg border border-white/20">
          <img
            src="/images/wrdm_logo_white.png"
            alt="WRDM Logo"
            className="w-full h-full object-contain rounded-full"
          />
        </div>

        {/* Connecting line */}
        <div className="h-2 w-1 bg-gradient-to-b from-blue-300 to-blue-500 rounded-full"></div>

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
              <span className="text-gray-700">{pi.contact.phone}</span>
            </li>
            <li className="flex items-start">
              <BuildingOfficeIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
              <span className="text-gray-700">{pi.contact.office}</span>
            </li>
          </ul>
          
          {/* Social Links */}
          { <div className="mt-4 flex space-x-4">
            <a href={pi.social.googleScholar} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <AcademicCapIcon className="h-6 w-6" />
            </a>
            <a href={pi.social.researchGate} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <BookOpenIcon className="h-6 w-6" />
            </a>
            
          </div> }
  
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



    {/* ✅ Awards section */}
            <AwardsSection showEditorial={false} />
    

    

      {/* Notice Board */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-6 max-w-6xl">
    <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
      News & Events
    </h2>

    <div className="flex flex-col md:flex-row gap-10 md:gap-16">
      {/* Notice Board (Left) */}
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-6 border-b-2 border-blue-600 pb-2">
          Notice Board
        </h3>
        <ul className="space-y-5 max-h-[400px] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200">
          {notices.map((notice) => (
            <li key={notice.id} className="border-l-4 border-blue-600 bg-gray-50 p-4 rounded-md shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <a
                    href={notice.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    {notice.title}
                  </a>
                  {notice.isNew && (
                    <span className="ml-3 inline-block px-2 py-0.5 text-xs font-semibold bg-red-100 text-red-700 rounded-full select-none">
                      New
                    </span>
                  )}
                </div>
                <time
                  dateTime={notice.date}
                  className="text-sm text-gray-500 italic"
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
          <Button href="/notice" variant="outline" className="px-8 py-3 text-lg">
            View All Notices
          </Button>
        </div>
      </div>

      {/* Upcoming Events (Right) */}
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-6 border-b-2 border-blue-600 pb-2">
          Upcoming Events
        </h3>
        <ul className="space-y-5 max-h-[400px] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200">
          {upcomingevents.map((event) => (
            <li key={event.id} className="border-l-4 border-green-600 bg-gray-50 p-4 rounded-md shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-gray-800 hover:text-green-600 transition-colors"
                  >
                    {event.title}
                  </a>
                  {event.isNew && (
                    <span className="ml-3 inline-block px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-700 rounded-full select-none">
                      New
                    </span>
                  )}
                </div>
                <time
                  dateTime={event.date}
                  className="text-sm text-gray-500 italic"
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
          <Button href="/events" variant="outline" className="px-8 py-3 text-lg">
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