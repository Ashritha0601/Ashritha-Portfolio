import AboutMeComponent from "./about-me";

export default function AboutMe() {
  return (
    <div className="text-black dark:text-white bg-white dark:bg-black">
      <div className="md:container md:mx-auto flex min-h-screen flex-col items-center justify-between">
        <section className="d-block px-6 py-8 sm:py-4 lg:px-8">
          <div className="p-2 mt-24">
            <AboutMeComponent />
          </div>
        </section>
      </div>
    </div>
  );
}