import React from 'react'
import {motion} from 'framer-motion'

import im from '../Images/project1/2.jpeg'

export default function Articles() {
  return (

<div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800 w-[80vw] font-poppins">
		

<motion.div
initial={{y:48, opacity:0}}
whileInView={{y:0,opacity:1}}
viewport={{once:true}}
transition={{duration:2}}
className="bg-black py-12">
      <div className="container mx-auto px-6 text-gray-200">
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-6">
          DeskAVR: The Ultimate Virtual Interview Platform for Engineering Students!
        </h1>
        <p className="text-lg text-center mb-10">
          In today’s hyper-competitive tech world, mastering interviews at top companies like Google, Amazon, Microsoft, and Tesla isn’t just about technical knowledge. It’s about mastering the art of the interview itself. DeskAVR makes this a reality!
        </p>

        <div className="bg-gray-800 shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">What is DeskAVR?</h2>
          <p className="mb-6">
            DeskAVR is a next-generation virtual interview platform designed specifically for engineering students. Whether you’re aiming for software engineering, data science, or machine learning roles, DeskAVR helps you perfect your skills in a realistic, interactive, gamified environment powered by Unreal Engine.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-4">
            <li><strong>Choose Your Role, Company, and Difficulty Level:</strong> Tailored to your target company and role.</li>
            <li><strong>Gamified Virtual Environment:</strong> Experience real-world scenarios with AR/VR technology.</li>
            <li><strong>Practice Behavioral & Technical Questions:</strong> Comprehensive preparation for all interview types.</li>
            <li><strong>AI-Powered Feedback:</strong> Get personalized insights to improve your performance.</li>
            <li><strong>Detailed Reports:</strong> Track your progress and identify areas to work on.</li>
          </ul>
        </div>

        <div className="text-center my-10">
          <img 
            src={im} 
            alt="DeskAVR Virtual Interview Demo" 
            className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Why Engineering Students Need DeskAVR</h3>
            <p>
              DeskAVR bridges the gap between theoretical knowledge and real-world interview exposure. Simulate live interviews, tackle timed coding tasks, and practice behavioral questions to boost confidence and communication skills.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">DeskAVR vs Traditional Prep</h3>
            <p>
              Unlike textbooks or mock interviews, DeskAVR offers an immersive, AI-driven experience combining technical preparation, soft skills training, and instant feedback.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 shadow-lg rounded-lg p-8 mt-10">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">How DeskAVR Works</h2>
          <ol className="list-decimal list-inside text-gray-400 space-y-2">
            <li>Sign up for DeskAVR and choose your plan.</li>
            <li>Select the company, role, and interview difficulty level.</li>
            <li>Practice in the virtual interview environment.</li>
            <li>Receive AI-driven feedback and detailed performance reports.</li>
            <li>Go to your real interview prepared and confident!</li>
          </ol>
        </div>


      </div>
    
    </motion.div>
    </div>
  )
}
