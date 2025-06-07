import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';

export default function LabOpenings() {
  return (
    <Layout>
      <Head>
        <title>Openings | Our Lab</title>
      </Head>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Internship & Research Openings</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We welcome motivated and passionate students to join our lab as interns or research assistants. 
            Interested interns can work in the following topics:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Machine Learning for Environmental Monitoring</li>
            <li>Computational Fluid Dynamics</li>
            <li>Battery Management Systems for Electric Vehicles</li>
            <li>IoT-based Smart Sensing Systems</li>
            <li>AI for Structural Health Monitoring</li>
          </ul>

          <p className="mt-6 text-gray-600">
            If you're interested, please email your resume and area of interest to:{' '}
            <a href="mailto:your.email@iitr.ac.in" className="text-blue-600 hover:underline">
              anshul.yadav@wr.iitr.ac.in
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
