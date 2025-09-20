// src/components/Home.jsx
import React from 'react';
import Hero from './Hero';
import Card from './Card';

function Home() {
  return (
    <>
      <Hero />
      <div className="d-flex justify-content-center mt-4">
        <Card />
      </div>
    </>
  );
}

export default Home;
