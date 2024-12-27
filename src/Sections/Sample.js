import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Patents from "./Patents";

import pat1 from "../Images/Patents/1.jpeg";
import pat2 from "../Images/Patents/2.jpeg";
import pat3 from "../Images/Patents/3.jpeg";

const ViewportText = () => {
  const [showText, setShowText] = useState(true);
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    if (inViewport) {
      const timer = setTimeout(() => {
        setShowText(false);
      }, 900); // 1 second
      return () => clearTimeout(timer);
    }
  }, [inViewport]);

  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setInViewport(true)}
      onViewportLeave={() => setInViewport(false)}
    >
      <AnimatePresence mode="wait">
        {showText ? (
          <motion.div
            key="text"
            className="text-black text-5xl font-bold text-primary pt-[50px] tracking-widest"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2, y: -20 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            Patents of the Year
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            layout
          >
            <div className="w-[80vw] mx-auto">
              <div className="flex flex-cols gap-[10px] w-[100%] h-[30vh]">
                <Patents pic={pat1}/>
                <Patents pic={pat2}/>
                <Patents pic={pat3}/>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ViewportText;


