import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "./components/Navbar";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from "react-fast-marquee";
import TiltCard from "./components/TiltCard";
import TiltCardTwo from "./components/TiltCardTwo";
import TiltCardThree from "./components/TiltCardThree";
import Carousels from "./components/Carousels";
import MarqueeStyle from './components/MarqueeStyle';
import CarouselThree from './components/CarouselThree';
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger) ;
function App() {
  const blurCursorRef = useRef(null);
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const rightQuote = useRef(null);
  const bottomQuote = useRef(null);
  const headingMove = useRef(null);
  useGSAP(()=>{
    gsap.from(headingMove.current,{
      y:100,
      ease:"ease-in-out",
      duration:1,
      scrollTrigger:{
        trigger:headingMove.current,
        start:"top 40%",
        end:"top 90%",
        scrub:1
      }
    })
  })
  useGSAP(()=>{
    gsap.to(rightQuote.current,{
      x:100,
      y:45,
      ease:"ease-in-out",
      duration:1,
      scrollTrigger:{
        trigger:rightQuote.current,
        scrub:2,
        start:"top 200px",
        end:"top 60%",
      }
    })
  })
  useGSAP(()=>{
    gsap.to(bottomQuote.current,{
      x:-100,
      y:-50,
      ease:"ease-in-out",
      duration:1,
      scrollTrigger:{
        trigger:bottomQuote.current,
        start:"top 80%",
        end:"top 50%",
        scrub:2,
        
      }
      
    })
  })

  useGSAP(()=>{
    gsap.to(containerRef.current,{
      backgroundColor:"#000",
      scrollTrigger:{
        trigger:containerRef.current,
        start:"top -50%",
        end:"top -100%",
        scrub:1
      }
    })
  })
  useEffect(() => {
    const handleCursorMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 5 + "px",
        y: e.clientY - 7 + "px",
        duration: 0.2,
        transition: "ease-in-out",
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", handleCursorMove);
    return () => {
      window.removeEventListener("mousemove", handleCursorMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(blurCursorRef.current, {
        x: e.clientX - 65 + "px",
        y: e.clientY - 80 + "px",
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Video Section */}
     
        <video
        className="w-full h-full z-0 object-cover fixed overflow-hidden"
          src="https://www.pexels.com/video/856432/download/?search_query=&tracking_id=1wr4xykgefy"
          autoPlay
          loop
          muted
          playsInline
        >
          {/* Your browser does not support the video tag. */}
        </video>

      {/* Video Section Ends */}
      {/* Blur Cursor Starts */}
      <div
        ref={blurCursorRef}
        className="blur-cursor overflow-hidden w-40 z-10 blur-3xl h-40 fixed top-0 left-0 bg-[#95C11E] rounded-full pointer-events-none"
      ></div>
      {/* Blur Cursor Ends */}
      {/* Main Cursor Starts */}
      <div
        ref={cursorRef}
        className="cursor-main overflow-hidden w-5 h-5 z-[9999] pointer-events-none bg-[#95C11E] rounded-full fixed top-0 left-0"
      ></div>
      {/* Main Cursor Ends */}
      {/* Nav Bar Starts */}
      <Navbar />
      {/* Nav Bar Ends */}
      {/* Hero Section Starts */}

      {/* Hero Section Ends */}
      {/* Main Pages Starts */}
      <div ref={containerRef} className="main relative overflow-hidden ">
        {/* Page One Heading Starts */}
        <div className="page1  w-full h-screen relative overflow-hidden flex flex-col items-center justify-center  ">
                 <h1>EAT. DRINK. PLAY.</h1>
                 <h2 className="text-2xl font-extrabold text-white">WELCOME TO SIDCUP FAMILY GOLF!</h2>
                 <p className="text-center w-96 xl:w-[650px] xl:mt-5 text-white">Sidcup Family Golf is a Toptracer driving range and crazy golf venue in Sidcup, South East London. Passionate about technology, player development and making golf fun and accessible to everyone.</p>
        </div>
        {/* Page One Heading Ends */}
        <div className="page2 w-full h-[110vh] overflow-hidden md:h-[150vh] lg:h-[100vh] xl:h-[80vh] ">
          {/* Page Two Marquee Starts */}   
        <Marquee className='hello z-[70]'>
        <h1>I can be a </h1> 
        <h1>I can be a </h1>
        <h1>I can be a </h1>
        <h1>I can be a </h1>
      </Marquee>
      {/* Page Two Marquee Ends */}
      {/* About Section Starts */}
      <div className="grid grid-cols-2 px-10 gap-4 overflow-hidden lg:grid-cols-3 ">
        <div className="flex items-center justify-center lg:order-1 " >
          <img className="w-[40vw] h-[40vw] rounded-3xl object-cover lg:w-[10vw] lg:h-[10vw]" src="https://plus.unsplash.com/premium_photo-1676542429616-417174dac787?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="flex items-center justify-center lg:order-3">
          <img className="w-[40vw] h-[40vw] rounded-3xl object-cover lg:w-[10vw] lg:h-[10vw]" src="https://images.unsplash.com/photo-1443706340763-4b60757a36ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="flex flex-col text-white leading-relaxed text-center col-span-full lg:order-2 lg:col-span-1">
          <h1 className="text-2xl font-extrabold  mt-5 text-white">ABOUT US</h1>
          <p className="mt-5">Home to a 46-bay, multi-tier, floodlit driving range, powered by Toptracer Range technology. Complimented by a practice green and bunker, coffee shop and American Golf Store. There truly is something for everyone as we also boast two outdoor 18-hole dinosaur themed crazy golf courses.

Please note: we are a cashless venue. The range closes at 10pm with last balls at 9pm.</p>
        </div>
      </div>
      {/* About Section Ends */}
        </div>
        <div className="page2 flex items-center justify-center w-full h-[220vh] sm:h-[150vh] overflow-hidden md:h-[210vh] lg:h-[100vh] xl:ml-16 ">
            <div className="grid grid-cols-1  gap-y-8 sm:grid-cols-2 sm:ml-10 xl:ml-[-110px]  md:grid-cols-2 lg:grid-cols-3 md:ml-14 xl:grid-cols-3">
            <TiltCard />
            <TiltCardTwo/>
            <TiltCardThree/>
            </div>
        </div>
        {/* Page Heading Starts */}
        <div className="w-full xl:h-96 h-56 bg-black p-0">
          <div className="flex items-center justify-between xl:h-[50vh] lg:h-[50vh] h-[25vh] linear-bg">
            <img className="xl:h-full h-full w-[50px] xl:w-[100px]  lg:w-[100px]" src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg" alt="" />
            <h1 className="text-black text-center font-extrabold text-base lg:text-2xl xl:text-2xl w-[100%] lg:w-[45%] xl:w-[45%]">SIGN UP FOR SIDCUP NEWS AND SPECIAL OFFERS
            STRAIGHT TO YOUR INBOX</h1>
            <img className="xl:h-full h-full w-[50px] xl:w-[100px] lg:w-[100px]" src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg" alt="" />
          </div>
        </div>
        {/* Page Heading Endss */}
        {/* Carousel And Flex Box Starts*/}
        <div className="w-full xl:px-24 h-[90vh] sm:h-[110vh] md:h-[110vh] lg:h-[50vh] xl:h-[65vh]   xl:py-10 md:px-20 px-7 py-7  z-[9999] bg-black ">
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 lg:gap-20">
            <div>
              <Carousels/>
            </div>
            <div>
              <div className="flex flex-col">
                <h1 className="text-white font-extrabold mt-5 text-3xl">FOOD AND DRINK</h1>
                <p className="mt-5 text-white">Whether you’re getting ready to play, just finishing your practice session or feeling peckish on the range, we have a variety of food and drink options bought directly to your table or bay.</p>
                <br />
                <p className="mt-5 text-white">We make sure that we cater for everyone, offering a range of vegan and gluten free options.</p>
                <button className="button-57 mt-5 z-50 w-44" role="button"><span class="text">COFFEE SHOP</span><span>COFFEE SHOP</span></button>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel And Flex Box Ends */}
        {/* The Ten Box Slider Starts */}
        <div className="w-full xl:h-[140vh] h-[110vh] md:h-[120vh] bg-black ">
                <MarqueeStyle/>
        </div>
        {/* The Ten Box Slider Ends */}
        {/* Quotation Starts */}
        <div className="w-full h-screen p-5 bg-black relative flex items-center  justify-center ">
          <div >
            <img ref={rightQuote} className="w-20 z-[99999] h-20 absolute top-0 left-36" src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg" alt="" />
          </div>
          <div className="xl:w-[50%] w-[100%] sm:w-[70%] ">
            <CarouselThree/>
          </div>
          <div >
            <img ref={bottomQuote} className="w-20 h-20 z-[99999] absolute bottom-0 right-32" src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg" alt="" />
          </div>
        </div>
        {/* Quotation Ends */}
        {/* Text Appear Starts */}
        <div className="w-full h-[105vh]  md:h-[110vh] lg:h-[50vh] xl:h-[60vh]   relative move-up ml-5 md:ml-16 bg-black px-10 text-white">
             <div>
             <h1 ref={headingMove} >WHAT ARE YOU WAITING FOR?
             </h1>
             </div>
            <div className="xl:flex xl:flex-row lg:flex-row lg:flex flex-col flex gap-5 sm:ml-[-20px] items-center md:w-[80%] sm:w-[550px] ml-5 md:flex-col md:gap-10 justify-between gap-x-16 absolute">
             <div className="w-80  h-40 bg-image rounded-3xl bg-[#ACDF23] flex items-center justify-center">
              <img className="w-80  h-40 rounded-3xl absolute z-[999] object-cover opacity-0 hover:transition-opacity hover:opacity-100" src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-toptracer-1536x1025.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" />
               <div>
                <h2 className="font-extrabold text-2xl text-black">TOPTRACER RANGE</h2>
               </div>
             </div>
             <div className="w-80 h-40  rounded-3xl bg-[#ACDF23] flex items-center justify-center">
             <img className="w-80 h-40 rounded-3xl  absolute z-[999] object-cover opacity-0 hover:transition-opacity hover:opacity-100" src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-lessons-1536x1025.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" />
               <div>
                <h2 className="font-extrabold text-2xl text-black">GOLF LESSON</h2>
               </div>
             </div>
             <div className="w-80 h-40 rounded-3xl  bg-[#ACDF23] flex items-center justify-center">
             <img className="w-80 h-40 rounded-3xl absolute  z-[999] object-cover opacity-0 hover:transition-opacity hover:opacity-100" src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-ag-1536x1022.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" />
               <div>
                <h2 className="font-extrabold text-2xl text-black">ADVENTURE GOLF</h2>
               </div>
             </div>
            </div>
        </div>
        {/* Text Appear Ends */}
        {/* Footer Starts */}
        <div className="w-full xl:h-96 h-[100vh] xl:p-20 p-8 md:h-[50vh] md:grid-cols-4 md:grid  relative bg-foot xl:grid xl:grid-cols-4 grid-cols-1 ">
          <img className="w-[35%] h-full absolute  " src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-footer.svg" alt="" />
          <img className="w-32 h-32 z-50  " src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg" alt="" />
          <div className="mt-3">
            <h1>TOPTRACER RANGE</h1>
            <h1>CRAZY GOLF</h1>
            <h1>CAFÉ</h1>
          </div>
          <div className="mt-3">
            <h1>EVENTS</h1>
            <h1>GOLF LESSONS</h1>
            <h1>CONTACT US</h1>
          </div>
          <div className="mt-3">
             <h2>A20, SIDCUP BYPASS</h2>
             <h2>CHISLEHURST</h2>
             <h2>KENT</h2>
             <h2>BR7 6RP</h2>
             <h2>TEL: <span>0208 309 0181</span> </h2>
             <h1>GET DIRECTIONS</h1>
          </div>
          <div className="col-span-full flex z-50 gap-1 text-3xl">
            <AiFillFacebook/>
            <AiFillInstagram/>
          </div>
          <div className="col-span-full xl:mt-20 mt-5 lg:mt-5 md:mt-5  flex items-center justify-between">
            <div className="xl:flex xl:items-center  text-xs flex-wrap  sm:flex-wrap">
              <h6>Copyright © 2023 Adventure Leisure Ltd. All rights reserved.</h6>
              <h6>| Privacy Policy</h6>
              <h6>| Terms And Conditions</h6>
              <h6>| Gender Pay Gap</h6>
            </div>
            <div className="text-xs ">
              <h6>Web Design London</h6>
            </div>
          </div>
        </div>
        {/* Footer Ends */}
      </div>
      {/* Main Pages Ends */}
    </>
  );
}

export default App;
