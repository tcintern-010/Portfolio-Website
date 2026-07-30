import { useState } from 'react';

function Contact({ email, phone, location, socials }) {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const response = await fetch('https://formspree.io/f/maqrqbje', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <footer className="contact py-[100px] px-[9%] text-white bg-[#171b21]" id="contact">
      <div className="contact-container flex flex-wrap gap-[50px] justify-between">
        <div className="contact-info flex-1 min-w-[280px]">
          <h2 className="heading text-3xl mb-[50px] text-left">Get In <span className="text-[#7cf03d]">Touch</span></h2>
          <p className="text-[#ccc] mt-[15px] mb-[25px] leading-[1.6]">Feel free to reach out for collaborations,
            opportunities, or just to say hi.</p>
          <div className="info-item flex items-center gap-3 mb-5 text-base">
            <i className='bx bx-envelope text-xl text-[#7cf03d]'></i>
            <span>{email}</span>
          </div>
          <div className="info-item flex items-center gap-3 mb-5 text-base">
            <i className='bx bx-phone text-xl text-[#7cf03d]'></i>
            <span>{phone}</span>
          </div>
          <div className="info-item flex items-center gap-3 mb-5 text-base">
            <i className='bx bx-map text-xl text-[#7cf03d]'></i>
            <span>{location}</span>
          </div>

          <p className="follow-label text-[13px] text-[#999] mt-5 mb-2 uppercase tracking-[1px]">Follow me</p>
          <div className="sci flex">
            {socials.map((social) => (
              <a key={social.href} href={social.href} target="_blank" rel="noreferrer" className="inline-block p-2.5 mr-2.5 border-2 border-[#7cf03d] rounded-full text-xl text-[#7cf03d]
                transition-all duration-300 hover:bg-[#7cf03d] hover:text-black hover:shadow-[0_0_10px_#7cf03d]">
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form flex-1 min-w-[280px]">
          {submitted ? (
            <div className="bg-[#262b34] p-[25px] rounded-[10px] border-l-[3px] border-[#7cf03d] text-[#7cf03d] font-medium">
              Thanks {formData.name || "there"}! Your message has been sent successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
              <div className="form-row flex gap-[15px]">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="flex-1 min-w-0 bg-[#262b34] border-none outline-none p-[14px] rounded-md
                    text-white font-poppins text-sm resize-none focus:shadow-[0_0_0_2px_#7cf03d]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 min-w-0 bg-[#262b34] border-none outline-none p-[14px] rounded-md
                    text-white font-poppins text-sm resize-none focus:shadow-[0_0_0_2px_#7cf03d]"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#262b34] border-none outline-none p-[14px] rounded-md text-white
                  font-poppins text-sm resize-none min-h-[140px] focus:shadow-[0_0_0_2px_#7cf03d]"
              ></textarea>
              <input type="hidden" name="_subject" value="New message from Portfolio site" />
              <button
                type="submit"
                className="self-start bg-[#7cf03d] shadow-[0_0_10px_#7cf03d] text-black text-base font-medium
                  px-[30px] py-2.5 border-none rounded-md cursor-pointer font-poppins transition-all duration-300"
              >
                Send Message
              </button>
              {error && (
                <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </footer>
  );
}


export default Contact;