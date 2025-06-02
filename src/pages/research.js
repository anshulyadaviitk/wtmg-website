import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { publications, patents, invitedTalks } from '@/content/research';
import PublicationCard from '@/components/research/PublicationCard';
import SectionTitle from '@/components/ui/SectionTitle';
import Tabs from '@/components/research/tabs';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Research() {
  const router = useRouter();
  const { tab } = router.query;
  const [activeTab, setActiveTab] = useState('papers');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (tab && ['papers', 'books', 'patents', 'talks'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [tab]);

  if (!isClient) return null; // Prevent hydration mismatch

  return (
    <Layout>
      <Head>
        <title>Research | Water Resources Group</title>
      </Head>

      <div className="container mx-auto px-4 py-12">
        <SectionTitle 
          title="Our Research" 
          subtitle="Innovative approaches to water resources challenges"
          align="center"
        />

        <Tabs 
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            router.push(`/research?tab=${tab}`, undefined, { shallow: true });
          }}
          tabs={[
            { id: 'papers', label: 'Research Papers' },
            { id: 'books', label: 'Books' },
            { id: 'patents', label: 'Patents' },
            { id: 'talks', label: 'Invited Talks' },
          ]}
        />

        {activeTab === 'papers' && (
          <div className="mt-8 space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Journal Articles</h3>
            {publications.journalArticles.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
        )}

      {activeTab === 'books' && (
  <div className="mt-8 space-y-6">
    <h3 className="text-2xl font-semibold mb-6 text-gray-800">Books</h3>
    {publications.books.map((book) => (
      <div
        key={book.id}
        className="flex flex-col md:flex-row bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden p-4 md:p-6 gap-4"
      >
        {book.image && (
          <div className="w-full md:w-[150px] h-[200px] flex-shrink-0">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        )}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h4>
            {book.authors && (
              <p className="text-sm text-gray-600 mb-1"><strong>Authors:</strong> {book.authors.join(', ')}</p>
            )}
            {book.publisher && (
              <p className="text-sm text-gray-600 mb-1"><strong>Publisher:</strong> {book.publisher}</p>
            )}
            {book.year && (
              <p className="text-sm text-gray-600 mb-1"><strong>Year:</strong> {book.year}</p>
            )}
          </div>
          {book.link && (
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm mt-4"
            >
              View Book
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
)}




        {activeTab === 'patents' && (
          <div className="mt-8 space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Patents</h3>
            {patents.map((patent) => (
              <div key={patent.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{patent.title}</h4>
                <p className="text-sm text-gray-600 mb-1"><strong>Inventors:</strong> {patent.inventors.join(', ')}</p>
                {patent.patentNumber && (
                  <p className="text-sm text-gray-600 mb-1"><strong>Patent Number:</strong> {patent.patentNumber}</p>
                )}
                {patent.filingDate && (
                  <p className="text-sm text-gray-600 mb-1"><strong>Filing Date:</strong> {patent.filingDate}</p>
                )}
                <p className="text-sm text-gray-600 mb-3"><strong>Status:</strong> {patent.status}</p>
                {patent.link && (
                  <a
                    href={patent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Patent
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'talks' && (
          <div className="mt-8 space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Invited Talks</h3>
            {invitedTalks.map((talk) => (
              <div key={talk.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{talk.title}</h4>
                <p className="text-sm text-gray-600 mb-1"><strong>Speaker:</strong> {talk.speaker}</p>
                <p className="text-sm text-gray-600 mb-1"><strong>Event:</strong> {talk.event}</p>
                <p className="text-sm text-gray-600 mb-1"><strong>Location:</strong> {talk.location}</p>
                <p className="text-sm text-gray-600 mb-1"><strong>Year:</strong> {talk.year}</p>
                <p className="text-sm text-gray-600 mt-2">{talk.abstract}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
