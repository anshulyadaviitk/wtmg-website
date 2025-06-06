import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { publications, patents, invitedTalks } from '@/content/research';
import PublicationCard from '@/components/research/PublicationCard';
import SectionTitle from '@/components/ui/SectionTitle';
import Tabs from '@/components/research/tabs';
import Image from 'next/image';
import { PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import {
  UserIcon,
  CalendarIcon,
  MapPinIcon,
  MicrophoneIcon,
} from '@heroicons/react/24/outline';

export default function Research() {
  const router = useRouter();
  const { tab } = router.query;
  const [activeTab, setActiveTab] = useState('papers');
  const [isClient, setIsClient] = useState(false);

  // Per-talk slideshow state
  const [slideIndices, setSlideIndices] = useState({});

  const handlePrev = (talkId, imagesLength) => {
    setSlideIndices((prev) => ({
      ...prev,
      [talkId]:
        prev[talkId] === undefined
          ? imagesLength - 1
          : (prev[talkId] - 1 + imagesLength) % imagesLength,
    }));
  };

  const handleNext = (talkId, imagesLength) => {
    setSlideIndices((prev) => ({
      ...prev,
      [talkId]:
        prev[talkId] === undefined
          ? 1
          : (prev[talkId] + 1) % imagesLength,
    }));
  };

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
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Authors:</strong>{' '}
                        {book.authors.map((author, index) => {
                          const normalized = author.replace(/\s/g, '');
                          const isTarget = normalized === 'A.Yadav';
                          return (
                            <span key={index}>
                              <span className={isTarget ? 'font-semibold text-gray-800' : ''}>
                                {author}
                              </span>
                              {index < book.authors.length - 1 && ', '}
                            </span>
                          );
                        })}
                      </p>
                    )}
                    {book.publisher && (
                      <p className="text-sm text-gray-600 mb-1"><strong>Publisher:</strong> {book.publisher}</p>
                    )}
                    {book.year && (
                      <p className="text-sm text-gray-600 mb-1"><strong>Year:</strong> {book.year}</p>
                    )}
                    {(book.isbn || book.eisbn) && (
                      <p className="text-sm text-gray-600 mb-1">
                        {book.isbn && <><strong>ISBN:</strong> {book.isbn}</>}
                        {book.isbn && book.eisbn && ' | '}
                        {book.eisbn && <><strong>eISBN:</strong> {book.eisbn}</>}
                      </p>
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
                {patent.inventors && (
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Inventors:</strong>{' '}
                    {patent.inventors.map((inventor, index) => {
                      const normalized = inventor.replace(/\s/g, '');
                      const isTarget = normalized === 'A.Yadav';
                      return (
                        <span key={index}>
                          <span className={isTarget ? 'font-semibold text-gray-800' : ''}>
                            {inventor}
                          </span>
                          {index < patent.inventors.length - 1 && ', '}
                        </span>
                      );
                    })}
                  </p>
                )}
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
          <section className="space-y-8">
            <SectionTitle
              title="Invited Talks"
              subtitle="Explore notable talks and presentations from our speakers"
            />
            <div className="space-y-8">
              {invitedTalks.map((talk) => {
                const images = talk.images || [];
                const current = slideIndices[talk.id] || 0;
                return (
                  <div key={talk.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6 md:p-8 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{talk.title}</h3>
                        <div className="flex flex-wrap items-center text-gray-500 mt-2 gap-4">
                          <span className="flex items-center">
                            <UserIcon className="h-4 w-4 mr-1" />
                            {talk.speaker}
                          </span>
                          <span className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            {talk.year}
                          </span>
                          {talk.location && (
                            <span className="flex items-center">
                              <MapPinIcon className="h-4 w-4 mr-1" />
                              {talk.location}
                            </span>
                          )}
                          {talk.event && (
                            <span className="flex items-center">
                              <MicrophoneIcon className="h-4 w-4 mr-1" />
                              {talk.event}
                            </span>
                          )}
                        </div>

                        {talk.abstract && (
                          <div className="mt-4">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Abstract</h4>
                            <p className="text-gray-700">{talk.abstract}</p>
                          </div>
                        )}
                      </div>

                      {/* Slideshow if images exist */}
                      {images.length > 0 && (
                        <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-xl shadow-xl overflow-hidden group">
                          <Image
                            src={images[current]}
                            alt={`Talk image ${current + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority
                            sizes="(max-width: 768px) 100vw, 80vw"
                          />

                          {/* Navigation Arrows */}
                          <button
                            onClick={() => handlePrev(talk.id, images.length)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                            aria-label="Previous image"
                          >
                            <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
                          </button>
                          <button
                            onClick={() => handleNext(talk.id, images.length)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                            aria-label="Next image"
                          >
                            <ChevronRightIcon className="w-6 h-6 text-gray-700" />
                          </button>

                          {/* Pagination Dots */}
                          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                            {images.map((_, index) => (
                              <button
                                key={index}
                                onClick={() =>
                                  setSlideIndices((prev) => ({
                                    ...prev,
                                    [talk.id]: index,
                                  }))
                                }
                                className={`w-3 h-3 rounded-full transition-all ${
                                  current === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* YouTube Link */}
                      {talk.recordingUrl && (
                        <div className="mt-6">
                          <div className="flex items-center text-gray-700 mb-3">
                            <VideoCameraIcon className="h-5 w-5 mr-2" />
                            <span className="font-medium">Video Recording</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <svg className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                              </svg>
                              <a
                                href={talk.recordingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                Watch Full Talk Recording
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}
