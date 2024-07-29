import {useEffect, useState} from 'react';
import {Router} from 'next/router';

const stopDelayMs = 200;

const GlobalLoader = () => {
  let timer: NodeJS.Timeout | null = null;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeEnd);
    Router.events.on('routeChangeError', routeChangeError);
    return () => {
      Router.events.off('routeChangeStart', routeChangeStart);
      Router.events.off('routeChangeComplete', routeChangeEnd);
      Router.events.off('routeChangeError', routeChangeError);
    };
  }, []);

  const routeChangeStart = () => {
    setIsLoading(true);
  };

  const routeChangeEnd = () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setIsLoading(false);
    }, stopDelayMs);
  };

  const routeChangeError = (_err: Error, _url: string) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setIsLoading(false);
    }, stopDelayMs);
  };

  if (!isLoading) return null;

  return (
    <p className="fixed bottom-4 right-4 flex items-center rounded-lg bg-primary-100 p-2">
      <svg
        className="h-5 w-5 animate-spin text-primary-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </p>
  );
};

export default GlobalLoader;
