
import Navbar from './components/Navbar';
import FeatureCard from './components/FeatureCard';
import FeaturedCourses from './components/FeaturedCourses'
import About from './components/About';
import Testimonials from './components/Testimonials'
import FeaturedCoursesCrads from './components/FeaturedCoursesCrads';
import LatestNewsEvents from './components/LatestNewsEvents';
import Footer from './components/Footer';
import PhotoCollage from './components/PhotoCollage';

function App() {

  return (
    <div>

      <Navbar />
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
