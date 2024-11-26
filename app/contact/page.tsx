import Header from '@/app/ui/header';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { PiMapPinFill } from "react-icons/pi";
import WavingEmoji from '@/app/ui/waving-emoji';

export default function Contact() {
  return (
    <main className="flex min-h-screen bg-zinc-900 bg-grid-pattern bg-grid-size flex-col">
      <Header />
      <div className="flex flex-col sm:flex-row items-center gap-4 p-4 justify-center pt-8">
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
      <p className="w-11/12 sm:w-1/2 mx-auto text-center text-lg sm:text-2xl font-semibold text-neutral-300 pt-4 animate-popFadeIn">Reach out to me here!</p>
      
      <div className="w-11/12 sm:w-1/2 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 p-4 justify-center rounded-md animate-popFadeIn">
        {/* GitHub Card */}
        <a
          href="https://www.instagram.com/jared.limjoco/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 bg-indigo-600 hover:bg-indigo-800 rounded-md transition-transform transform hover:scale-105 duration-200 ease-in-out"
        >
          <FaInstagram className="text-white text-4xl sm:text-5xl mb-2" />
          <p className="text-white text-base sm:text-lg font-semibold">Instagram</p>
          <p className="text-neutral-200 text-sm sm:text-base">jared.limjoco</p>
        </a>

        {/* LinkedIn Card */}
        <a
          href="https://linkedin.com/in/jaredlimjoco"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 bg-indigo-600 hover:bg-indigo-800 rounded-md transition-transform transform hover:scale-105 duration-200 ease-in-out"
        >
          <FaLinkedin className="text-white text-4xl sm:text-5xl mb-2" />
          <p className="text-white text-base sm:text-lg font-semibold">LinkedIn</p>
          <p className="text-neutral-200 text-sm sm:text-base">jaredlimjoco</p>
        </a>

        {/* Gmail Card */}
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&to=limjocojared9@gmail.com&su=Let%27s+Connect!&tf=cm"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 bg-indigo-600 hover:bg-indigo-800 rounded-md transition-transform transform hover:scale-105 duration-200 ease-in-out"
        >
          <MdOutlineMail className="text-white text-4xl sm:text-5xl mb-2" />
          <p className="text-white text-base sm:text-lg font-semibold">Gmail</p>
          <p className="text-neutral-200 text-sm sm:text-base break-words">limjocojared9@gmail.com</p>
        </a>
      </div>
    </main>
  );
}
