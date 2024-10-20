/* eslint-disable @next/next/no-img-element */
"use client";
import { Fragment, useState, useEffect } from "react";
import { useTimeoutFn } from "react-use";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Typewriter } from "react-simple-typewriter";

function IntroSection() {
  const { resolvedTheme } = useTheme();

  const [isShowing, setIsShowing] = useState(false);
  const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 800);

  useEffect(() => {
    resetIsShowing();
  }, [resetIsShowing]);

  const [isEffect, setIsEffect] = useState(false);
  const [, , resetIsEffect] = useTimeoutFn(() => setIsEffect(true), 800);

  useEffect(() => {
    resetIsEffect();
  }, [resetIsEffect]);

  const introData = [
    "Passionate Software Developer!",
    "Master's Student in Computer Science!",
    "Specialist in Web Development!",
    "Data Enthusiast!",
    "AI Explorer!",
    "and a Culinary Adventurer blending flavors and code!!",
  ];

  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl mt-18">
        <div className="mx-auto w-full flex justify-around sm:flex-col">
          <div className="flex-1 lg:pr-8 lg:pt-4">
            <div className="flex justify-center pl-4">
              <div className="w-full">
                <h2 className="text-lg sm:text-xl py-4 mt-4 sm:pt-0 lg:text-base xl:text-lg font-semibold leading-6">
                  Hey!!
                </h2>
                <div className="py-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {"I'm Ashritha"}
                </div>
                <div className="pt-4 pb-2 text-2xl sm:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white">
                  <Typewriter
                    words={introData}
                    loop={5}
                    cursor
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={1000}
                  />
                </div>

                <div className="mt-14">
                  <div className="flex mt-14 sm:justify-between sm:mt-10">
                    <Link
                      href="mailto:ashrithabattula1@gmail.com"
                      target="_blank"
                      className="mr-5 hover:text-gray-900 dark:hover:text-sky-300"
                    >
                      {/* Commenting out the icon part for now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 0h12a1 1 0 0 1 1 1v.5l-6 3.5-6-3.5V5a1 1 0 0 1 1-1zm0 9h12a1 1 0 0 1 1-1V7l-6 3.5-6-3.5v5a1 1 0 0 1 1 1z" />
                      </svg>
                      */}
                      <span>Email Me</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
