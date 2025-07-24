import { motion } from "framer-motion";
import "../home/style/HeroSection.css";
import profileImg from "../home/assets/images/image.jpg";

function HeroSection() {
  return (
    <section className="hero">
      <motion.img
        src={profileImg}
        alt="Ishan Sharma"
        className="hero-img"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Hi, I'm Ishan Sharma
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        A passionate web developer crafting beautiful experiences with React.
      </motion.p>

      <motion.a
        href="/projects"
        className="hero-btn"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}

export default HeroSection;
