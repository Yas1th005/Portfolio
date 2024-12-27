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
      viewport={{ once: true }}
      >Education</motion.p>
      <br/>
      <motion.p className='text-lg'
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      viewport={{ once: true }}
      
      >Specializing in CSE, I’ve spent the past four years debugging code, tackling complex algorithms, and occasionally wondering if “Hello World” is the pinnacle of all programming. With a CGPA that could double as a movie rating, I’m set to graduate and engineer solutions that might just work on the first try—or the 10th.</motion.p>
      <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      viewport={{ once: true }}
      
      ><AnimatedTestimonialsDemo/></motion.div>
    </div>
  )
}
