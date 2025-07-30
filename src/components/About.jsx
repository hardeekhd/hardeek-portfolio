function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 py-10 md:py-20">

        {/* Text Section */}
        <div className="about-text max-w-xl text-center md:text-left space-y-4">
          <h1 className="greeting text-3xl md:text-4xl font-semibold text-white">
            Hi, I am
          </h1>

          <h2 className="name text-4xl md:text-5xl font-bold text-purple-500">
            Hardeek Khadilkar
          </h2>

          <h3 className="role text-xl md:text-2xl font-medium text-gray-300">
            I am a <span className="typing-text text-purple-400"></span>
          </h3>

          <p className="description text-base md:text-lg text-gray-400">
            I am a full-stack developer with over 1 year of experience building scalable web applications.
            Proficient in the MERN stack and other modern tools, I craft efficient, user-centric solutions
            across both frontend and backend.
          </p>

          <a
            href="/Hardeek_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Profile Image */}
        <div className="about-image flex justify-center">
          <div className="image-wrapper w-64 h-64 rounded-full border-4 border-purple-700 overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Hardeek Khadilkar"
              className="profile-img w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
