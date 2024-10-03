"use client";
import React from "react";
import LocationCard from "./LocationCard";
import Connect from "./Connect";
import { SiSocialblade } from "react-icons/si";
import Stacks from "./Stacks";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  const itemVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: () => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    }),
  };
  return (
    <div className="container mt-20 overflow-hidden">
      <AnimatedCharacters
        className="text-4xl text-center font-bold"
        text="About Me"
        type="heading1"
      />
      <div className="flex flex-col xl:flex-row gap-5 w-full mt-10">
        <div className="xl:w-[60%] gap-y-10">
          <div className="flex flex-col md:flex-row gap-5">
            <LocationCard />
            <Connect />
          </div>
          <Stacks />
        </div>
        <motion.div
          variants={itemVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.9 }}
          className="flex flex-col gap-6 border-[1px] xl:w-[500px] rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6"
        >
          <div className="flex items-center gap-2">
            <SiSocialblade className="size-[18px]" />
            <h2 className="text-sm font-light">Bio</h2>
          </div>
          <p className="text-[0.8rem] md:text-[1rem] leading-8">
            Mình năm nay {new Date().getFullYear() - 2000} tuổi. <br/>
            Mình đang làm software engineer và mong muốn được xây dựng các hệ thống lớn. <br />
            Mình thích tập thể dục, đặc biệt là tập gym và đá bóng. Một thứ là ký luật, một thứ là khát khao chiến thắng. <br />
            Mình thích đọc sách, ví sách mang đến cho mình những vùng đắt mới. <br />
            Mình không thích đồ ngọt, không thích đồ nhiều dầu mỡ, thích cơm mẹ mình nấu. <br/>
            Bộ phim mình thích nhất, ca sỹ mình thích nhât, quyển sách mình thích nhât, ... <br/>
            Có rất nhiều nhưng không phải là thích nhất <br/>
            Chỉ có duy nhất anh Bảy là cấu thủ mình khâm phục nhất. <br/>
          </p>
        </motion.div>
      </div>
      <Link href="/about" className="flex items-center justify-center mt-5">
        <Button className="font-bold">Know more about me</Button>
      </Link>
    </div>
  );
};

export default About;
