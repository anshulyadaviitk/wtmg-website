// pages/_app.js
import '@/styles/globals.css';
import '@/styles/theme.css';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { ErrorBoundary } from 'react-error-boundary';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
      <details className="mb-6">
        <summary className="cursor-pointer text-gray-700 mb-2">Error details</summary>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm text-red-600">
          {error.stack || error.message}
        </pre>
      </details>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Example: Send pageview to Google Analytics
      if (window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="WRDM Research Group - Advancing scientific discovery" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <div className={`${inter.className} min-h-screen flex flex-col`}>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => window.location.reload()}
          onError={(error) => {
            // Log error to error reporting service
            console.error('ErrorBoundary caught:', error);
          }}
        >
          <Component {...pageProps} />
        </ErrorBoundary>
      </div>
    </>
  );
}

// Only uncomment if you need getInitialProps
/*
App.getInitialProps = async (appContext) => {
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }
  return { pageProps };
};
*/