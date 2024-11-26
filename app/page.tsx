'use client';
import Header from '@/app/ui/header';
import Image from 'next/image';
import SocMedItem from '@/app/ui/soc-med-item';
import WavingEmoji from '@/app/ui/waving-emoji';
import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { PiMapPinFill } from "react-icons/pi";

const socmeds = [
  { href: 'https://github.com/jared-limjoco/', imgSrc: FaGithub },
  { href: 'https://www.linkedin.com/in/jaredlimjoco/', imgSrc: FaLinkedin },
  { href: 'https://mail.google.com/mail/u/0/?fs=1&to=limjocojared9@gmail.com&su=Let%27s+Connect!&tf=cm', imgSrc: MdOutlineMail },
];

export default function Home() {
  return (
    <main className="flex min-h-screen bg-zinc-900 bg-grid-pattern bg-grid-size flex-col overflow-hidden">
      <div>
        <Header />
        <div className="flex flex-col sm:flex-row items-center gap-4 p-4 justify-center pt-8">
          {/* Profile Picture */}
          <Image
            src="/pfp.jpg" // Path to your image
            alt="Your Name"
            width={1280}
            height={1280}
            className="w-32 h-32 sm:w-64 sm:h-64 rounded-full object-cover mb-4 sm:mb-0 animate-popFadeIn" // Adjust size and margin for mobile
          />
          {/* Name and Role */}
          <div className="text-center sm:text-left animate-popFadeIn">
            <h1 className="text-3xl sm:text-5xl font-bold">Jared Ethan Limjoco<WavingEmoji /></h1>
            <p className="text-xl sm:text-2xl font-semibold text-indigo-600 inline-flex items-center">Software Developer</p>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <p className="text-l sm:text-xl font-semibold text-neutral-400 inline-flex items-center">
                <PiMapPinFill className="mr-1 text-xl text-neutral-300" /> Manila, Philippines
              </p>
            </div>
          </div>
        </div>
        
        
        
        <p className="text-center text-neutral-300 p-6 sm:px-96 px-4 animate-popFadeIn">Hi there! I&apos;m a BS Computer Science graduate with a major in Software Technology. I have experience with Java, Python, and JavaScript. My background includes work in web development, software development, and AI/ML, focusing on creating practical solutions to real-world problems.</p>

        <div className="flex flex-wrap justify-center gap-4 p-4 rounded-md">
          {socmeds.map((socmed, index) => (
            <SocMedItem 
              key={index}  
              href={socmed.href} 
              imgSrc={socmed.imgSrc} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}
