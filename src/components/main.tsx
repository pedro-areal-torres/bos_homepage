import React from 'react';

import Newsletter from './newsletter/newsletter';
import About from './about/about';
import Testimonials from './testimonials/testimonials';
import Roic from './roic/roic';
import Presentation from './presentation/presentation';
import Service from './service/service';
import Blog from './blog/blog';

const Main: React.FC = () => {
  return (
    <div className='grid'>
      <Presentation />
      <hr className='border-green-600 h-1' />
      <Blog />
      <hr className='border-grey-600' />
      <Service />
      <hr className='border-grey-600 py-6' />
      <Roic />
      <hr className='border-grey-600' />
      <About />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Main;
