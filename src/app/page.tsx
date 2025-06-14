'use client';

import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import { BackgroundMusic } from '../../components/BackgroundMusic';
import AnimatedHeart from '../../components/ui/AnimatedHeart';
import FloralDivider from '../../components/ui/FloralDivider';
import Image from 'next/image';


const WeddingCountdown: FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-11-09T11:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8"
    >
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div
          key={unit}
          whileHover={{ scale: 1.05 }}
          className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl sm:text-4xl font-bold text-pink-600 mb-2"
          >
            {value}
          </motion.div>
          <div className="text-sm text-gray-600 capitalize">
            {unit}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const ImageCarousel: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/slides/slide1.jpeg",
      alt: "Wedding rings"
    },
    {
      image: "/slides/slide2.jpeg", 
      alt: "Wedding flowers"
    },
    {
      image: "/slides/slide3.jpeg",
      alt: "Wedding decoration"
    },
    {
      image: "/slides/slide4.jpeg",
      alt: "Wedding decoration"
    },
    {
      image: "/slides/slide5.jpeg",
      alt: "Wedding decoration"
    },
    {
      image: "/slides/slide6.jpeg",
      alt: "Wedding decoration"
    },
    {
      image: "/slides/slide7.jpeg",
      alt: "Wedding rings"
    },
    {
      image: "/slides/slide8.jpeg", 
      alt: "Wedding flowers"
    },
    {
      image: "/slides/slide9.jpeg",
      alt: "Wedding decoration"
    },
    {
      image: "/slides/slide10.jpeg",
      alt: "Wedding decoration"
    },
    {
      image: "/slides/slide11.jpeg",
      alt: "Wedding decoration"
    },
    {
      image: "/slides/slide12.jpeg",
      alt: "Wedding decoration"
    },
    {
      image: "/slides/slide13.jpeg",
      alt: "Wedding decoration"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-4xl mx-auto mb-24 overflow-hidden rounded-2xl shadow-xl"
    >
      <div className="relative h-[400px]">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              x: `${(index - currentSlide) * 100}%`
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div> */}

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </motion.div>
  );
};

