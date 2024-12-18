import React, { useState } from "react";

function App() {
  const subjects = {
    "1st Year": [
      { name: "Mathematics I", link: "https://youtube.com" },
      { name: "Physics", link: "https://youtube.com" },
      { name: "Chemistry", link: "https://youtube.com" },
      { name: "Programming Basics", link: "https://youtube.com" },
      { name: "Engineering Drawing", link: "https://youtube.com" },
      { name: "Communication Skills", link: "https://youtube.com" },
      { name: "Digital Electronics", link: "https://youtube.com" },
      { name: "Environmental Studies", link: "https://youtube.com" },
      { name: "Applied Mechanics", link: "https://youtube.com" },
      { name: "Introduction to IT", link: "https://youtube.com" },
      { name: "Linear Algebra", link: "https://youtube.com" },
      { name: "Discrete Math", link: "https://youtube.com" },
    ],
    "2nd Year": [
      { name: "Data Structures", link: "https://youtube.com" },
      { name: "OOP with C++", link: "https://youtube.com" },
      { name: "DBMS", link: "https://youtube.com" },
      { name: "Computer Networks", link: "https://youtube.com" },
      { name: "Operating Systems", link: "https://youtube.com" },
      { name: "Software Engineering", link: "https://youtube.com" },
      { name: "Theory of Computation", link: "https://youtube.com" },
      { name: "Web Development", link: "https://youtube.com" },
      { name: "Java Programming", link: "https://youtube.com" },
      { name: "Data Analytics", link: "https://youtube.com" },
      { name: "Mobile Computing", link: "https://youtube.com" },
      { name: "Networking Basics", link: "https://youtube.com" },
    ],
    Programming: [
      { name: "C Language", link: "https://youtube.com" },
      { name: "C++ Language", link: "https://youtube.com" },
      { name: "Python Programming", link: "https://youtube.com" },
      { name: "ReactJS", link: "https://youtube.com" },
      { name: "NodeJS", link: "https://youtube.com" },
      { name: "Machine Learning", link: "https://youtube.com" },
      { name: "Artificial Intelligence", link: "https://youtube.com" },
      { name: "Data Visualization", link: "https://youtube.com" },
      { name: "API Development", link: "https://youtube.com" },
      { name: "Cloud Computing", link: "https://youtube.com" },
      { name: "Docker & Kubernetes", link: "https://youtube.com" },
      { name: "Git and GitHub", link: "https://youtube.com" },
    ],
    Aptitude: [
      { name: "Quantitative Aptitude", link: "https://youtube.com" },
      { name: "Logical Reasoning", link: "https://youtube.com" },
      { name: "Verbal Ability", link: "https://youtube.com" },
      { name: "Puzzles", link: "https://youtube.com" },
      { name: "General Knowledge", link: "https://youtube.com" },
      { name: "Data Interpretation", link: "https://youtube.com" },
      { name: "Numerical Problems", link: "https://youtube.com" },
      { name: "Critical Thinking", link: "https://youtube.com" },
      { name: "Arithmetic", link: "https://youtube.com" },
      { name: "Probability", link: "https://youtube.com" },
      { name: "Graph Problems", link: "https://youtube.com" },
      { name: "Geometry", link: "https://youtube.com" },
    ],
  };

  // Map display names to the corresponding keys in the subjects object
  const categoryMap = {
    "Core Subjects for 1st-Year Learners": "1st Year",
    "Core Subjects for 2nd-Year Learners": "2nd Year",
    "Dive Into Coding Fundamentals": "Programming",
    "Master Logical and Quantitative Aptitude": "Aptitude",
  };

  // Image mapping for each category
  const categoryImages = {
    "Core Subjects for 1st-Year Learners": "/images/academics.png",
    "Core Subjects for 2nd-Year Learners": "/images/academics.png",
    "Dive Into Coding Fundamentals": "/images/programming.png",
    "Master Logical and Quantitative Aptitude": "/images/aptitude.png",
  };

  const [visibleSection, setVisibleSection] = useState("");

  const toggleSection = (category) => {
    setVisibleSection((prev) => (prev === category ? "" : category));
  };

  return (
    <div className="bg-dark text-light">
      <nav className="navbar navbar-expand-lg bg-primary text-white px-3">
        <span className="navbar-brand fw-bold fs-4 zoom-on-hover">
          🎓 INSIGHT - Simplifying Success
        </span>
      </nav>

      <div className="container py-5">
        <div className="row g-4">
          {Object.keys(categoryMap).map((category, index) => (
            <div className="col-md-6" key={index}>
              <div className="card bg-secondary text-light shadow">
                <img
                  src={categoryImages[category]}
                  alt={category}
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{category}</h5>
                  <button
                    className="btn btn-outline-light mt-2"
                    onClick={() => toggleSection(category)}
                  >
                    {visibleSection === category
                      ? "Hide Subjects"
                      : "Show Subjects"}
                  </button>
                  {visibleSection === category && (
                    <table className="table table-dark mt-3">
                      <tbody>
                        {subjects[categoryMap[category]].map((subject, idx) => (
                          <tr key={idx}>
                            <td>
                              <a
                                href={subject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-warning text-decoration-none"
                              >
                                {subject.name}
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-primary text-center py-3 text-light">
        &copy; 2024 INSIGHT | All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
