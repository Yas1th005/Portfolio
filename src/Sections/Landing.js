import { ReactLenis } from "lenis/dist/lenis-react";
import {
  easeInOut,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import '../Style/About.css'
import { useRef } from "react";

import vr1 from "../Images/Landing/vr1.jpeg"
import vr2 from "../Images/Landing/vr2.jpeg"
import vr3 from "../Images/Landing/vr3.jpeg"
import vr4 from "../Images/Landing/vr4.jpeg"

import { ThreeDCardDemo } from "../Each/ProfilePic";
import { TextGenerateEffectDemo } from "../Each/TextGenerate";
import linkedin from "../Images/linkedin.png"
import github from "../Images/github.png"
import insta from "../Images/instagram.png"
import youtube from "../Images/youtube.png"
import TechStack from "./TechStack";

export const Landing = ({scrollToSection}) => {

  const sendclick=()=>{
    scrollToSection()
  }

  return (
    <div className="bg-black">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
            // infinite: true,
            // syncTouch: true,
        }}
      >
        {/* <Nav /> */}
        <Hero />
        <Schedule scheduleItem={sendclick} />
        
        
      </ReactLenis>
    </div>
  );
};



const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-black" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://rhythmagency.com/media/zawhb14d/28229-1.png?width=2880&height=1620&quality=60&v=1da8c273afb93b0)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src={vr1}
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src={vr3}
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src={vr4}
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src={vr2}
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = ({scheduleItem}) => {

  const schedule=()=>{
    scheduleItem()
  }

  return (
    <section
      id="launch-schedule"
      className="mx-auto px-4 py-12 text-white w-[90vw]"
    >
      <ScheduleItem schedule={schedule}/>
    </section>
  );
};



