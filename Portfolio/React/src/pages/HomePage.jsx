import {About} from '../components/About';
import {Contact} from '../components/Contact';
import {Footer} from '../components/Footer';
import {Home} from '../components/Home';
import {Projects} from '../components/Projects';
import {UpButton} from '../components/ToTheTopBtn';
import '../App.css';

export function HomePage () {
  return (
    <div className="home">
      <Home />
      <UpButton />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
