import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { awards } from '@/content/awards';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Awards() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay scroll logic
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 420; // Approx one card width
    const interval = setInterval(() => {
      if (!isHovered) {
        container.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });

        // Reset to start if reached end
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 5
        ) {
          setTimeout(() => {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          }, 1000);
        }
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <Layout>
      <Head>
        <title>Awards & Recognition | Water Resources Group</title>
      </Head>

      <div className="container mx-auto px-4 py-12 space-y-20">
        <SectionTitle
          title="Awards & Recognitions"
          subtitle="Recognitions for our research contributions"
          align="center"
        />

        {/* Faculty Awards - Autoplay Carousel */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
            Faculty Awards
          </h2>

          <div
            ref={scrollRef}
            className="overflow-x-auto hide-scrollbar"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex space-x-6 snap-x snap-mandatory px-1">
              {awards.faculty.map((award) => (
               <motion.div
  key={award.id}
  whileHover={{ scale: 1.03 }}
  className="w-full sm:w-[100%] md:w-[400px] flex-shrink-0 bg-white rounded-xl shadow-md snap-center overflow-hidden transition-transform duration-300"
>
  {award.image && (
    <div className="relative w-full h-48">
      <Image
        src={award.image}
        alt={award.title}
        fill
        className="object-cover"
      />
    </div>
  )}
  <div className="p-5">
    <h3 className="text-lg font-semibold text-blue-700">{award.title}</h3>
    <p className="text-sm text-gray-600">
      {award.organization} • {award.year}
    </p>
    <p className="text-sm text-gray-700 mt-2">{award.description}</p>
    {award.link && (
      <a
        href={award.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-blue-600 hover:underline text-sm"
      >
        More details
      </a>
    )}
  </div>
</motion.div>

              ))}
            </div>
          </div>
        </section>

        {/* Student Achievements */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
            Student Achievements
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recipient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Award</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {awards.students.map((award) => (
                  <tr key={award.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {award.recipient}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {award.title}
                      {award.paperTitle && (
                        <p className="text-xs text-gray-500 mt-1">{award.paperTitle}</p>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {award.year}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Layout>
  );
}
