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
      <span className="uppercase text-3xl lg:text-2xl font-bold gradient-text mb-8 lg:mb-0 rotate-0 lg:-rotate-90">
        Get Started!
      </span>
      <div className="flex flex-col lg:flex-row lg:ml-20 lg:gap-36">
        <div className="mb-5 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl gradient-text mb-5 lg:mb-10">
            Contact me
          </h1>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:ayushman12baghel@gmail.com"
              className="text-white font-mono underline text-lg lg:text-2xl"
            >
              ayushman12baghel@gmail.com
            </a>
            <a
              href="tel:+919179414158"
              className="text-white font-mono underline text-lg lg:text-2xl"
            >
              +91 9179414158
            </a>
          </div>
          <div className="flex gap-2 mt-2">
            <a href="https://github.com/ayushman12baghel" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="text-white text-2xl hover:text-purple-500 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/ayushmanbaghel12" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="text-white text-2xl hover:text-purple-500 transition-colors" />
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
              placeholder="Enter your name"
              required
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <textarea
              name="message"
              id="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
              placeholder="Enter your message"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-3 py-2 text-lg lg:text-2xl bg-purple-500 hover:bg-purple-600 disabled:bg-gray-500 border font-bold text-white rounded-lg transition-colors"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <p className={`mt-3 text-center ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
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
