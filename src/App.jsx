import './App.css';
import DarkModeToggleButton from './utils/DarkModeToggleButton';
import HeroSection from './HeroSection';

function App() {

  return (
    <div className="wrapper">
      <nav role="navigation" aria-label="Main Navigation">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><DarkModeToggleButton /></li>
        </ul>
      </nav>

      <HeroSection />
    </div>
  );
}

export default App;
