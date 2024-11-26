"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from industry professionals who bring their real-world experience and passion for teaching into every lesson. Our instructors are not just teachers but mentors who guide you through every step of your musical journey, providing invaluable insights and inspiration.",
  },
  {
    title: "Performance Opportunities",
    description:
      "Gain confidence and showcase your talents with regular performance opportunities. Whether it’s in front of your peers, at recitals, or in community events, our program provides numerous platforms for you to shine and gain practical experience.",
  },
  {
    title: "Community & Collaboration",
    description:
      "Join a vibrant community of fellow musicians. Our collaborative environment encourages you to connect, learn, and grow with others who share your passion. Participate in group projects, ensembles, and workshops that foster teamwork and collective growth.",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
