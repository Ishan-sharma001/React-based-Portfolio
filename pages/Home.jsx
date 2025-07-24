import "./styles/Home.css";
import HeroSection from "../components/home/HeroSection";
import Introduction from "../components/home/Introduction";
import SkillsSection from "../components/home/SkillsSection";
import ProjectSection from "../components/home/ProjectSection";
// import ReviewsSection from "../components/home/ReviewsSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/default/Footer";



function Home() {
  return (
    <div className="home">
      <HeroSection />
      <Introduction />
      <br />
      <SkillsSection />
      <ProjectSection />
{/*       <ReviewsSection /> */}
      <ContactSection />
      <Footer/>
      </div>
  );
}

export default Home;
