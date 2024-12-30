import React from "react";
import Chatbot from "./Chatbot";
const App = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen font-sans text-gray-800">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl mt-4 opacity-90">
            Showcasing my skills, projects, and achievements
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">
        {/* Introduction Section */}
        <section className="bg-white shadow-xl rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Introduction
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Hi, I'm Shalini Sharma! I specialize in modern web development,
            focusing on creating responsive, visually appealing, and functional
            web applications.
          </p>
        </section>

        {/* Skills Section */}
        <section className="bg-gradient-to-br from-blue-100 to-purple-50 shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-lg">
            <li className="bg-white shadow-md rounded-lg p-4 text-center">
              MERN Stack
            </li>
            <li className="bg-white shadow-md rounded-lg p-4 text-center">
              Data Structures
            </li>
            <li className="bg-white shadow-md rounded-lg p-4 text-center">
              Algorithms
            </li>
            <li className="bg-white shadow-md rounded-lg p-4 text-center">
              OOPS
            </li>
            <li className="bg-white shadow-md rounded-lg p-4 text-center">
              DBMS
            </li>
            <li className="bg-white shadow-md rounded-lg p-4 text-center">
              Operating System
            </li>
          </ul>
        </section>

        {/* Resume Section */}
        <section className="bg-white shadow-xl rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Resume</h2>
          <a
            href="https://drive.google.com/file/d/13dQqJXPE4RAUK8XHL28QMV6dTS06Ox95/view?usp=drivesdk"
            target="_blank"
            download
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all"
          >
            Download My Resume
          </a>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-50 shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Me</h2>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-around gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/shalini-sharma-4559a2286/"
              target="_blank"
              className="text-blue-800 bg-white hover:text-blue-900 hover:bg-gray-100 text-lg font-medium py-2 px-4 rounded-lg shadow-md transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ShaliniSharma91555"
              target="_blank"
              className="text-gray-800 bg-white hover:text-black hover:bg-gray-100 text-lg font-medium py-2 px-4 rounded-lg shadow-md transition-all"
            >
              GitHub
            </a>
            <a
              href="mailto:shalinisharma91555@gmail.com"
              target="_blank"
              className="text-red-600 bg-white hover:text-red-700 hover:bg-gray-100 text-lg font-medium py-2 px-4 rounded-lg shadow-md transition-all"
            >
              Email
            </a>
          </div>
        </section>

        <Chatbot />
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Shalini Sharma. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
