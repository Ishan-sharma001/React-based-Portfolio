import "../home/style/Introduction.css";
import introImg from "../home/assets/images/image0_0.jpg"; // Replace with your actual image path

function Introduction() {
  return (
    <section className="introduction">
      <div className="intro-content">
        <h2>Welcome to My Portfolio</h2>
        <p>
          Hi, I'm <strong>Ishan Sharma</strong>, a passionate web developer with expertise in 
          <strong> HTML, CSS, JavaScript, and React.js</strong>. I love building 
          responsive and interactive web applications that provide great user experiences.
        </p>
      </div>
      <div className="intro-img">
        <img src={introImg} alt="Ishan Sharma" />
      </div>
    </section>
  );
}

export default Introduction;
