import {motion} from 'framer-motion';

const LandingSection = ({ onStartBooking }) => {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:48}}
                transition={{duration:2}}
                viewport={{once:true}}
        >
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
          1-to-1 Mentorship
        </h1>
        <p className="text-lg text-gray-400 mb-8 w-[80vw]">
          
Looking to dive into startups, manage academics alongside, secure seed funding, or connect with investors? These topics are crucial for turning ideas into successful ventures. A 1-on-1 mentorship round can guide you through practical strategies, help avoid common pitfalls, and provide personalized advice to accelerate your journey. Let's make your vision a reality!
        </p>
        <button
          onClick={onStartBooking}
          className="px-6 py-3 bg-secondary text-black rounded-lg shadow-lg hover:bg-primary hover:text-white transition"
        >
          Book a Session
        </button>
        </motion.div>
        

        
      </section>
    );
  };
  
  export default LandingSection;
  