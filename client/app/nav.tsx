"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
          setIsClicked(false);
        }, 300); // Adjust the delay time (in milliseconds) as needed
      };
    
      const handleTransitionEnd = () => {
        setIsClicked(false);
      };

    return (
        <div className="flex flex-col">
        <nav className="w-full flex justify-between items-center px-20 pt-5"> 
            <Link href="/">
            <Image
                src="/logo.svg"
                alt="Secret Of Lotus Logo"
                width={120}
                height={120}
            />
            </Link>
            <div className="flex justify-between items-center w-72 mr-8">
                <Link href="/"><h3>HOME</h3></Link>
                <Link href="/services"><h3>SERVICES</h3></Link>
                <Link href="/book"><h3>BOOK</h3></Link>
                <Link href="/faq"><h3>FAQ</h3></Link>
                <Link href="/contactme"><h3>CONTACT ME</h3></Link>
            </div>
    <Link href="/account/login">
    <button
      className={`py-2 px-6 bg-darkGreen text-lightBlue rounded-md ${
        isClicked ? 'fade-out' : 'fade-in'
      } transition-transform`}
      onClick={handleClick}
      onTransitionEnd={handleTransitionEnd}
    >

        <h3>LOGIN</h3>
    </button>
    </Link>

        </nav>
        <div className="flex justify-between flex-col h-4 items-center cursor-pointer">
            <div className='w-12 h-0.5 bg-darkGreen'></div>
            <div className='w-12 h-0.5 bg-darkGreen'></div>
        </div>
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
        </div>
    )
}