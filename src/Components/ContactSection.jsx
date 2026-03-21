import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    // Create mailto URL with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoUrl = `mailto:ayushman12baghel@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    try {
      // Open user's default email client
      window.open(mailtoUrl, '_blank');
      
      // Simulate loading for better UX
      setTimeout(() => {
        setStatus('Email client opened! Please send the email from your email app.');
        setFormData({ name: '', email: '', message: '' });
        setIsLoading(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error:', error);
      setStatus('Could not open email client. Please contact directly at ayushman12baghel@gmail.com');
      setIsLoading(false);
    }
  };
  return (
    <div
      data-aos="fade-left"
      className="flex flex-col lg:flex-row lg:items-center mb-20 lg:mb-36 "
    >
      <span className="uppercase text-3xl lg:text-2xl font-bold text-[#e2aa53] font-mono mb-8 lg:mb-0 rotate-0 lg:-rotate-90">
        // Contact
      </span>
      <div className="flex flex-col lg:flex-row lg:ml-20 lg:gap-36">
        <div className="mb-5 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl text-[#4ec9b0] font-mono mb-5 lg:mb-10">
            pingSystem()
          </h1>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:ayushman12baghel@gmail.com"
              className="text-[#dcdcaa] hover:text-[#e2aa53] transition-colors font-mono text-sm lg:text-lg"
            >
              <span className="text-[#569cd6]">String</span> email = <span className="text-[#ce9178]">"ayushman12baghel@gmail.com"</span>;
            </a>
            <a
              href="tel:+919179414158"
              className="text-[#dcdcaa] hover:text-[#e2aa53] transition-colors font-mono text-sm lg:text-lg"
            >
              <span className="text-[#569cd6]">long</span> phone = <span className="text-[#b5cea8]">9179414158L</span>;
            </a>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/ayushman12baghel" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="text-[#d4d4d4] text-3xl hover:text-[#e2aa53] transition-colors hover:scale-110" />
            </a>
            <a href="https://linkedin.com/in/ayushmanbaghel12" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="text-[#d4d4d4] text-3xl hover:text-[#e2aa53] transition-colors hover:scale-110" />
            </a>
          </div>
        </div>
        <div>
          <form className="flex flex-col p-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Scanner.nextLine() // Enter your name"
              required
              className="bg-[#1e1e1e] p-4 outline-none border focus:border-[#4ec9b0] focus:pl-6 transition-all duration-300 rounded border-gray-700/50 text-[#ce9178] font-mono text-sm lg:text-base mb-5 lg:mb-8 w-full lg:w-[35vw] shadow-inner placeholder-gray-500 hover:border-gray-500"
            />
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Scanner.nextLine() // Enter your email"
              required
              className="bg-[#1e1e1e] p-4 outline-none border focus:border-[#4ec9b0] focus:pl-6 transition-all duration-300 rounded border-gray-700/50 text-[#ce9178] font-mono text-sm lg:text-base mb-5 lg:mb-8 w-full lg:w-[35vw] shadow-inner placeholder-gray-500 hover:border-gray-500"
            />
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Scanner.nextLine() // Write your message here"
              required
              className="bg-[#1e1e1e] p-4 outline-none border focus:border-[#4ec9b0] focus:pl-6 transition-all duration-300 rounded border-gray-700/50 text-[#ce9178] font-mono text-sm lg:text-base mb-5 lg:mb-8 w-full lg:w-[35vw] shadow-inner placeholder-gray-500 hover:border-gray-500 resize-none"
            ></textarea>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="relative px-8 py-3 bg-[#2d2d2d] hover:bg-[#3d3d3d] text-[#d4d4d4] font-mono rounded transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-600/50"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2 text-sm">
                  <svg className="animate-spin h-4 w-4 text-[#4ec9b0]" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Compiling...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2 text-sm text-[#4ec9b0]">
                  System.out.send();
                </span>
              )}
            </button>
            {status && (
              <p className={`mt-4 font-mono text-sm ${status.includes('Error') ? 'text-red-400' : 'text-green-400'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
