import React from "react";
import { ReactLenis } from 'lenis/react';
import { DragCards } from '../Each/Lamp';
import Events from './Events';
import {motion, useTransform,useScroll} from "framer-motion"
import { useRef } from 'react';
import Mentorship from "./Mentor/Mentorship";
import { Landing } from "./Landing";
import Certificates from "./Certificates";

import project1 from "../Images/project1/1.jpeg"
import project2 from "../Images/project1/2.jpeg"

import pat1 from "../Images/Patents/1.jpeg";
import pat2 from "../Images/Patents/2.jpeg";
import pat3 from "../Images/Patents/3.jpeg";

import Education from "./Education";
import Patents from "./Patents";
import Articles from "./Articles";

const projects = [
  {
    title: 'DeskAVR',
    description:
      'Introducing DeskAVR: Elevating recruitment with realistic interviews and AI-driven insights. Get ready to experience the future of hiring!',
    src: project2,
    link: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop',
    color: '#000000',
  },
  {
    title: 'DefXV',
    description:
      'DefXV is an AI/ML-integrated AR solution designed to bridge the communication gap for the deaf and mute community. It provides real-time Voice-to-Sign and Sign-to-Voice translations, ensuring seamless communication between sign language users and non-signers.',
    src: project1,
    link: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60',
    color: '#000000',
  },
  {
    title: 'MedoV',
    description:
      'MedoV is an innovative medical application built to improve the efficiency and effectiveness of patient management and care. Utilizing the power of Google Cloud Platform (GCP), MedoV integrates various features aimed at facilitating seamless communication and data sharing among healthcare providers, enhancing patient outcomes, and optimizing the overall healthcare experience.',
    src: 'https://media.licdn.com/dms/image/v2/D562DAQFp-sC-W7M44Q/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1721796396324?e=1735668000&v=beta&t=aYn47_x3OTcgSWL7HCwRLwhKvANI-VFzEtqoDi_pNzE',
    link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
    color: '#000000',
  },
];

