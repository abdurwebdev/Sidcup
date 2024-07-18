import React ,{ useRef, useState }from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger) 

function Navbar() {
  // Show Menu Function Starts
  const [menu, setMenu] = useState(false);
  const showMenu = () =>{
    var elem=document.getElementById("menuBar");
    if(!menu)
    {
      elem.style.opacity=1;
      elem.style.transition='1s ease-in-out';
      setMenu(true);
    }
    else 
    {
      elem.style.opacity=0;
      setMenu(false);
    }
  }
  // Show Menu Function Ends
  const container = useRef();
  useGSAP(()=>{
    gsap.to(container.current,{
      backgroundColor:"#000",
      color:"#fff",
      height:"100px",
      scrollTrigger:{
        trigger:container.current,
        start:"top -10%",
        end:"top -11%",
        scrub:1
      }
    })
  })
  return (
    <div ref={container} className='z-50 overflow-hidden xl:p-10  h-32 w-full p-7  fixed top-0 left-0 flex items-center justify-between'>
      <div className='flex items-center z-50 place-content-start gap-3 '>
        <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg" className='w-16 h-16' alt="" />
        <div className='hidden lg:flex lg:gap-5'>
        <h1>TOPTRACER RANGE</h1>
        <h1>TOP RACER</h1>
        <h1>TOP RACER</h1>
        <h1>TOP RACER</h1>
        <h1>TOP RACER</h1>
        </div>
      </div>
      <div className='flex gap-4 xl:mt-5 z-10'>
      <button className="button-57" role="button"><span class="text">GOLF CLUB</span><span>GOLF CLUB</span></button>
      <div className='hidden lg:flex'>
      <button className="button-57 " role="button"><span class="text">GOLF CLUB</span><span>GOLF CLUB</span></button>
      </div>
      </div>
      <div className='lg:hidden block z-10'>
      <button onClick={showMenu}>MENU</button>
      </div>
     {/* Menu Bar Starts */}
     <div id='menuBar' className='w-full  h-screen fixed z-0 top-0 left-0 opacity-0 bg-[#95C11E]'>
      <div className='gap-y-10 hello2 flex flex-col uppercase items-center mt-40'>
        <h1>The Golf</h1>
        <h1>The Golf</h1>
        <h1>The Golf</h1>
        <h1>The Golf</h1>
      </div>
     </div>
     {/* Menu Bar Ends */}
    </div>
    
  )
}

export default Navbar