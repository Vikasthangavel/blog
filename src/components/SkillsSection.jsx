import { skills } from "../data/data";
import "./SkillsSection.css";

const SkillsSection = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__header">
        <h2 className="skills__title">Skills &amp; Tools</h2>
        <div className="skills__line" />
      </div>
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
