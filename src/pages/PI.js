// Dr. Anshul Yadav Profile Page
'use client'; // If using Next.js 13+ with app directory

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import AwardsSection from '@/components/sections/AwardsSection';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  BuildingOfficeIcon, 
  AcademicCapIcon, 
  BookOpenIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

export default function DrAnshulYadav() {
  return (

    <Layout>
          <Head>
            <title>Principal Investigator | WRDM Research Group</title>
          </Head>

    <div className="p-6 max-w-5xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Image
          src="/images/people/anshul-yadav.jpeg"
          alt="Dr. Anshul Yadav"
          width={200}
          height={200}
          className="rounded-2xl shadow-lg"
        />
      <div>
  <h1 className="text-3xl font-bold">Dr. Anshul Yadav</h1>
  <p className="text-lg">Assistant Professor</p>
  <p>Department of Water Resources Development and Management, IIT Roorkee</p>

  {/* Email & Phone with Icons */}
  <div className="mt-2 space-y-1 text-sm text-gray-700">
  <p className="flex items-start gap-2 text-gray-700">
    <BuildingOfficeIcon className="h-5 w-5 text-blue-600 mt-1" />
    First floor, Department of Water Resources Development and Management, IIT Roorkee
  </p>
  <p className="flex items-center gap-2 text-gray-700">
    <EnvelopeIcon className="h-5 w-5 text-blue-600" />
    anshul.yadav@wr.iitr.ac.in
  </p>
  <p className="flex items-center gap-2 text-gray-700">
    <PhoneIcon className="h-5 w-5 text-blue-600" />
    +91-94735 83417 (Mob)<br/>
    +91-1332-285617 (O)
  </p>
  </div>

  {/* Social Links with Icons */}
  <div className="flex gap-6 mt-4 items-center">
  <Link href="https://scholar.google.com/citations?user=ZIGtPEIAAAAJ&hl=en" target="_blank">
    <img
      src="/images/logos/scholars.png"
      alt="Google Scholar"
      className="h-10 w-10 object-contain rounded-xl shadow-sm border border-gray-200"
    />
  </Link>

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
</div>

</div>

      </div>

      <section>
        <h2 className="text-2xl font-semibold">Biography</h2>
        <p>Dr. Anshul Yadav is an Assistant Professor in the Department of Water Resources Development & Management at IIT Roorkee and the founding Principal Investigator of the Water Treatment & Monitoring Group (WTMG). His research unites advanced separation science with smart sensing, spanning membrane distillation, electrodialysis, adsorption, and the design of polymeric, composite, and MOF/ZIF-based membranes. By coupling these materials with IoT-enabled water-quality sensor networks, he pursues real-time, data-driven solutions for drinking-water security and industrial wastewater reuse. His work has led to multiple patents, peer-reviewed publications, and competitive funding from national agencies. Beyond the lab, Dr. Yadav integrates research, teaching, and outreach.</p>
      </section>

      <section>
  <h2 className="text-2xl font-bold mb-6">EDUCATION</h2>

  {/* Ph.D. - CSIR */}
  <div className="flex gap-6 mb-6">
    <img
      src="/images/logos/csir.png"
      alt="CSIR"
      className="w-20 h-20 object-contain mt-1"
    />
    <div>
      <p className="font-semibold">
        Ph.D. (Engineering Sciences), 2022
      </p>
      <p className="italic">Academy of Scientific and Innovative Research (AcSIR), India</p>
      <p className="mt-1">
        Thesis title: Membrane distillation process for high saline and wastewater treatment
      </p>
      <p>
        Advisor: Dr. Pawan Kumar Labhasetwar, Dr. Vinod Kumar Shahi
      </p>
    </div>
  </div>

  {/* M.Tech - IIT Kanpur */}
  <div className="flex gap-6 mb-6">
    <img
      src="/images/logos/iitkanpur.jpg"
      alt="IIT Kanpur"
      className="w-20 h-20 object-contain mt-1"
    />
    <div>
      <p className="font-semibold">
        M.Tech. (Mechanical Engineering), 2017
      </p>
      <p className="italic">Indian Institute of Technology Kanpur, India</p>
      <p className="mt-1">
        Thesis title: Thermal Field, Weld Bead Geometry and Characteristics in Submerged Arc Welded Plate
      </p>
      <p>
        Advisor: Dr. Arvind Kumar
      </p>
    </div>
  </div>
  {/*B.Tech*/}
  <div className="flex gap-6 mb-6">
  <img
    src="/images/logos/iitkanpur.jpg"
    alt="IIT Kanpur"
    className="w-20 h-20 object-contain mt-1"
  />
  <div>
    <p className="font-semibold">
      B.Tech. (Major: Mechanical Engineering; Minor: Electrical Engineering), 2017
    </p>
    <p className="italic">Indian Institute of Technology Kanpur, India</p>
  </div>
</div>

</section>




      <section>
        <h2 className="text-2xl font-semibold">Professional Experience</h2>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">S. No.</th>
              <th className="border px-4 py-2">Position</th>
              <th className="border px-4 py-2">Institute</th>
              <th className="border px-4 py-2">From</th>
              <th className="border px-4 py-2">To</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-4 py-2">1</td><td className="border px-4 py-2">Assistant Professor</td><td className="border px-4 py-2">IIT Roorkee</td><td className="border px-4 py-2">Sep 2024</td><td className="border px-4 py-2">Present</td></tr>
            <tr><td className="border px-4 py-2">2</td><td className="border px-4 py-2">Assistant Professor</td><td className="border px-4 py-2">AcSIR</td><td className="border px-4 py-2">Jan 2023</td><td className="border px-4 py-2">Sep 2024</td></tr>
           <tr><td className="border px-4 py-2">3</td><td className="border px-4 py-2">Scientist</td><td className="border px-4 py-2">CSIR-CSMCRI</td><td className="border px-4 py-2">Apr 2019</td><td className="border px-4 py-2">Sep 2024</td></tr>
            <tr><td className="border px-4 py-2">4</td><td className="border px-4 py-2">Assistant Professor</td><td className="border px-4 py-2">KNIT Sultanpur</td><td className="border px-4 py-2">Dec 2017</td><td className="border px-4 py-2">Feb 2019</td></tr>
            <tr><td className="border px-4 py-2">5</td><td className="border px-4 py-2">Project Associate</td><td className="border px-4 py-2">IIT Kanpur</td><td className="border px-4 py-2">Jun 2017</td><td className="border px-4 py-2">Sep 2017</td></tr>
            <tr><td className="border px-4 py-2">6</td><td className="border px-4 py-2">Teaching Assistant</td><td className="border px-4 py-2">IIT Kanpur</td><td className="border px-4 py-2">Jul 2016</td><td className="border px-4 py-2">Apr 2017</td></tr>
          </tbody>
        </table>
      </section>

       {/* ✅ Awards section */}
        <AwardsSection />

        {/*Member ship section*/}
      <section className="my-10">
  <h2 className="text-2xl font-semibold mb-6">Memberships</h2>
  <div className="space-y-4">
    <div className="p-4 border rounded-2xl shadow-sm bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium">Institution of Engineers (India), India</h3>
          <p className="text-sm">Associate Member</p>
        </div>
        <p className="text-sm text-gray-600 whitespace-nowrap">15 Dec 2017 – Present</p>
      </div>
    </div>

    <div className="p-4 border rounded-2xl shadow-sm bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium">Indian Institute of Chemical Engineers, India</h3>
          <p className="text-sm">Life Associate Member</p>
        </div>
        <p className="text-sm text-gray-600 whitespace-nowrap">01 Dec 2023 – Present</p>
      </div>
    </div>

    <div className="p-4 border rounded-2xl shadow-sm bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium">Indian Water Resources Society, India</h3>
          <p className="text-sm">Life Member</p>
        </div>
        <p className="text-sm text-gray-600 whitespace-nowrap">14 Nov 2024 – Present</p>
      </div>
    </div>
  </div>
</section>



      {/* <section>
        <h2 className="text-2xl font-semibold">Awards & Recognition</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Young Scientist Award, International Society for Energy, Environment and Sustainability (2023)</li>
          <li>Top 2% Scientist in the World – Materials (2022)</li>
          <li>Best PhD Thesis Award – Academy of Scientific & Innovative Research (2022)</li>
          <li>Best PhD Thesis Award – Indian Membrane Society (2022)</li>
          <li>Silver Medal – International Sol-Gel Society (2022) <a className="text-blue-600" href="https://www.isgs.org/community/the-isgs-phd-thesis-award-prize-for-2022-goes-to/#:~:text=Mathias%20Stanzel%2C%20Dr.-,Anshul%20Yadav">(Link)</a></li>
          <li>Two artworks selected for cover of Colloids and Surfaces A (Volumes 641 & 667)</li>
          <li>Contributor to Encyclopaedia of Materials by Elsevier (2022)</li>
          <li>MHRD Scholarship for M.Tech at IIT Kanpur</li>
          <li>Best Project Award in Manufacturing Processes at IIT Kanpur (2013)</li>
          <li>Letter of Appreciation – Army Welfare Education Society (2012)</li>
          <li>Certificate of Merit – CBSE in English, Physics, Mathematics (2011)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Guest Editorships</h2>
        <ul className="list-disc list-inside">
          <li><a href="https://www.mdpi.com/journal/water/special_issues/1162I5IOVJ" className="text-blue-600">Membrane Technologies for Wastewater Treatment and Resource Recovery</a> – Water (IF: 3.0)</li>
          <li><a href="https://www.mdpi.com/journal/lubricants/special_issues/Friction_Wear_Composite_Materials" className="text-blue-600">Friction and Wear in Composite Materials</a> – Lubricants (IF: 3.1)</li>
        </ul>
      </section> */}
    </div>
    </Layout>
  );
}
