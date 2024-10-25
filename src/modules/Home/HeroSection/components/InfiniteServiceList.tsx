'use client';
import { useState, useEffect } from 'react';

const InfiniteServiceList = () => {
  const sequence = [
    'IT Consulting',
    'Web application development',
    'Mobile application development',
    'Custom software development',
    'Internet of Things (IoT)',
    'Artificial Intelligence',
    'DevOps',
    'Cloud Engineering',
    'UI/UX Development',
    'QA & Testing Service',
    'Staff Augmentation',
    'Support & Maintenance',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Hide the current item

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === sequence.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true); // Show the new item
      }, 500); // Match this timing with the animation duration
    }, 2500); // Total interval for switching items

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <span
      className={`inline-block text-h1 text-[#4cffeb] transition-opacity duration-500 transform ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {sequence[currentIndex]}
    </span>
  );
};

export default InfiniteServiceList;
