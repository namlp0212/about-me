"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { ProfileHero } from "../../public/assets";
import { IntroImg } from "../../public/assets";
import Head from "next/head";

const Hero = () => {
  return (
    <>
      <Head>
        <link rel="preload" href={ProfileHero.src} as="image" />
      </Head>
      <section className="container py-10 lg:py-16 flex">
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center md:text-left justify-self-start"
          >
            <h1 className="dark:text-white font-bold mb-4 text-2xl md:text-4xl sm:text-5xl lg:text-6xl lg:leading-normal dark:font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-800">
                Xin chào, Mình là
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Nam",
                  1000,
                  "một Software Engineer",
                  1000,
                  "một Personal Trainer",
                  1000,
                  // "a UI/UX Designer",
                  // 1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-lg mb-6 lg:text-xl">
              Đây là trang web mình xây dựng với mục đích ghi lại những trải nghiệm trong cuộc sống, 
              từ công việc, học hành, đến những chuyện về bạn bè, gia đình. 
              Cảm ơn bạn đã ghé qua ^^.
            </p>
            {/* <div className="flex items-center justify-center md:items-start md:justify-start gap-5">
              <Button>
                <Link href="/contact">Hire Me</Link>
              </Button>
              <Button>
                <a
                  href="/assets/cv/Islam_Belamri.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </Button>
            </div> */}
          </motion.div>
          <div className="flex items-center justify-center mt-10 md:w-max">
            <Image
              className="object-cover w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"
              src={IntroImg}
              width={400}
              height={400}
              priority
              loading="eager"
              alt="Profile Picture"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;