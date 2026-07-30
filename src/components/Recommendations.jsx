function Recommendations({ recommendations }) {
  return (
    <section className="recommendations py-[100px] px-[9%] text-white" id="recommendations">
      <h2 className="heading text-center text-3xl mb-[50px]">
        My <span className="text-[#7cf03d]">Recommendations</span>
      </h2>
      <div className="recommendations-container grid gap-[30px] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] mb-[60px]"
        id="recommendationsContainer">
        {recommendations.map((rec) => (
          <div key={rec.author} className="recommendation-box bg-[#262b34] p-[25px] rounded-[10px] border-l-[3px] border-[#7cf03d]
                transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,1)]">
            <p className="rec-text text-sm text-[#ccc] leading-[1.6] mb-[15px] italic">{rec.text}</p>
            <h4 className="rec-author text-sm text-[#7cf03d] font-medium">{rec.author}</h4>
          </div>
        ))}
      </div>

      <h3 className="rec-form-heading text-center text-2xl mb-[25px]">Leave a Recommendation</h3>
      <form className="recommendation-form max-w-[600px] mx-auto flex flex-col gap-[15px]" id="recommendationForm">
        <div className="form-row">
          <input type="text" id="recName" placeholder="Your Name" required className="w-full bg-[#262b34] border-none outline-none p-[14px] rounded-md text-white
                font-poppins text-sm resize-none focus:shadow-[0_0_0_2px_#7cf03d]" />
        </div>
        <textarea id="recText" placeholder="Write your recommendation..." required className="w-full bg-[#262b34] border-none outline-none p-[14px] rounded-md text-white
                font-poppins text-sm resize-none min-h-[120px] focus:shadow-[0_0_0_2px_#7cf03d]"></textarea>
        <button type="submit" className="self-center bg-[#7cf03d] shadow-[0_0_10px_#7cf03d] text-black text-base font-medium
                px-[30px] py-2.5 border-none rounded-md cursor-pointer font-poppins transition-all duration-300
                hover:-translate-y-[3px]">
          Submit Recommendation
        </button>
      </form>

      <div id="popupMessage" className="popup-message fixed bottom-[30px] right-[30px] bg-[rgba(38,43,52,0.85)] backdrop-blur-[8px]
              text-[#7cf03d] px-[25px] py-[15px] border border-[#7cf03d] rounded-lg font-medium text-[15px]
              shadow-[0_0_15px_rgba(124,240,61,0.4)] opacity-0 invisible translate-y-5
              transition-all duration-[400ms] z-[999]
              [&.show]:opacity-100 [&.show]:visible [&.show]:translate-y-0">
        Recommendation submitted successfully!
      </div>
    </section>
  );
}

export default Recommendations;