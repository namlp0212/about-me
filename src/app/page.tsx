import About from '@/components/About'
import ContactSection from '@/components/Contact'
import Experience from '@/components/Experience'
import HeroSection from '@/components/Hero'
import Projects from '@/components/Projects'
import Blogs from '@/components/Blogs'
import React from 'react'

const page = () => {
  return (
    <div className='pb-20'>
      <HeroSection />
      {/* <Projects /> */}
      <Blogs />
      <About />
      {/* <Experience />
      <ContactSection /> */}
    </div>
  )
}

export default page
