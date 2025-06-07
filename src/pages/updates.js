import React, { useRef } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import { updates, twitter } from "@/content/updatescontent";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import UpdateSection from "@/components/sections/UpdateSection1";

// Lazy load TwitterTweetEmbed with fallback loader
const TwitterTweetEmbed = dynamic(
  () => import("react-twitter-embed").then(mod => mod.TwitterTweetEmbed),
  { 
    ssr: false, 
    loading: () => <div className="flex items-center justify-center h-[200px]">Loading tweet...</div> 
  }
);

export default function Updates() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <Head>
        <title>News & Updates | WTM Research Group</title>
        <meta
          name="description"
          content="Latest news, research updates, and announcements from WTM Research Group"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      {/* Main content wrapper with proper z-index */}
      <div className="relative z-0">
        {/* Hero Section */}
        <div className="relative w-full h-[40vh] min-h-[250px] max-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70" />
          <Image
            src="/images/updates/news.jpg"
            alt="News background"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              News & Updates
            </h1>
            <p className="text-base sm:text-xl text-gray-100 max-w-3xl">
              Stay informed about our latest research, publications, and events
            </p>
          </div>
        </div>

        {/* Combined Updates */}
        <div className="bg-gray-50">
          <UpdateSection updates={updates} />
        </div>

        {/* Twitter Feed */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">From Our Twitter</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Follow us for real-time updates and discussions
              </p>
            </div>

             <div className="relative">
  {/* Left Button */}
  <button
    onClick={() => scroll("left")}
    className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 
               bg-transparent sm:bg-white/80 sm:backdrop-blur-sm sm:rounded-full sm:shadow-lg 
               p-2 sm:p-3 hover:bg-gray-50 transition-all active:scale-95"
    aria-label="Scroll left"
  >
    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
  </button>

  {/* Scrollable Content */}
  <div
    ref={scrollRef}
    className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth 
               px-2 pb-4 -mx-2 scrollbar-hide touch-pan-x"
  >
    {twitter.slice(0, 5).map((item, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px] 
                   bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl 
                   shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
      >
        {item.type === "tweet" && (
          <TwitterTweetEmbed
            tweetId={item.tweetId}
            options={{
              conversation: "none",
              cards: "hidden",
              align: "center",
            }}
          />
        )}
      </div>
    ))}
  </div>

  {/* Right Button */}
  <button
    onClick={() => scroll("right")}
    className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 
               bg-transparent sm:bg-white/80 sm:backdrop-blur-sm sm:rounded-full sm:shadow-lg 
               p-2 sm:p-3 hover:bg-gray-50 transition-all active:scale-95"
    aria-label="Scroll right"
  >
    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
  </button>
</div>


            {/* Mobile navigation dots */}
            <div className="sm:hidden flex justify-center gap-2 mt-4">
              {twitter.slice(0, 5).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (scrollRef.current) {
                      scrollRef.current.scrollTo({
                        left: index * 300,
                        behavior: "smooth"
                      });
                    }
                  }}
                  className="w-2 h-2 rounded-full bg-gray-300 hover:bg-blue-700 transition-colors"
                  aria-label={`Go to tweet ${index + 1}`}
                />
              ))}
            </div>

            <div className="text-center mt-6 sm:mt-8">
              <a
                href="https://twitter.com/WRDM_IITROORKEE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Follow us on Twitter
                <svg className="ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}