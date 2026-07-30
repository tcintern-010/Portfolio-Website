function Projects({ projects }) {
  return (
    <section className="projects py-[100px] px-[9%] text-white" id="projects">
      <h2 className="heading text-center text-3xl mb-[50px]">
        My <span className="text-[#7cf03d]">Projects</span>
      </h2>
      <div className="projects-container grid gap-[30px] grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {projects.map((project) => (
          <div key={project.title} className="project-box bg-[#262b34] rounded-[10px] overflow-hidden transition-all duration-300
                hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,1)]">
            <div className="project-info p-5">
              <h3 className="text-xl mb-2.5">{project.title}</h3>
              <p className="text-sm text-[#ccc] mb-[15px] leading-[1.5]">{project.description}</p>
              <div className="tech-tags flex flex-wrap gap-2.5 mb-[15px]">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-bg-main text-[#7cf03d] text-xs px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-small inline-flex items-center gap-1.5 border-2 border-[#7cf03d] text-[#7cf03d]
                    px-4 py-2 rounded-md text-sm transition-all duration-300
                    hover:bg-[#7cf03d] hover:text-black">
                <i className='bx bxl-github'></i> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;