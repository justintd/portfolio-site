import React, { useState } from "react"

const Hero = () => {
  return (
    <section className="container block flex items-center mx-auto h-screen">
      <div className="flex flex-col justify-center text-melon w-full mx-40">
        <div>
          <h1 className="mb-4 text-xl font-mono">Hi I'm,</h1>
        </div>
        <div>
          <h2 className="mb-8 text-7xl font-bold font-sans text-white leading-none">
            Justin Dinh.
          </h2>
        </div>
        <div>
          <h2 className="text-7xl pb-2 pr-1 font-bold font-sans text-black bg-melon w-auto inline-block leading-none">
            I build websites.
          </h2>
        </div>
        <div>
          <p className="my-8 text-silver text-xl w-120">
            I'm an IT professional with a newfound passion in web development.
          </p>
        </div>
        <div>
          <button className="px-5 py-2 rounded-sm border focus:outline-none font-mono text-melon tracking-wide hover:bg-melon hover:bg-opacity-25 transition duration-300">
            About Me
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
