import { skills } from "../data/data";
import "./SkillsSection.css";

const SkillsSection = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">SKILLS &amp; TOOLS</h2>
      <div className="skills__grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skills__item">
            <span className="skills__icon">{skill.icon}</span>
            <span className="skills__label">{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