const WeddingInvitationPage: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      {/* Decorative Elements */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-pink-300/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 px-4 sm:pt-40 sm:pb-32">
        {/* Bokeh overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/60 to-amber-100/60" />
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-pink-200/30 blur-2xl"
              style={{
                width: `${30 + Math.random() * 60}px`,
                height: `${30 + Math.random() * 60}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.5 + Math.random() * 0.3,
              }}
            />
          ))}
        </div>
        <div className="relative container mx-auto text-center z-10">
          <div className="flex flex-col items-center justify-center mb-12">
            {/* Couple photo */}
            <Image
              src="/slides/slide1.jpeg"
              alt="Couple"
              width={160}
              height={160}
              className="w-40 h-40 rounded-full border-4 border-pink-200 shadow-xl object-cover mb-6"
              priority
            />
            <h1 className="script-font text-4xl sm:text-6xl lg:text-7xl text-pink-600 flex items-center justify-center mb-8">
              <span>Akshay</span>
              <AnimatedHeart />
              <span>Krutika</span>
            </h1>
          </div>
          <p className="elegant-font text-lg sm:text-xl text-gray-700 mb-8">Together with our families, we invite you to celebrate our union</p>
          <div className="golden-text elegant-font text-2xl sm:text-3xl font-bold mb-12">Save the Date</div>
          {/* Countdown Timer */}
          <div className="mb-4">
            <h3 className="text-xl text-gray-700 mb-6">Counting down to our special day</h3>
            <WeddingCountdown />
            <div className="text-pink-500 font-semibold mt-2">We can&apos;t wait to celebrate with you!</div>
          </div>
          <FloralDivider />
          {/* Image Carousel */}
          <ImageCarousel />
        </div>
      </section>

      {/* Wedding Details */}
      <section className="py-24 px-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24"
          >
            {/* Date */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="text-center p-8 rounded-lg bg-gradient-to-br from-purple-100/80 to-pink-100/80 backdrop-blur-sm border border-purple-200/30 shadow-lg shadow-purple-100/20"
            >
              <motion.div 
                animate={{ 
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl mb-6 flex justify-center"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12 text-pink-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
              </motion.div>
              <h3 className="elegant-font text-xl font-semibold text-gray-800 mb-4">When</h3>
              <p className="text-gray-600 mb-2">Sunday, November 9th, 2025</p>
              <p className="text-gray-600">11:00 AM onwards</p>
            </motion.div>

            {/* Venue */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="text-center p-8 rounded-lg bg-gradient-to-br from-purple-100/80 to-pink-100/80 backdrop-blur-sm border border-purple-200/30 shadow-lg shadow-purple-100/20"
            >
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl mb-6 flex justify-center"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12 text-amber-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                  />
                </svg>
              </motion.div>
              <h3 className="elegant-font text-xl font-semibold text-gray-800 mb-3">Where</h3>
              <p className="text-gray-600">M W Palace</p>
              <p className="text-gray-600">Jam Rd, Jam Naka, Yavatmal, Maharashtra</p>
            </motion.div>

            {/* Celebration */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="text-center p-8 rounded-lg bg-gradient-to-br from-purple-100/80 to-pink-100/80 backdrop-blur-sm border border-purple-200/30 shadow-lg shadow-purple-100/20"
            >
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl mb-6 flex justify-center"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12 text-purple-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                  />
                </svg>
              </motion.div>
              <h3 className="elegant-font text-xl font-semibold text-gray-800 mb-4">Celebration</h3>
              <p className="text-gray-600 mb-2">Marriage Ceremony</p>
              <p className="text-gray-600">Blessings</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bride & Groom Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-pink-50 to-amber-50">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="script-font text-3xl sm:text-4xl text-center text-pink-600 mb-16"
          >
            Meet the Happy Couple
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-4xl mx-auto mb-24">
            {/* Bride Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-8">
                <motion.div 
                  className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    animate={{ 
                      rotate: [0, 5, 0, -5, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full overflow-hidden"
                  >
                    <Image
                      src="/slides/bride.jpeg"
                      alt="Bride"
                      fill
                      className="w-full h-full object-cover rounded-full"
                      sizes="(max-width: 768px) 100vw, 256px"
                      priority
                    />
                  </motion.div>
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full border-4 border-pink-300/50"
                  ></motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(236, 72, 153, 0.4)",
                        "0 0 0 20px rgba(236, 72, 153, 0)",
                        "0 0 0 0 rgba(236, 72, 153, 0.4)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="script-font text-2xl sm:text-3xl text-pink-600 mb-4"
              >
                Krutika
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-700 mb-4"
              >
                Daughter of Mr. & Mrs. Vasantrao&apos;s Rathod
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/80 p-4 rounded-lg"
              >
                <p className="text-sm text-gray-600 italic">
                  &ldquo;Love is not just looking at each other, it&rsquo;s looking in the same direction together.&rdquo;
                </p>
              </motion.div>
            </motion.div>

            {/* Groom Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-8">
                <motion.div 
                  className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    animate={{ 
                      rotate: [0, -5, 0, 5, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200 to-yellow-300 flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src="/slides/groom.jpeg"
                      alt="Groom"
                      fill
                      className="w-full h-full object-cover rounded-full"
                      sizes="(max-width: 768px) 100vw, 256px"
                      priority
                    />
                  </motion.div>
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full border-4 border-amber-300/50"
                  ></motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(245, 158, 11, 0.4)",
                        "0 0 0 20px rgba(245, 158, 11, 0)",
                        "0 0 0 0 rgba(245, 158, 11, 0.4)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="script-font text-2xl sm:text-3xl text-amber-600 mb-4"
              >
                Akshay&apos;s
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-700 mb-4"
              >
                Son of Mr. & Mrs. Gopilal&apos;s and Grandson of Namdev&apos;s Chavhan
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/80 p-4 rounded-lg"
              >
                <p className="text-sm text-gray-600 italic">
                  &ldquo;Together is a wonderful place to be.&rdquo;
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wedding Timeline */}
      <section className="py-24 px-4 bg-white/90">
        <div className="container mx-auto max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="script-font text-3xl sm:text-4xl text-center text-pink-600 mb-16"
          >
            Wedding Day Timeline
          </motion.h2>
          
          <div className="flex flex-col items-center space-y-8">
            {/* Sunrise/Event */}
            <motion.div 
              whileHover={{ scale: 1.02, x: 10, rotate: 1 }}
              className="relative flex flex-col items-center justify-center p-6 rounded-lg overflow-hidden bg-gradient-to-r from-pink-100 to-rose-100 min-h-[120px] w-full text-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Fade overlay */}
              <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(to right, rgba(255,255,255,0.8) 80%, rgba(255,255,255,0.95) 100%)', zIndex: 10}} />
              {/* Card content */}
              <div className="relative z-20 flex flex-col items-center">
                <h4 className="font-semibold text-gray-800">11:00 AM - Ceremony</h4>
                <p className="text-gray-600">Exchange of vows and rings</p>
              </div>
            </motion.div>
            
            {/* Camera/Photography */}
            <motion.div 
              whileHover={{ scale: 1.02, x: 10, rotate: -1 }}
              className="relative flex flex-col items-center justify-center p-6 rounded-lg overflow-hidden bg-gradient-to-r from-amber-100 to-yellow-100 min-h-[120px] w-full text-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Fade overlay */}
              <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(to right, rgba(255,255,255,0.8) 80%, rgba(255,255,255,0.95) 100%)', zIndex: 10}} />
              {/* Card content */}
              <div className="relative z-20 flex flex-col items-center">
                <h4 className="font-semibold text-gray-800">1:30 PM - Photography</h4>
                <p className="text-gray-600">Family and couple portraits</p>
              </div>
            </motion.div>
            
            {/* Dishes/Reception */}
            <motion.div 
              whileHover={{ scale: 1.02, x: 10, rotate: 1 }}
              className="relative flex flex-col items-center justify-center p-6 rounded-lg overflow-hidden bg-gradient-to-r from-purple-100 to-pink-100 min-h-[120px] w-full text-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Fade overlay */}
              <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(to right, rgba(255,255,255,0.8) 80%, rgba(255,255,255,0.95) 100%)', zIndex: 10}} />
              {/* Card content */}
              <div className="relative z-20 flex flex-col items-center">
                <h4 className="font-semibold text-gray-800">1:00 PM - Reception</h4>
                <p className="text-gray-600">Dinner and celebration</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="script-font text-3xl sm:text-4xl text-pink-600 mb-16"
          >
            Please Join Us
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/90 p-8 rounded-lg shadow-lg mb-24"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-700 mb-6 text-lg"
            >
              Your presence would make our special day even more meaningful. 
              Please let us know if you&apos;ll be able to celebrate with us.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-60 px-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white overflow-hidden"
      >
        <div className="container mx-auto text-center min-h-[200px] flex flex-col justify-center">
          <div className="script-font text-2xl mb-4">
            Krutika & Akshay&apos;s
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-pink-100"
          >
            Two families becoming one ✨
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 text-pink-200 text-sm"
          >
            #akshay_krutika_Wedding2025 ❤️
          </motion.div>
          <FloralDivider />
          <div className="text-center text-pink-200 mt-4">Made with love by Akshay & Krutika</div>
        </div>
      </motion.footer>
      {/* <BackgroundMusic /> */}
    </div>
  );
};

export default WeddingInvitationPage;