const ScheduleItem = ({schedule}) => {

  const openlink=(social)=>{
    if(social === "linkedin"){
      window.open("https://www.linkedin.com/in/founderspectov/")
    }
    else if(social === "github"){
      window.open("https://github.com/Vanshmani")
    }
    else if(social === "instagram"){
      window.open("https://www.instagram.com/vanshmani.jha")
    }
    else{
      window.open(`https://www.youtube.com/@SpectoV`)
    }
    
  }

  const scrollToSection=()=>{
    schedule()
  }

  return (
    <div>
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      viewport={{ once: true }}
      className="mb-9 flex flex-cols items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div className='intro'>
        <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        viewport={{ once: true }}
        >
          <ThreeDCardDemo/>
        </motion.div>
        <div className='intro-right'>
          <motion.div>
            <TextGenerateEffectDemo words={"I Am Vanshmani Jha,"}/>
          </motion.div>
          <br/>
          <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          viewport={{ once: true }}
          
          >
            <p className='text-white font-fredoka text-xl'>Founder @SpectoV | XR Developer | Innovator in Education Tech🚀</p>
            <br/>
          <p className='text-white font-fredoka text-sm'>As a passionate XR Developer, I specialize in creating immersive experiences that transform the way students prepare for their careers. Currently, I’m leading a project called DeskAVR at SpectoV, utilizing Unreal Engine 5 to deliver real-time interview simulations with lifelike metahumans.</p>
          <br/>
          <p className='text-white font-fredoka text-sm'>Previously, I honed my skills as an SDE Intern at Eaccess Telemedics Pvt Ltd, where I contributed to impactful software solutions. I’m also a proud member of the Microsoft for Startups Founders Hub, where I engage with like-minded innovators.</p>
          {/* <p className="mt-[30px] text-white font-poppins font-bold uppercase">Wanna have a one to one Mentorship with me  <button className="ml-[5px] px-4 py-1 bg-blue-500 text-white rounded" onClick={scrollToSection}>Yes</button></p> */}
          <div className='social'>
          <img src={linkedin} onClick={()=>openlink("linkedin")} className="hover:cursor-pointer"></img>
          <img src={github} onClick={()=>openlink("github")} className="hover:cursor-pointer"></img>
          <img src={insta} onClick={()=>openlink("instagram")} className="hover:cursor-pointer"></img>
          <img src={youtube} onClick={()=>openlink("youtube")} className="hover:cursor-pointer"></img>  
          </div>
          

          </motion.div>
        </div>
          
      </div>


    </motion.div>

{/* <motion.div className="h-[80vh] mt-[10vh]">
<ul>
  <li><motion.p
        initial={{y:48 , opacity:0}}
        whileInView={{y:0 , opacity:1}}
        transition={{ease:easeInOut, duration:2}}
        className="ml-[10vw] mr-[10vw] text-center mb-[40px]"
      >
        <span className="text-[#00c4ff]">Starting a startup</span> involves identifying a problem, developing a unique solution, and building a Minimum Viable Product (MVP) to test your idea. Gather feedback, refine your product, and scale strategically while securing funding as needed. Collaboration and adaptability are key to success.
      </motion.p>
  </li>
  <li><motion.p
      initial={{y:48 , opacity:0}}
      whileInView={{y:0 , opacity:1}}
      transition={{ease:easeInOut, duration:2}}
      className="ml-[10vw] mr-[10vw] text-center mb-[40px]"
      >
    <span className="text-[#00c4ff]">Managing academics</span> along with a startup requires effective time management and prioritization. Allocate dedicated time slots for studies and startup tasks, set clear goals, and focus on high-impact activities. Leverage your academic learning to benefit your startup and seek support from mentors or teammates to share responsibilities.
    </motion.p>
  </li>
  <li><motion.p
      initial={{y:48 , opacity:0}}
      whileInView={{y:0 , opacity:1}}
      transition={{ease:easeInOut, duration:2}}
      className="ml-[10vw] mr-[10vw] text-center mb-[40px]"
      >
    <span className="text-[#00c4ff]">Seed funding</span> is the initial capital raised by a startup to develop its product, conduct market research, and validate its business model. It typically comes from angel investors, venture capitalists, or friends and family in exchange for equity or convertible debt. This funding helps startups move from the idea stage to a viable product or service.</motion.p></li>
  <li><motion.p
  initial={{y:48 , opacity:0}}
  whileInView={{y:0 , opacity:1}}
  transition={{ease:easeInOut, duration:2}}
  className="ml-[10vw] mr-[10vw] text-center"
  >
    <span className="text-[#00c4ff]">To find investors</span>, network at startup events, use platforms like AngelList or LinkedIn, and seek referrals from your network. Join accelerators or incubators for funding opportunities and prepare a strong pitch to showcase your startup's potential.</motion.p></li>
</ul>
</motion.div> */}


<div>
<div className="grid grid-cols-2 grid-rows-2 gap-4">
  <motion.div
  initial={{y:48 , opacity:0}}
  whileInView={{y:0 , opacity:1}}
  transition={{ease:easeInOut, duration:2}}
  viewport={{ once: true }}
  >
    <Card title="Starting a startup" description="It involves identifying a problem, developing a unique solution, and building a Minimum Viable Product (MVP) to test your idea. Gather feedback, refine your product, and scale strategically while securing funding as needed. Collaboration and adaptability are key to success."/>
  </motion.div>
  <motion.div
  initial={{y:48 , opacity:0}}
  whileInView={{y:0 , opacity:1}}
  transition={{ease:easeInOut, duration:2}}
  viewport={{ once: true }}
  >
  <Card title="Managing academics" description="Along with a startup requires effective time management and prioritization. Allocate dedicated time slots for studies and startup tasks, set clear goals, and focus on high-impact activities. Leverage your academic learning to benefit your startup and seek support from mentors or teammates to share responsibilities."/>
  </motion.div>
  <motion.div
  initial={{y:48 , opacity:0}}
  whileInView={{y:0 , opacity:1}}
  transition={{ease:easeInOut, duration:2}}
  viewport={{ once: true }}
  >
  <Card title="Seed funding" description="It is the initial capital raised by a startup to develop its product, conduct market research, and validate its business model. It typically comes from angel investors, venture capitalists, or friends and family in exchange for equity or convertible debt. This funding helps startups move from the idea stage to a viable product or service."/>
  </motion.div>
  
  <motion.div
  initial={{y:48 , opacity:0}}
  whileInView={{y:0 , opacity:1}}
  transition={{ease:easeInOut, duration:2}}
  viewport={{ once: true }}
  >
  <Card title="To find investors" description="Network at startup events, use platforms like AngelList or LinkedIn, and seek referrals from your network. Join accelerators or incubators for funding opportunities and prepare a strong pitch to showcase your startup's potential."/>
  </motion.div>
  
</div>

  
</div>

<motion.div
  initial={{y:48 , opacity:0}}
  whileInView={{y:0 , opacity:1}}
  transition={{ease:easeInOut, duration:2}}
  viewport={{ once: true }}
  className="mt-[50px]"
>
  <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#00c4ff] tracking-wider"
        >
          TechStack
        </motion.h1>
  <TechStack/>
</motion.div>

</div>
  );
};



const Card=(props)=>{
  return(
    <>
    <div>
    <div className="border border-white rounded-xl w-[80%] mx-auto mb-[10px] h-[40px] flex flex-cols">
      <div class="w-6 h-6 bg-white rounded-full mt-[7px] ml-[5px]"></div>
      <p className="leading-[40px] text-[#ffffff] text-left ml-[20px]">{props.title}</p>
      
    </div>
    <div className="bg-white border rounded w-[80%] h-[150px] mx-auto text-black overflow-hidden p-[10px]">
      <p className="text-center">{props.description}</p>
    </div>
    </div>
    
    </>
  )
}