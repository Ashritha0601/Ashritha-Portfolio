/* eslint-disable @next/next/no-img-element */
function ProjectCard(props) {
  const { name, techStack, description } = props.projectDetails;

  return (
    <div className="w-72 h-192 shadow-lg flex flex-col justify-center items-center m-8 p-6 relative group dark:border-2 border-white rounded">
      <div className="text-[20px] text-black dark:text-white font-bold py-4">
        {name}
      </div>
      <div className="text-[14px] text-black dark:text-white font-semibold text-center">
        {techStack}
      </div>
      <div className="text-[12px] text-black dark:text-white py-4">
        {description}
      </div>
    </div>
  );
}

export default ProjectCard;
