"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import type { NextPage } from "next";
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'


const Home: NextPage = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const autoPlay: any = Autoplay()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true, align: 'start' }, [autoPlay])

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300); 
  };

  return (
    <main className="w-full px-20 pt-12">
      <section className="w-full h-screen relative flex flex-col">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-start">
          <div>
            <Image
              src="/whitelotus.svg"
              alt="Secret Of Lotus Logo"
              width={703}
              height={703}
            />
          </div>
        </div>
        <div className='flex flex-row'>

        <div className="w-1/2 flex flex-col border-b-2 border-white">
          <h1 className="text-xxxxl text-darkGreen">
            London's Premier
            <br />
            Mobile Massage
            <br />
            Service
          </h1>
          <h2 className="text-xxl text-darkGreen pt-8">
            Experience relaxation at your doorstep
          </h2>
          <div
            className={`w-2/3 flex justify-center ${
              isClicked ? 'fade-out' : 'fade-in'
            }`}
            onClick={handleClick}
          >
            <Image
              className="pt-8 cursor-pointer z-2 relative animate-pulse"
              src="/arrowdiag.svg"
              alt="arrow"
              width={70}
              height={70}
            />
          </div>
        </div>

        <div className="w-1/2 flex justify-center pl-8 relative z-2 border-b-2 border-white">
          <Image
            src="/face.png"
            alt="Female Face"
            width={480}
            height={400}
          />
          <Image
            className="absolute top-0 right-0 right-0 bottom-0"
            src="/roller.svg"
            alt="Female Face"
            width={120}
            height={120}
          />
        </div>

        </div>
            <div className='h-1/5 flex justify-center items-center pt-12'>
              <Image
                src="/star.svg"
                alt="Star"
                width={120}
                height={120}
              />

            </div>
      </section>
      <section className="w-full h-screen relative flex flex-col">
        <div className="w-full flex h-1/2 flex-col pt-8 items-center">
          <h1 className="text-xxxl text-darkGreen">
          Unwind Now
          </h1>
          <h2 className="text-xl text-darkGreen pt-8">
          Welcome to 2023, where relaxation and
          <br />
          rejuvenation are a click away. 
          <br />
          Revolutionize your massage experience 
          <br />
          with a mobile massage therapist.
          </h2>
        </div>
        <div className="pt-12 h-1/2 flex flex-row">
          <div className='w-1/2 h-full flex flex-row items-start'>
              <Image
                src="/greenlotus.svg"
                alt="Green Lotus"
                width={160}
                height={120}
              />
                <Image
                src="/star.svg"
                alt="Star"
                width={120}
                height={120}
              />

          </div>
          <div className='w-1/2 h-full'>
          <h1 className="text-xxxl text-darkGreen">
            Expertise
          </h1>
            <h2 className="text-xl text-darkGreen pt-8">
            Meet an expert therapist Oxana who’s dedicated to 
            <br />
            your well-being. With extensive experience and a passion
            <br />
            for wellness, she goes above and beyond to provide tailored  
            <br />
            massage services in the comfort of your own space.
            </h2>
          </div>
        </div>
      </section>
     
      <section className="w-full h-screen relative flex flex-col ">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-start">
              <div>
                <Image
                  src="/whitelotus.svg"
                  alt="Secret Of Lotus Logo"
                  width={703}
                  height={703}
                />
              </div>
            </div>
            <div className='w-full flex justify-start'>
            <Image
                src="/star.svg"
                alt="Star"
                width={120}
                height={120}
              />
            </div>
            <h1 className="text-xxxl text-darkGreen pt-8">
              Why mobile massage?
            </h1>
            <div className='w-full h-full flex flex-row relative z-2'>
              <div className='flex flex-col h-full w-1/3 justify-evenly'>
                <div>
                  <h2 className="text-xxl text-darkGreen pt-8">
                  Ultimate Convenience
                  </h2>
                  <span className="text-xl text-darkGreen pt-8">
                  Relax at home, no need to travel
                  <br />
                  and battle traffic
                  </span>
                </div>
                <div>
                  <h2 className="text-xxl text-darkGreen pt-8">
                  Professional Therapist
                  </h2>
                  <span className="text-xl text-darkGreen pt-8">
                  Dedicated and highly skilled in
                  <br />
                  multiple massage techniques
                  </span>
                </div>
              </div>
              <div className='flex flex-col h-full w-1/3 justify-evenly items-center'>
                <div>
                  <h2 className="text-xxl text-darkGreen pt-8">
                  Ultimate Convenience
                  </h2>
                  <span className="text-xl text-darkGreen pt-8">
                  Relax at home, no need to travel
                  <br />
                  and battle traffic
                  </span>
                </div>
                <div>
                  <h2 className="text-xxl text-darkGreen pt-8">
                  Professional Therapist
                  </h2>
                  <span className="text-xl text-darkGreen pt-8">
                  Dedicated and highly skilled in
                  <br />
                  multiple massage techniques
                  </span>
                </div>
              </div>
              <div className='flex flex-col h-full w-1/3 items-end justify-evenly'>
                <div>
                  <h2 className="text-xxl text-darkGreen pt-8">
                  Ultimate Convenience
                  </h2>
                  <span className="text-xl text-darkGreen pt-8">
                  Relax at home, no need to travel
                  <br />
                  and battle traffic
                  </span>
                </div>
                <div>
                  <h2 className="text-xxl text-darkGreen pt-8">
                  Professional Therapist
                  </h2>
                  <span className="text-xl text-darkGreen pt-8">
                  Dedicated and highly skilled in
                  <br />
                  multiple massage techniques
                  </span>
                </div>
              </div>
            </div>
      </section>
      <section className="w-full h-screen relative flex flex-col ">
            <div className='w-full flex justify-start'>
            <Image
                src="/star.svg"
                alt="Star"
                width={120}
                height={120}
              />
            </div>
            <h1 className="text-xxxl text-darkGreen pt-8">
              Our services
            </h1>
            <div className='w-full  flex justify-end items-start'>
              <div className='flex flex-row'>
                <Image
                  className="pt-8 cursor-pointer z-2 relative animate-pulse mr-6"
                  src="/arrleft.svg"
                  alt="arrow"
                  width={50}
                  height={50}
                  onClick={() => emblaApi?.scrollPrev()}
                />
                <Image
                  className="pt-8 cursor-pointer z-2 relative animate-pulse"
                  src="/arrright.svg"
                  alt="arrow"
                  width={50}
                  height={50}
                  onClick={() => emblaApi?.scrollNext()}
                />
              </div>
            </div>
            <div className='overflow-hidden items-start justify-center flex-col pt-12' ref={emblaRef}>
              <div className="flex h-screen">
                <div className='h-full flex-[0_0_31%] mr-12 bg-darkGreen opacity-10'>1</div>
                <div className='h-full flex-[0_0_31%] mr-12 bg-darkGreen opacity-10'>2</div>
                <div className='h-full flex-[0_0_31%] mr-12 bg-darkGreen opacity-10'>3</div>
                <div className='h-full flex-[0_0_31%] mr-12 bg-darkGreen opacity-10'>4</div>

              </div>
            </div>
      </section>
      <section className="w-full h-screen relative flex flex-col">

      </section>



      <style jsx>{`
        .fade-in {
          opacity: 1;
          transition: opacity 0.5s ease-in;
          transform: scale(1);

        }

        .fade-out {
          opacity: 0;
          transition: opacity 0.5s ease-out;
          transform: scale(0.95);
        }
      `}</style>
    </main>
  );
}

export default Home

