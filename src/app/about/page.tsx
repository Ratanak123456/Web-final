import Hero from '@/components/aboutpage/Hero';
import Story from '@/components/aboutpage/Story';
import Benefits from '@/components/aboutpage/Benefits';
import Journey from '@/components/aboutpage/Journey';
import GlobalImpact from '@/components/aboutpage/GlobalImpact';
import Values from '@/components/aboutpage/Values';
import TeamQuote from '@/components/aboutpage/TeamQuote';
import FinalCTA from '@/components/aboutpage/FinalCTA';

export const metadata = {
  title: 'About • A Global Community of Passionate Learners & Educators',
};

export default function About() {
  return (
    <>
      <Hero />
      <Story />
      <Benefits />
      <Journey />
      <Values />
      <TeamQuote />
      <FinalCTA />
      <GlobalImpact />
    
      
      
    </>
  );
}