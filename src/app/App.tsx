import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutExperience from './components/AboutExperience';
import SignatureMenu from './components/SignatureMenu';
import ChefSpotlight from './components/ChefSpotlight';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';
import ScrollProgress from './components/ScrollProgress';
import SectionDivider from './components/SectionDivider';
import CursorGlow from './components/CursorGlow';

export default function App() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden relative min-h-screen">
      <CursorGlow />
      <ScrollProgress />
      <FloatingParticles />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SectionDivider />
        <AboutExperience />
        <SectionDivider />
        <SignatureMenu />
        <SectionDivider />
        <ChefSpotlight />
        <SectionDivider />
        <Gallery />
        <SectionDivider />
        <Reservation />
        <SectionDivider />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}