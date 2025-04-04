import "./styles/About.css";
import AboutHero from "../components/about/AboutHero"
import AboutDetails from "../components/about/AboutDetails"
import Footer from "../components/default/Footer";
function About() {
  return (
    <div className="about">
     <AboutHero/>
     <AboutDetails/>
      <Footer />
    </div>
  );
}

export default About;
