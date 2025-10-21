import React from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Testing Error Boundary</h1>
      <p>
        If everything is working, you should see the normal message below
        (no intentional error this time).
      </p>
      <ErrorBoundary>
        <div>No errors here! Everything is fine. 🎉</div>
      </ErrorBoundary>
    </div>
  );
};

export default Home;
