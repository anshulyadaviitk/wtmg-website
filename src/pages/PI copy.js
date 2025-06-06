// Dr. Anshul Yadav Profile Page
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { pi } from '@/content/people';
import { awards } from '@/content/awards';
import AwardsSection1 from '@/components/sections/AwardsSection1';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  BuildingOfficeIcon, 
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function DrAnshulYadav() {
  return (
    <Layout>
      <Head>
        <title>Principal Investigator | WRDM Research Group</title>
        <meta name="description" content="Profile of Dr. Anshul Yadav, Assistant Professor at IIT Roorkee and Principal Investigator of the Water Treatment & Monitoring Group" />
      </Head>

      <div className="px-4 py-8 max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl shadow-sm"
        >
          <div className="relative w-64 h-64 md:w-72 md:h-72 flex-shrink-0">
            <Image
              src="/images/people/anshul-yadav.jpeg"
              alt="Dr. Anshul Yadav"
              fill
              className="rounded-xl object-cover shadow-md border-4 border-white"
              priority
            />
          </div>
          
          <div className="space-y-3">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Dr. Anshul Yadav</h1>
              <p className="text-xl text-blue-700 font-medium">Assistant Professor</p>
              <p className="text-gray-600">
                Department of Water Resources Development and Management<br/>
                Indian Institute of Technology Roorkee
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-4 space-y-2">
              <p className="flex items-center gap-2 text-gray-700">
                <EnvelopeIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <a href="mailto:anshul.yadav@wr.iitr.ac.in" className="hover:text-blue-700 transition-colors">
                  anshul.yadav@wr.iitr.ac.in
                </a>
              </p>
              <p className="flex items-start gap-2 text-gray-700">
                <PhoneIcon className="h-5 w-5 text-blue-600 mt-[2px] flex-shrink-0" />
                <span>
                  +91-94735 83417 (Mobile)<br />
                  +91-1332-285617 (Office)
                </span>
              </p>
              <p className="flex items-start gap-2 text-gray-700">
                <BuildingOfficeIcon className="h-5 w-5 text-blue-600 mt-[2px] flex-shrink-0" />
                <span>
                  First floor, Department of Water Resources Development and Management, <br />
                  Indian Institute of Technology Roorkee
                </span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {[
                { 
                  name: "ResearchGate", 
                  url: "https://www.researchgate.net/profile/Anshul-Yadav-14",
                  icon: "/images/logos/research.png"
                },
                { 
                  name: "LinkedIn", 
                  url: "https://www.linkedin.com/in/anshul-yadav-2b29ab305/",
                  icon: "/images/logos/LinkedIn_logo.png"
                },
                { 
                  name: "Google Scholar", 
                  url: "https://scholar.google.com/citations?user=ZIGtPEIAAAAJ&hl=en",
                  icon: "/images/logos/scholars.png"
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Tabbed Navigation */}
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 max-w-3xl mx-auto">
            {['Biography', 'Education', 'Experience', 'Research', 'Awards', 'Memberships'].map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
                  ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2
                  ${selected
                    ? 'bg-white shadow'
                    : 'text-blue-600 hover:bg-white/[0.12] hover:text-blue-800'
                  }`
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-6">
            {/* Biography Tab */}
            <Tab.Panel className="rounded-xl bg-white p-6 shadow">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Biography</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Dr. Anshul Yadav is an Assistant Professor in the Department of Water Resources Development & Management at Indian Institute of Technology Roorkee and the founding Principal Investigator of the Water Treatment & Monitoring Group (WTMG).
                </p>
                <p>
                  His research unites advanced separation science with smart sensing, spanning membrane distillation, electrodialysis, adsorption, and the design of polymeric, composite, and MOF/ZIF-based membranes. By coupling these materials with IoT-enabled water-quality sensor networks, he pursues real-time, data-driven solutions for drinking-water security and industrial wastewater reuse.
                </p>
                <p>
                  His work has led to multiple patents, peer-reviewed publications, and competitive funding from national agencies. Beyond the lab, Dr. Yadav integrates research, teaching, and outreach to advance sustainable water technologies.
                </p>
              </div>
            </Tab.Panel>

            {/* Education Tab */}
            <Tab.Panel className="rounded-xl bg-white p-6 shadow">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Education</h2>
              
              <div className="space-y-8">
                {/* Ph.D. */}
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ delay: 0.1 }}
                  className="flex gap-6 p-4 bg-blue-50 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/logos/acsir.jpeg"
                      alt="CSIR"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Ph.D. (Engineering Sciences), 2022
                    </h3>
                    <p className="italic text-gray-600">Academy of Scientific and Innovative Research (AcSIR), India</p>
                    <div className="mt-2 space-y-1 text-sm text-gray-700">
                      <p className="flex items-start">
                        <AcademicCapIcon className="h-4 w-4 mt-1 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Thesis: <span className="font-medium">Membrane distillation process for high saline and wastewater treatment</span></span>
                      </p>
                      <p className="flex items-start">
                        <BriefcaseIcon className="h-4 w-4 mt-1 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Advisors: Dr. Pawan Kumar Labhasetwar, Dr. Vinod Kumar Shahi</span>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* M.Tech */}
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ delay: 0.2 }}
                  className="flex gap-6 p-4 bg-blue-50 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/logos/iitkanpur_logo.png"
                      alt="IIT Kanpur"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      M.Tech. (Mechanical Engineering), 2017
                    </h3>
                    <p className="italic text-gray-600">Indian Institute of Technology Kanpur, India</p>
                    <div className="mt-2 space-y-1 text-sm text-gray-700">
                      <p className="flex items-start">
                        <AcademicCapIcon className="h-4 w-4 mt-1 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Thesis: <span className="font-medium">Thermal Field, Weld Bead Geometry and Characteristics in Submerged Arc Welded Plate</span></span>
                      </p>
                      <p className="flex items-start">
                        <BriefcaseIcon className="h-4 w-4 mt-1 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Advisor: Dr. Arvind Kumar</span>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* B.Tech */}
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ delay: 0.3 }}
                  className="flex gap-6 p-4 bg-blue-50 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/logos/iitkanpur_logo.png"
                      alt="IIT Kanpur"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      B.Tech. (Major: Mechanical Engineering; Minor: Electrical Engineering), 2017
                    </h3>
                    <p className="italic text-gray-600">Indian Institute of Technology Kanpur, India</p>
                  </div>
                </motion.div>
              </div>
            </Tab.Panel>

            {/* Experience Tab */}
            <Tab.Panel className="rounded-xl bg-white p-6 shadow">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Professional Experience</h2>
              
              <ol className="relative border-l-2 border-blue-200 ml-4">
                {[
                  {
                    position: "Assistant Professor",
                    institute: "Indian Institute of Technology Roorkee",
                    logo: "/images/logos/iitr-logo-white.png",
                    from: "Sep 2024",
                    to: "Present",
                    description: "Teaching and research in Water Resources Development and Management."
                  },
                  {
                    position: "Assistant Professor",
                    institute: "Academy of Scientific and Innovative Research",
                    logo: "/images/logos/acsir.jpeg",
                    from: "Jan 2023",
                    to: "Sep 2024",
                    description: "Conducted research and mentored graduate students in water treatment technologies."
                  },
                  {
                    position: "Scientist",
                    institute: "Central Salt and Marine Chemicals Research Institute",
                    logo: "/images/logos/csir.png",
                    from: "Apr 2019",
                    to: "Sep 2024",
                    description: "Led research projects focused on membrane-based water treatment systems."
                  },
                  {
                    position: "Assistant Professor",
                    institute: "Kamla Nehru Institute of Technology, Sultanpur",
                    logo: "/images/logos/knit.jpg",
                    from: "Dec 2017",
                    to: "Feb 2019",
                    description: "Taught undergraduate courses in Mechanical Engineering and supervised student projects."
                  },
                  {
                    position: "Project Associate",
                    institute: "Indian Institute of Technology Kanpur",
                    logo: "/images/logos/iitkanpur.jpg",
                    from: "Jun 2017",
                    to: "Sep 2017",
                    description: "Worked on advanced welding technologies under the guidance of Dr. Arvind Kumar."
                  },
                  {
                    position: "Teaching Assistant",
                    institute: "Indian Institute of Technology Kanpur",
                    logo: "/images/logos/iitkanpur.jpg",
                    from: "Jul 2016",
                    to: "Apr 2017",
                    description: "Assisted in teaching Manufacturing Processes and graded assignments."
                  }
                ].map((exp, index) => (
                  <motion.li 
                    key={index}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ delay: index * 0.1 }}
                    className="mb-8 ml-6 relative group"
                  >
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full -left-3.5 ring-4 ring-white transform group-hover:scale-110 transition-transform">
                      <CalendarIcon className="w-3 h-3 text-white" />
                    </span>
                    <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 flex flex-col sm:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={exp.logo}
                          alt={`${exp.institute} logo`}
                          width={60}
                          height={60}
                          className="rounded-lg object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
                        <p className="text-gray-700 font-medium">{exp.institute}</p>
                        <p className="text-sm text-gray-600 mt-1">{exp.description}</p>
                        <p className="text-xs text-gray-500 mt-2 flex items-center">
                          <CalendarIcon className="w-3 h-3 mr-1" />
                          {exp.from} – {exp.to}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </Tab.Panel>

            {/* Research Tab */}
            <Tab.Panel className="rounded-xl bg-white p-6 shadow">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Current Research Projects</h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                {pi.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          Ongoing
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">
                        <span className="font-medium">{project.funding}</span> • {project.duration}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">PI: Dr. Anshul Yadav</span>
                        <button className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center">
                          Details <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Tab.Panel>

            {/* Awards Tab */}
            <Tab.Panel className="rounded-xl bg-white p-6 shadow">
              <AwardsSection1 awards={awards} />
            </Tab.Panel>

            {/* Memberships Tab */}
            <Tab.Panel className="rounded-xl bg-white p-6 shadow">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Professional Memberships</h2>
              
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    organization: "Institution of Engineers (India)",
                    role: "Associate Member",
                    duration: "15 Dec 2017 – Present"
                  },
                  {
                    organization: "Indian Institute of Chemical Engineers",
                    role: "Life Associate Member",
                    duration: "01 Dec 2023 – Present"
                  },
                  {
                    organization: "Indian Water Resources Society",
                    role: "Life Member",
                    duration: "14 Nov 2024 – Present"
                  }
                ].map((membership, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-white transition-colors"
                  >
                    <h3 className="font-medium text-gray-900">{membership.organization}</h3>
                    <p className="text-sm text-gray-600 mb-1">{membership.role}</p>
                    <p className="text-xs text-gray-500 flex items-center">
                      <CalendarIcon className="w-3 h-3 mr-1" />
                      {membership.duration}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Layout>
  );
}