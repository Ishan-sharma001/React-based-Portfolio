import { motion } from "framer-motion";
import "../home/style/SkillsSection.css";

const skills = [
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "85%" },
  { name: "JavaScript", level: "80%" },
  { name: "React.js", level: "75%" },
  { name: "Node.js", level: "60%" },
];

function SkillsSection() {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-item"
            key={index}
            initial={{ width: 0 }}
            animate={{ width: skill.level }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
