import React from 'react';
import Layout from './shared/layout'
import Hero from './hero/hero';
import MainSection from './main-section/main-section';

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <MainSection />
      </Layout>
    </>
  );
}

export default HomePage;