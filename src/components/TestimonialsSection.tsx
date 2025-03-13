import React from 'react';
import { AnimatedTestimonials } from './ui/animated-testimonials';

const testimonials = [
  {
    quote: "The classes not only help you become a competent speaker and a powerful writer, they also allow you to develop a deep level of control over your language skills.",
    name: "Nicole Schindler",
    designation: "German Student",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "INTERLINK provides useful and excellent methods to help students sharpen their English skills…and has excellent teachers who serve as students' instructors, mentors, and friends.",
    name: "Mei-Lan Chen",
    designation: "Taiwanese Student",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "During the nine months that I was at INTERLINK, my English skills improved more than I could have expected. It was a valuable experience, not just because I improved my English, but also because I learned about different cultures and made new friends. I strongly recommend this program to people who seek to develop their English in a short period of time.",
    name: "Norah Alkhunaini",
    designation: "Saudi Student",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "The enthusiasm of the students to learn and the professional capabilities of the INTERLINK staff multiply the positive experience of the process for the remarkable growth of all involved.",
    name: "Linda Lambert",
    designation: "US Instructor",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

const TestimonialsSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#064088] pt-12 mb-6">
          What Our Students Say
        </h2>
        
        <AnimatedTestimonials testimonials={testimonials} className="pt-0 mt-0" />
      </div>
    </div>
  );
};

export default TestimonialsSection;
