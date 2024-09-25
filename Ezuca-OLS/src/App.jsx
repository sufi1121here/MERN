import { useState } from 'react';

import Header from './components/Header';
import FeatureCard from './components/FeatureCard';
import FeaturedCourses from './components/FeaturedCourses'
import About from './components/About';
import Testimonials from './components/Testimonials'
import FeaturedCoursesCrads from './components/FeaturedCoursesCrads';
import LatestNewsEvents from './components/LatestNewsEvents';
import Footer from './components/Footer';
import PhotoCollage from './components/PhotoCollage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>

      <Header />
      <FeatureCard />
      <FeaturedCourses />
      <About />
      <Testimonials/>
      <FeaturedCoursesCrads />
      <LatestNewsEvents />
      <PhotoCollage/>
      <Footer />
    </div>
  );
}

export default App;
