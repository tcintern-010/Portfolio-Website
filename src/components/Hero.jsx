function Hero({ name, title, description, resumeLink, image, socials }) {
  return (
    <section className="home flex items-center justify-between gap-10 min-h-screen mt-[15px] px-[9%] pt-[60px] text-white
               max-lg:flex-col max-lg:text-center max-lg:pt-[100px] max-lg:px-[5%] max-lg:pb-10
               max-[576px]:pt-[140px] max-[576px]:px-[6%] max-[576px]:pb-10" id="home">

      <div className="home-info flex-1 max-w-[600px] max-lg:order-2 max-lg:mt-10">
        <h1 className="font-bold text-[32px] max-[576px]:text-[28px]">{name}</h1>
        <h3 className="font-bold text-[18.72px] max-[576px]:text-[18px]">{title}</h3>
        <p className="text-base mt-2.5 mb-[25px] text-justify max-[576px]:text-sm">
          {description}
        </p>

        <div className="btn-sci flex items-center max-lg:justify-center">
          <a href={resumeLink}
            target="_blank" rel="noreferrer" className="inline-block bg-[#7cf03d] shadow-[0_0_10px_#7cf03d] text-black text-[18px] font-medium
              px-[30px] py-2.5 rounded-md transition-all duration-300
              max-[576px]:text-base max-[576px]:px-[22px] max-[576px]:py-2">
            Download Resume
          </a>
          <div className="sci ml-[25px]">
            {socials.map((social) => (
              <a key={social.href} href={social.href} target="_blank" rel="noreferrer" className="inline-block p-2.5 mx-2 border-2 border-[#7cf03d] rounded-full text-[20px] text-[#7cf03d]
                  transition-all duration-300
                  hover:bg-[#7cf03d] hover:text-black hover:shadow-[0_0_10px_#7cf03d]
                  max-[576px]:p-2 max-[576px]:mx-[5px] max-[576px]:text-base">
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="home-img shrink-0 max-lg:order-1">
        <div className="img-box relative w-[20vw] h-[20vw] rounded-full bg-bg-main z-[1]
              max-lg:w-[45vw] max-lg:h-[45vw]
              max-[576px]:w-[60vw] max-[576px]:h-[60vw]
              before:content-[''] before:absolute before:-inset-1.5 before:rounded-full before:z-[-1]
              before:[background:conic-gradient(#7cf03d,#1f242d,#7cf03d,#1f242d,#7cf03d)]
              before:animate-[spin_4s_linear_infinite]">
          <div className="img-item w-full h-full">
            <img src={image} alt={name}
              className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;