import { useEffect, useState } from "react";

export default function TwitterTimeline() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadAttempted, setLoadAttempted] = useState(false);

  useEffect(() => {
    if (!loadAttempted) {
      setLoadAttempted(true);
      
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.onload = () => setIsLoaded(true);
      script.onerror = () => {
        console.error('Failed to load Twitter widget script');
        setIsLoaded(false);
      };
      
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [loadAttempted]);

  // Refresh widget if not loaded after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoaded && loadAttempted) {
        setLoadAttempted(false); // Will trigger a reload
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoaded, loadAttempted]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Twitter Timeline</h2>
        
        <div className="twitter-embed-container">
          <a
            className="twitter-timeline"
            data-height="600"
            data-theme="light"
            data-chrome="noheader nofooter noborders"
            href="https://twitter.com/iitroorkee"
          >
            Tweets by IIT Roorkee
          </a>
        </div>

        {!isLoaded && (
          <div className="mt-4 space-y-2">
            <div className="text-center text-yellow-600">
              Loading Twitter feed... (May take a few seconds)
            </div>
            <div className="text-xs text-gray-500 text-center">
              If this persists, try:
              <ul className="list-disc list-inside mt-1">
                <li>Disabling ad-blockers</li>
                <li>Checking network connection</li>
                <li>Viewing in production environment</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}