


import React, { useState, useRef } from "react";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import TestComponent from "./components/TestComponent";
import FreelancerSlider from "./components/Slider";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null); // Selected quiz topic state
  const [activePage, setActivePage] = useState('home'); // State to track active page
  const quizSectionRef = useRef(null); // Ref for quiz section

  // Quiz topics
  const topics = [
    "ML", "MERN", "WebDevelopment", "JavaScript", "Python", "Rust",
    "Ruby", "Django", "OOP", "DeepLearning"
  ];

  // Freelancer data with dummy information
  const freelancers = [
    { Domain : "Rust",
      name: "John Doe", 
      skills: "Web Development", 
      image: "web development.jpeg", 
      bio: "John is a seasoned web developer with expertise in front-end and back-end technologies. He loves creating user-friendly websites.",
      experience: 5,
      contact: "johndoe@example.com"
    },
    { Domain : "Python",
      name: "Jane Smith", 
      skills: "Python", 
      image: "python.jpg", 
      bio: "Jane is a Python expert specializing in machine learning and data science. She has worked on numerous AI projects.",
      experience: 4,
      contact: "janesmith@example.com"
    },
    { Domain : "JavaScript",
      name: "Alice Johnson", 
      skills: "JavaScript", 
      image: "javascript.jpeg", 
      bio: "Alice is passionate about JavaScript and has worked on various full-stack web applications using frameworks like React and Node.js.",
      experience: 3,
      contact: "alicejohnson@example.com"
    },
    { Domain : "Ruby",
      name: "Bob Brown", 
      skills: "Ruby", 
      image: "ruby.jpg", 
      bio: "Bob has been building scalable web applications using Ruby on Rails for over 6 years.",
      experience: 6,
      contact: "bobbrown@example.com"
    },
    { Domain : "Django",
      name: "Emily Davis", 
      skills: "Django", 
      image: "django.jpeg", 
      bio: "Emily is a Django developer with experience building secure and robust web applications.",
      experience: 5,
      contact: "emilydavis@example.com"
    },
    { Domain : "Rust",
      name: "Michael Wilson", 
      skills: "Rust", 
      image: "rust.jpeg", 
      bio: "Michael is an expert in Rust and systems programming, known for building high-performance applications.",
      experience: 7,
      contact: "michaelwilson@example.com"
    },
    { Domain : "Machine Learning",
      name: "Sophia Taylor", 
      skills: "Machine Learning", 
      image: "machine learning.jpeg", 
      bio: "Sophia specializes in machine learning and has developed AI models for various industries.",
      experience: 4,
      contact: "sophiataylor@example.com"
    },
    { Domain : "MERN Stack",
      name: "James Garcia", 
      skills: "MERN Stack", 
      image: "MERN.jpg", 
      bio: "James is a MERN Stack expert, developing modern web applications with React, Node.js, and MongoDB.",
      experience: 3,
      contact: "jamesgarcia@example.com"
    },
    { Domain : "Deep Learning",
      name: "Isabella Martinez", 
      skills: "Deep Learning", 
      image: "deep learning.jpeg", 
      bio: "Isabella is a deep learning expert who works on cutting-edge AI technologies.",
      experience: 6,
      contact: "isabellamartinez@example.com"
    },
    { Domain : "Object-Oriented Programming",
      name: "Daniel Lee", 
      skills: "Object-Oriented Programming", 
      image: "oop.png", 
      bio: "Daniel has expertise in object-oriented programming, building modular and scalable applications.",
      experience: 8,
      contact: "daniellee@example.com"
    }
  ];

  // Handle 'Take Test' button click to navigate to quiz section
  const handleTakeTest = () => {
    setActivePage('home'); // Ensure user is on the home page
    setSelectedTopic(null); // Clear any previously selected topic
    quizSectionRef.current?.scrollIntoView({ behavior: 'smooth' }); // Scroll to quiz section
  };

  // Function to render pages based on the current active page
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <div>
            {/* Show Freelancer Slider only if no topic is selected */}
            {!selectedTopic && <FreelancerSlider freelancers={freelancers} />}
            <div ref={quizSectionRef}>
              {/* Show Home or TestComponent based on selectedTopic */}
              {!selectedTopic ? (
                <Home topics={topics} setSelectedTopic={setSelectedTopic} />
              ) : (
                <TestComponent selectedTopic={selectedTopic} />
              )}
            </div>
          </div>
        );
      case 'about':
        return <About />;
      case 'contact':
        return <ContactUs />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black py-10">
      <div className="container mx-auto">
        {/* Navbar */}
        <nav className="text-black items-center px-6 py-3 font-medium">
          <div className="container mx-0 px-7 flex justify-between">
            <div className="mx-4">
              <img src="/logo1.png" alt="Logo" height={35} width={120}/>
            </div>
            <ul className="flex space-x-4">
              <li>
                <button 
                  onClick={() => setActivePage('home')} 
                  className="hover:underline text-white font-bold"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActivePage('about')} 
                  className="hover:underline text-white font-bold"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActivePage('contact')} 
                  className="hover:underline text-white font-bold"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={handleTakeTest} 
                  className="hover:underline text-white font-bold"
                >
                  Take Test
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <hr className="border-white border-b-0" />

        {/* Render active page content */}
        <div className="mt-10">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;