export default function Index() {

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });


  return (
    <ReactLenis root>
      <main className="bg-black">
        <div className="wrapper font-poppins !important">
            <Landing scrollToSection={scrollToSection}/>
            
            <div className="h-[100vh] mt-[150px]"><Education/></div>

            <section className="bg-black text-white grid place-content-center h-[100vh] sticky top-0 overflow-hidden">
              <motion.div
              initial={{opacity:0, y:48}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5}}
              viewport={{once:true}}
              >
                <DragCards/>
              </motion.div>
              
            </section>
        </div>


        {/* <section className="text-white   w-full bg-slate-950  ">
          <div className="grid grid-cols-2">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
                Patents
              </h1>
            </div>
            <div className="grid gap-2">
              <figure className="grid place-content-center -skew-x-12">
                <img
                  src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
                />
              </figure>
              <figure className="grid place-content-center skew-x-12">
                <img
                  src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
                />
              </figure>
              <figure className="grid place-content-center -skew-x-12">
                <img
                  src="https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
                />
              </figure>
              <figure className="grid place-content-center skew-x-12">
                <img
                  src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
                />
              </figure>
            </div>
          </div>
        </section> */}
        {/* <section className="text-white   w-[full] bg-slate-950  p-[150px]">
          <div className="flex justify-between px-16">
            <div className="grid gap-2">
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-green-500 h-72 w-[30rem] rounded-lg rotate-6 p-4 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">Image MouseTrail</h1>
                  <p>
                    An Mouse who is running with couple of images and the best
                    part is you can hide all the images when you don't move your
                    mouse. I hope you'll love it
                  </p>
                  <a
                    href="https://ui-layout.com/components/image-mousetrail"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-red-400 h-72 w-[30rem] rounded-lg p-4 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">
                    Progressive Carousel
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius consequatur explicabo assumenda odit necessitatibus
                    possimus ducimus aliquam. Ullam dignissimos animi officiis,
                    in sequi et inventore harum ipsam sed.
                  </p>
                  <a
                    href="https://ui-layout.com/components/progressive-carousel"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-orange-400 h-72 w-[30rem] p-4 rounded-lg -rotate-6 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">Responsive Drawer</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius consequatur explicabo assumenda odit necessitatibus
                    possimus ducimus aliquam. Ullam dignissimos animi officiis,
                    in sequi et inventore harum ipsam sed.
                  </p>
                  <a
                    href="https://ui-layout.com/components/drawer"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-blue-400 h-72 w-[30rem] p-4 rounded-lg grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">Animated Globe</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius consequatur explicabo assumenda odit necessitatibus
                    possimus ducimus aliquam. Ullam dignissimos animi officiis,
                    in sequi et inventore harum ipsam sed.
                  </p>
                  <a
                    href="https://ui-layout.com/components/globe"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
            </div>
            <div className="sticky top-0 h-screen grid place-content-center">
              <h1 className="text-4xl px-8 font-medium text-center tracking-tight leading-[120%]">
                What We <br /> Have Now😎
              </h1>
            </div>
          </div>
        </section> */}



        {/* PROJECTS */}
        <div className="bg-black font-poppins !important" ref={container} >
        <p className="text-black text-5xl font-bold text-primary pt-[50px] tracking-wider">Projects</p>
          <section className="text-white bg-zinc-950] ">
            {projects.map((project, i) => {
              const targetScale = 1 - (projects.length - i) * 0.05;
              return (
                <Card
                  key={`p_${i}`}
                  i={i}
                  url={project?.link}
                  src={project?.src}
                  title={project?.title}
                  color={project?.color}
                  description={project?.description}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </section>
        </div>

        {/* CERTIFICATES
        <section className="text-white  w-[100vw] bg-black ">
          <div className="grid grid-cols-2 px-8">
            <div className="grid gap-2">
              <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src={certi1}
                  alt=""
                  className="transition-all duration-300 w-[600px] h-96  align-bottom object-cover rounded-md"
                />
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src={certi2}
                  alt=""
                  className="transition-all duration-300  w-[600px] h-96   align-bottom object-cover rounded-md"
                />
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src={certi3}
                  alt=""
                  className="transition-all duration-300 w-[600px] h-96   align-bottom object-cover rounded-md"
                />
              </figure>
              {/* <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300  w-[600px] h-96   align-bottom object-cover rounded-md"
                />
              </figure> */}
            {/* </div>
            <motion.div className="sticky top-0 h-screen grid place-content-center"
initial={{ scale: 0.8 }}
whileInView={{ scale: 1 }}
transition={{ duration: 2 }} */}

{/*             
            >
            <p className="text-black font-fredoka text-5xl mt-[50px] font-bold text-primary p-[10px] mt-[30px] tracking-widest"
            >Certificates</p>
              <br/>
              <p className='font-fredoka text-xl'>Explore some of the exciting projects I've worked on, showcasing my skills and creativity in solving real-world problems. Each project reflects my expertise in [mention relevant domains, e.g., web development, AI, data analysis], highlighting my ability to turn ideas into impactful solutions.</p>
            </motion.div>
          </div> */}
        {/* </section> */}

        <section className="h-[120vh] bg-[#000000] text-white sticky top-0 overflow-hidden font-poppins !important ">
            <div>
              <div className="w-[70vw] h-[50vh] mx-auto mt-[50px]"><Certificates/></div>
              <motion.div
              initial={{y:48, opacity:0}}
              whileInView={{y:0, opacity:1}}
              transition={{duration:2}}
              viewport={{once:true}}
              >
              <p className="text-3xl font-bold text-primary tracking-wider">Patents of the Year</p>
              <div className="w-[80vw] mx-auto mt-[20px]">
                <div className="flex flex-cols gap-[10px] w-[100%] h-[30vh]">
                  <Patents pic={pat1}/>
                  <Patents pic={pat2}/>
                  <Patents pic={pat3}/>
                </div>
              </div>
              </motion.div>
              
              
            </div>
        </section>
        


        <section className="text-white h-full grid place-content-center relative top-0 font-poppins !important">
            <Events/>
        </section>


        <section className="bg-black relative mx-auto flex justify-center items-center">
            <Articles/>


            <footer className="bg-black text-white py-4 text-center bottom-7 absolute">
          <p className="text-base font-poppins">
            &copy; {new Date().getFullYear()} SpectoV. All rights reserved.
          </p>
        </footer>
        </section>

        



        {/* <section
        ref={sectionRef}
        className="text-white h-[100vh] bg-black font-poppins ! important grid place-content-center sticky top-0">
          <div>
            <Mentorship/>
          </div>
        </section> */}

            




        
      </main>
    </ReactLenis>
  );
}



const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[30%] h-[80%] w-[70%] rounded-md p-10 origin-top border border-white`}
      >
        <h2 className="text-2xl text-center font-semibold">{title}</h2>
        <div className={`flex h-full mt-5 gap-10`}>
          <div className={`w-[40%] relative top-[10%]`}>
            <p className="text-lg">{description}</p>
            <span className="flex items-center gap-2 pt-2">
              {/* <a
                href={'#'}
                target="_blank"
                className="underline cursor-pointer"
              >
                See more
              </a> */}
            </span>
          </div>

          <div
            className={`relative w-[60%] h-[90%] rounded-lg overflow-hidden `}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <img src={src} fill alt="image" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};





// 'use client';

// export default function HorizontalScroll() {
  
//   return (
//     <ReactLenis root>
//       <main>
        
//         <div className="progress fixed left-0 right-0  h-2 rounded-full bg-red-600 bottom-[50px] scale-x-0"></div>
//       </main>
//     </ReactLenis>
//   );
// }



