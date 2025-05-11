import { ReactNode, useState, useEffect, Suspense, use } from 'react';
import { ErrorBoundary } from '@/presentation/shared/ErrorBoundary';

type Props<T> = {
  fetchData: () => Promise<T>;
  renderComponent: (data: T) => ReactNode;
  loadingFallback?: ReactNode;
  errorFallback?: ReactNode | ((error: Error | null) => ReactNode);
  dependencies?: unknown[];
};

/**
 * Custom hook that combines ErrorBoundary and Suspense to handle promises
 * @param fetchData Function that returns a promise with data
 * @param renderComponent Function that renders the component with data
 * @param loadingFallback Component to show during loading
 * @param errorFallback Component or function that renders the error component
 * @param dependencies Array of dependencies to reload data
 */
const useSkeleton = <T,>({
  fetchData,
  renderComponent,
  loadingFallback = <div>Loading...</div>,
  errorFallback = <div>An error has occurred, please try again.</div>,
  dependencies = []
}: Props<T>) => {
  // Create a state for the key that will force the ErrorBoundary to remount
  const [boundaryKey, setBoundaryKey] = useState<number>(0);

  // State to store the current promise
  const [promise, setPromise] = useState<Promise<T> | null>(null);

  // Component that wraps the promise to use with Suspense
  const PromiseWrapper = ({ promise }: { promise: Promise<T> }) => {
    if (promise === null) return null;

    // This is the technique to use Suspense with promises
    const data = use(promise);
    return <>{renderComponent(data)}</>;
  };

  // Function to reload data and reset the ErrorBoundary
  const reload = () => {
    setBoundaryKey(prev => prev + 1);
    setPromise(fetchData());
  };

  // Effect to load initial data and when dependencies change
  useEffect(() => {
    setPromise(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies, boundaryKey]);

  // Component that will be returned to use in JSX
  const Component = () => (
    <ErrorBoundary key={boundaryKey} fallback={errorFallback}>
      <Suspense fallback={loadingFallback}>
        {promise && <PromiseWrapper promise={promise} />}
      </Suspense>
    </ErrorBoundary>
  );

  return { Component, reload };
};

export default useSkeleton;