const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const resumeData = {
  workExperience:
    "Shalini Sharma is a 4th-year Electronics and Communication Engineering student at NIT Patna. She has experience in problem-solving and web development using the MERN stack.",
  skills: [
    "Problem Solving",
    "Web Development",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
  ],
  projects: [
    {
      name: "Food Delivery Website",
      description:
        "Created a responsive front-end using React.JS, implemented cart functionality, and hosted on Netlify.",
    },
    {
      name: "Country Details Website",
      description:
        "Developed a website to fetch country details using the REST Countries API, hosted on Netlify.",
    },
    {
      name: "Contact App",
      description:
        "Developed a full-stack app for managing contacts with JWT authentication, hosted on Netlify and Render.",
    },
  ],
  certifications: [
    "Gold Medal in Badminton (Women Intramural)",
    "Completed 400+ coding problems on platforms like LeetCode, GFG, CodeChef.",
  ],
};

// Route to handle user queries
app.post("/api/chat", (req, res) => {
  const { inp } = req.body; // Destructure query from request body

  if (!inp) {
    return res.status(400).json({ answer: "No input received" }); // If query is undefined or empty
  }

  const query = inp.toLowerCase();

  let response = "Sorry, I couldn't understand that.";

  if (
    query.includes("work experience") ||
    query.includes("work experiences") ||
    query.includes("workexperience") ||
    query.includes("workexperiences")
  ) {
    response = `Work Experience: ${resumeData.workExperience}`;
  } else if (query.includes("skills") || query.includes("skill")) {
    response = `Skills: ${resumeData.skills.join(", ")}`;
  } else if (query.includes("projects") || query.includes("project")) {
    response =
      "Projects: " +
      resumeData.projects.map((p) => `${p.name}-> ${p.description}`).join("; ");
  } else if (
    query.includes("certifications") ||
    query.includes("certification") ||
    query.includes("certificate")
  ) {
    response = "Certifications: " + resumeData.certifications.join("; ");
  }

  res.json({ answer: response });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
