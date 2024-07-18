import React from 'react'
import Marquee from "react-fast-marquee";
import { AiFillInstagram } from 'react-icons/ai';
function MarqueeStyle() {
  return (
    <>
    <Marquee className='marquee-img '>
     <div className='flex '>
        <img className='w-72 h-96 rounded-3xl m-8' src="https://images.unsplash.com/photo-1600609293139-ea525a3edeec?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='w-72 h-96 rounded-3xl m-8' src="https://images.unsplash.com/photo-1593282153762-a41e3cceb06c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='w-72 h-96 rounded-3xl m-8' src="https://images.unsplash.com/photo-1591491640784-3232eb748d4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='w-72 h-96 rounded-3xl m-8' src="https://plus.unsplash.com/premium_photo-1679505066152-3b80bece7743?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
     </div>
     
   </Marquee>
   <div className='insta'>
   <h1 className='xl:text-3xl text-base  absolute right-0 flex gap-2 text-white font-extrabold'>FOLLOW US ON INSTAGRAM<AiFillInstagram/></h1>
   </div>
   
    </>
  )
}

export default MarqueeStyle