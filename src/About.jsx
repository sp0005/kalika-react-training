import React from 'react';

const About = () => {
  return (
    <div className="bg-[#0F172A] text-white py-10 px-6 flex justify-center items-center flex-col h-200" id="about">
      <h2 className="text-3xl font-bold text-center mb-8 border-b-2 border-blue-500 inline-block">
        About Me
      </h2>

      <div className="flex   items-center gap-10">
        
        <img 
          src="/img.jpeg" 
          alt="" 
          className="w-64 h-80 object-cover rounded-xl border-2 border-blue-500"
        />

        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-3">
            Full Stack Developer
          </h3>
          <p className="text-gray-300 mb-4 max-w-md">
            I'm a full stack developer with a strong interest in front-end and back-end technologies.
            My area of expertise is developing reliable, user-focused digital experiences along with 
            effective server-side systems to support them.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-gray-300">
<p><strong>Name:</strong> Sachin Pandey</p>
          <p><strong>Location:</strong> Butwal</p>
          <p><strong>Email:</strong> pandeysachin2062@gmail.com</p>
          <p><strong>Availability:</strong> Freelance / Full-time</p>

          <button className="mt-4 px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-full w-40 text-base animate-bounce">
            Get In Touch
          </button>
</div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
