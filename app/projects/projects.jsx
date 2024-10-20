import ProjectCard from "../components/projectCard";

function ProjectsComponent() {
  const projects = [
    {
      name: "POSTER EVALUATION USING MACHINE",
      techStack: "Python, Image Processing, Concurrent Processing",
      description:
        "Developed an image processing and analysis application focused on evaluating posters, extracting information, and resolving functional and non-functional bugs.",
    },
    {
      name: "LOAN PREDICTION SYSTEM",
      techStack: "Logistic Regression, SVM, Naive Bayes",
      description:
        "Categorized data for loan approval and rejection using logistic regression, SVM, and Naive Bayes methods, with thorough comparison of methods and outcomes.",
    },
    {
      name: "E-COMMERCE WEB SCRAPING",
      techStack: "React, Node.js, Puppeteer",
      description:
        "Created a web application to scrape product information including name, price, and URL for analytical and decision-making purposes.",
    },
    {
      name: "DRIVER DROWSINESS MONITORING SYSTEM",
      techStack: "OpenCV, SVM, Visual Studio",
      description:
        "Developed a system to predict driver fatigue in real-time using machine learning, achieving a 90.24% accuracy in drowsiness detection.",
    },
  ];
  
  return (
    <>
      <h2 className="text-3xl mx-auto max-w-6xl font-bold mt-4 py-2 sm:text-2xl">
        Projects
      </h2>
      <div className="mx-auto max-w-6xl lg:max-w-6xl flex justify-center flex-wrap sm:flex-nowrap sm:flex-col">
        {projects.map((project, index) => {
          return <ProjectCard key={index} projectDetails={project} />;
        })}
      </div>
    </>
  );
}

export default ProjectsComponent;
