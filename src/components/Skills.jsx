function Skills({ skills }) {
  return (
    <section className="skills py-[100px] px-[9%] text-white" id="skills">
      <h2 className="heading text-center text-3xl mb-[50px]">
        My <span className="text-[#7cf03d]">Skills</span>
      </h2>

      <div className="skills-container grid gap-[30px] grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-box bg-[#262b34] p-5 rounded-[10px] transition-all duration-300
                hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,1)]">
            <i className={`${skill.icon} text-[30px] mb-5 text-[#7cf03d]`}></i>
            <div className="skill-info flex justify-between text-base mb-2">
              <span>{skill.name}</span><span>{skill.percent}%</span>
            </div>
            <div className="bar w-full h-[5px] bg-[#1f2421] rounded-[5px] overflow-hidden">
              <span className="block h-full bg-[#7cf03d] rounded-[5px]" style={{ width: `${skill.percent}%` }}></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;