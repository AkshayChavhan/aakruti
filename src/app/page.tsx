'use client';

import { FC } from 'react';

const WeddingInvitationPage: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 px-4 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-amber-100/50"></div>
        <div className="relative container mx-auto text-center">
          <div className="mb-8">
            <h1 className="script-font text-4xl sm:text-6xl lg:text-7xl text-pink-600 mb-4">
              Aakruti & Partner
            </h1>
            <div className="heart-divider"></div>
            <p className="elegant-font text-lg sm:text-xl text-gray-700 mb-6">
              Together with our families, we invite you to celebrate our union
            </p>
            <div className="golden-text elegant-font text-2xl sm:text-3xl font-bold">
              Save the Date
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section className="py-12 px-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Date */}
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-pink-100 to-rose-100 floral-border">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="elegant-font text-xl font-semibold text-gray-800 mb-2">When</h3>
              <p className="text-gray-600">Saturday, December 25th, 2024</p>
              <p className="text-gray-600">4:00 PM onwards</p>
            </div>

            {/* Venue */}
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-amber-100 to-yellow-100 floral-border">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="elegant-font text-xl font-semibold text-gray-800 mb-2">Where</h3>
              <p className="text-gray-600">Grand Palace Gardens</p>
              <p className="text-gray-600">123 Wedding Lane, City</p>
            </div>

            {/* Celebration */}
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 floral-border">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="elegant-font text-xl font-semibold text-gray-800 mb-2">Celebration</h3>
              <p className="text-gray-600">Ceremony & Reception</p>
              <p className="text-gray-600">Dinner & Dancing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bride & Groom Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-pink-50 to-amber-50">
        <div className="container mx-auto">
          <h2 className="script-font text-3xl sm:text-4xl text-center text-pink-600 mb-12">
            Meet the Happy Couple
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Bride Side */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-full bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center text-6xl">
                  👰‍♀️
                </div>
              </div>
              <h3 className="script-font text-2xl sm:text-3xl text-pink-600 mb-4">Aakruti</h3>
              <p className="text-gray-700 mb-4">
                Daughter of Mr. & Mrs. [Bride&apos;s Parents]
              </p>
              <div className="bg-white/80 p-4 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;Love is not just looking at each other, it&rsquo;s looking in the same direction together.&rdquo;
                </p>
              </div>
            </div>

            {/* Groom Side */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-full bg-gradient-to-br from-amber-200 to-yellow-300 flex items-center justify-center text-6xl">
                  🤵‍♂️
                </div>
              </div>
              <h3 className="script-font text-2xl sm:text-3xl text-amber-600 mb-4">[Groom&apos;s Name]</h3>
              <p className="text-gray-700 mb-4">
                Son of Mr. & Mrs. [Groom&apos;s Parents]
              </p>
              <div className="bg-white/80 p-4 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;Together is a wonderful place to be.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Timeline */}
      <section className="py-12 px-4 bg-white/90">
        <div className="container mx-auto max-w-3xl">
          <h2 className="script-font text-3xl sm:text-4xl text-center text-pink-600 mb-12">
            Wedding Day Timeline
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-pink-100 to-rose-100">
              <div className="text-2xl">🌅</div>
              <div>
                <h4 className="font-semibold text-gray-800">4:00 PM - Ceremony</h4>
                <p className="text-gray-600">Exchange of vows and rings</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-amber-100 to-yellow-100">
              <div className="text-2xl">📸</div>
              <div>
                <h4 className="font-semibold text-gray-800">5:30 PM - Photography</h4>
                <p className="text-gray-600">Family and couple portraits</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100">
              <div className="text-2xl">🍽️</div>
              <div>
                <h4 className="font-semibold text-gray-800">7:00 PM - Reception</h4>
                <p className="text-gray-600">Dinner and celebration</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-green-100 to-emerald-100">
              <div className="text-2xl">💃</div>
              <div>
                <h4 className="font-semibold text-gray-800">9:00 PM - Dancing</h4>
                <p className="text-gray-600">Music and celebration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="script-font text-3xl sm:text-4xl text-pink-600 mb-8">
            Please Join Us
          </h2>
          
          <div className="bg-white/90 p-8 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-6 text-lg">
              Your presence would make our special day even more meaningful. 
              Please let us know if you&apos;ll be able to celebrate with us.
            </p>
            
            <div className="space-y-4">
              <button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105">
                RSVP - Yes, I&apos;ll be there! 💕
              </button>
              
              <div className="text-sm text-gray-600">
                <p>Please RSVP by December 1st, 2024</p>
                <p>Contact: +91 [Phone Number] | [Email]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="container mx-auto text-center">
          <div className="script-font text-2xl mb-4">
            Aakruti & [Groom&apos;s Name]
          </div>
          <p className="text-pink-100">
            Two families becoming one ✨
          </p>
          <div className="mt-4 text-pink-200 text-sm">
            #AakrutiWedding2024 💕
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WeddingInvitationPage;
