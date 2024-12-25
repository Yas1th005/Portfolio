import React from 'react'
import { AnimatedTestimonialsDemo } from '../Each/Testimonals'
import {motion} from "framer-motion"

export default function Education() {
  return (
    <div className='w-[70vw] mx-auto'>
      <motion.p className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-wider"
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      >Education</motion.p>
      <br/>
      <motion.p className='text-lg'
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      
      >Discover the academic milestones that have shaped my journey and equipped me with the knowledge and skills to excel in computer science and engineering. This section highlights my qualifications, coursework, and learning experiences that form the foundation of my expertise.</motion.p>
      <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      
      ><AnimatedTestimonialsDemo/></motion.div>
    </div>
  )
}
