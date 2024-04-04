"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import TransitionLink from "./TransitionLink";

const HeroSection = () => {
  return (
    <section className="container py-10 lg:py-16 flex">
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-teal-500">
              Hello, I'm
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Islam",
                1000,
                "Full-Stack Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            With a passion for creating seamless user experiences and a
            dedication to modern, clean design, I craft full-stack solutions
            that bring your digital visions to life. Let's build something great
            together.
          </p>
          <div className="flex items-center justify-center sm:items-start sm:justify-normal gap-5">
            <Button>
              <TransitionLink href="/contact">Hire Me</TransitionLink>
            </Button>
            <Button>
              <Link href="/">Download CV</Link>
            </Button>
          </div>
        </motion.div>
        <div className="flex items-center justify-center mt-10 sm:w-max">
          <Avatar className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <AvatarImage src="https://i.ibb.co/h9Vx4Lv/image.png" />
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;