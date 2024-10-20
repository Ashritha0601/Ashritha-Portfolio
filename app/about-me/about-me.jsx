import Link from "next/link";

export default function AboutMeComponent() {
  return (
    <>
      <h2 className="text-3xl font-bold mt-4 py-2 sm:text-4xl">About Me</h2>
      <div className="mx-auto max-w-6xl lg:max-w-6xl">
        <blockquote className="text-xl italic hover:bg-opacity-90">
          <p className="my-8 text-justify">
            {`" As an ambitious Master's student in Computer Science at the University of North Texas, I specialize in web application development and data analysis. My expertise includes programming in Python, Java, and various data analysis tools like Power BI and Tableau. I am passionate about solving complex problems, continuously learning machine learning options on Google Cloud, and contributing to innovative projects. Let's work together to turn ideas into impactful solutions with creativity, precision, and a focus on technological excellence."`}
          </p>
        </blockquote>
      </div>
    </>
  );
}
