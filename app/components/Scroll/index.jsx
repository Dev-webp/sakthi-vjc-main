'use client';
import { useEffect } from 'react';
import Lenis from 'lenis'
import Intro from './components/Intro';
import Section from './components/Section';
import About from "@/app/components/About";
export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      <About/>
      <Section />
      <div className='h-10'></div>
    </main>
  );
}