import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function TechStack() {
  const [img, setImg] = useState({
    src: '',
    alt: '',
    opacity: 0,
  });
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const list = [
    {
      img: 'https://media.istockphoto.com/id/1324380506/photo/people-with-vr-grasses-playing-virtual-reality-game-future-digital-technology-and-3d-virtual.jpg?s=612x612&w=0&k=20&c=I_9fnEi1hNHFwy0qe8g7V1ZQJmgyKEDOSDJonScTSMU=',
      label: 'AR/VR',
    },
    {
      img: 'https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=',
      label: 'Artificial Intelligence',
    },
    {
      img: 'https://t3.ftcdn.net/jpg/01/96/96/86/360_F_196968684_zp8obttcJzlY4tWhFHzDGOTbPkdY0Q3p.jpg',
      label: 'Blockchain',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFhrf4BmQIkANXkQHar6yj_yAptd9Yy7IgQ&s',
      label: 'Web 3.0',
    },
  ];
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };
  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };
  const handleMove = (e) => {
    if (!imageRef.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const relativeX = clientX - containerRect.left;
    const relativeY = clientY - containerRect.top;
    imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2);
    imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2);
  };
  const handleImageInteraction = (item, opacity) => {
    setImg({ src: item.img, alt: item.label, opacity });
  };
  return (
    <section
      ref={containerRef}
      onMouseMove={handleMove}
      className=" bg-black relative w-4/5 mx-auto p-4">
      {list.map((item) => (
        <div
          key={item.label}
          onMouseEnter={() => handleImageInteraction(item, 1)}
          onMouseMove={() => handleImageInteraction(item, 1)}
          onMouseLeave={() => handleImageInteraction(item, 0)}
          className="w-full py-5 cursor-pointer text-center flex justify-between text-white  border-b border-white last:border-none">
          <p className="text-3xl">{item.label}</p>
          <span>Portfolio</span>
        </div>
      ))}

      <motion.img
        ref={imageRef}
        src={img.src}
        alt={img.alt}
        className="w-[300px] h-[220px] rounded-lg object-cover absolute top-0 left-0 transition-opacity duration-200 ease-in-out pointer-events-none"
        style={{
          x: imagePos.x,
          y: imagePos.y,
          opacity: img.opacity,
        }}
      />
    </section>

  );
}







