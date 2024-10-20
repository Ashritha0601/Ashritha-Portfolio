"use client";

const experience = [
  {
    companyName: "Soul Page IT Solutions Pvt Ltd",
    title: "Software Engineer Intern",
    duration: "Dec 2022 – May 2023",
    location: "Hyderabad, India",
    description: [
      "Developed an image classification model, enhancing skills in data science and machine learning.",
      "Utilized Python to implement machine learning algorithms, optimizing image processing speed and addressing functional and non-functional requirement bugs.",
      "Enhanced data visualization capabilities using BI tools to support decision-making processes.",
      "Collaborated on projects that involved image processing and machine learning techniques, working effectively with cross-functional teams to interpret data analytics results.",
    ],
    logo: "/assets/images/soulpageLogo.jpeg",
  },
  {
    companyName: "University of North Texas",
    title: "Master's in Computer Science",
    duration: "2022 – Present",
    location: "Denton, Texas",
    description: [
      "Engaged in hands-on coursework including Big Data, Machine Learning, and Software Engineering.",
      "Contributed to research projects and capstone work related to image processing and predictive analysis.",
    ],
    logo: "/assets/images/untlogo.png",
  },
  {
    companyName: "Jawaharlal Nehru Technological University",
    title: "Bachelor of Technology: Computer Science",
    duration: "2018 – 2022",
    location: "Hyderabad, India",
    description: [
      "Completed a 4-year program, specializing in data structures, algorithms, and software development.",
      "Awarded a merit scholarship for academic excellence throughout the program.",
    ],
    logo: "/assets/images/JntuhLogo.jpeg",
  },
];

function ExperienceComponent() {
  return (
    <>
      <h2 className="text-3xl mx-auto max-w-6xl font-bold mt-4 py-2 sm:text-2xl">
        Experience
      </h2>
      <section className="mx-auto max-w-6xl lg:max-w-6xl">
        {experience.map((exp, index) => (
          <article
            key={index}
            className="mt-8 flex shadow-lg rounded-xl p-8 w-full sm:flex-col dark:shadow-white"
          >
            <div className="sm:flex-row sm:w-full sm:border-0 sm:mb-4 dark:border-white">
              <div className="flex items-center sm:flex-col sm:justify-center">
                <img
                  src={exp.logo}
                  alt={exp.companyName}
                  className="w-auto h-16 object-cover shadow-xl ring-1 ring-gray-400/10 sm:flex-1 sm:mb-0 dark:ring-white sm:object-none sm:h-auto"
                  width={100}
                  height={100}
                />
                <div className="ml-8 sm:ml-0 sm:mt-4 sm:items-center">
                  <p className="text-lg font-semibold sm:text-m">
                    {exp.companyName} -{" "}
                    <span className="font-medium text-base">
                      {exp.location}
                    </span>
                  </p>
                  <p className="italic sm:text-sm">{exp.duration}</p>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-2xl font-bold mt-1 sm:text-xl">
                  {exp.title}
                </p>
              </div>
              <div className="pt-4">
                <ul className="list-disc pl-5">
                  {exp.description.map((desc, index) => (
                    <li key={index} className="sm:text-m">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default ExperienceComponent;
