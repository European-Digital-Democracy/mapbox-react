import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import Databases from '../components/sections/Databases';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Mapbox from '../components/elements/Mapbox'

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <Mapbox />
      <Databases invertMobile topDivider imageFill className="illustration-section-02" />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider /> 
    </>
  );
}

export default Home;