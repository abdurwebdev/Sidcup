import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import React, { useRef } from 'react'
import { FiMousePointer } from "react-icons/fi";
function TiltCardThree() {
    
    const ROTATION_RANGE = 32.5;
    const HALF_ROTATION_RANGE = 32.5 / 2;
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);
  
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  
    const handleMouseMove = (e) => {
      if (!ref.current) return [0, 0];
  
      const rect = ref.current.getBoundingClientRect();
  
      const width = rect.width;
      const height = rect.height;
  
      const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
      const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
  
      const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
      const rY = mouseX / width - HALF_ROTATION_RANGE;
  
      x.set(rX);
      y.set(rY);
    };
  
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };
    return (
        <motion.div 
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
            transform,
          }}
          className="relative h-96 w-72 z-[999] sm:w-[90%] rounded-xl bg-cover"
        >
            <img className='h-96 w-72 sm:w-[90%] object-cover rounded-xl' src="https://images.unsplash.com/photo-1591491640784-3232eb748d4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-4 grid hover:bg-[#AFDB38] hover:opacity-100 hover:transition-opacity place-content-center opacity-0 rounded-xl bg-white shadow-lg"
          >
            <h1 className='font-bold text-3xl ml-5'>TOP RACER GOLF</h1>
            <p
              style={{
                transform: "translateZ(50px)",
              }}
              className="text-center "
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto maxime et ipsa nobis iusto beatae unde vel.
            </p>
            <button className="button-33 w-36 mt-5 ml-14" role="button">Explore More</button>
          </div>
        </motion.div>
      );
    };

export default TiltCardThree