import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="prose-custom">
        <p>Welcome to eDPICalc, your premier destination for high-performance gaming tools. Our mission is simple: to provide competitive FPS gamers with the most accurate, fast, and user-friendly tools to optimize their performance.</p>
        
        <h2>Our Mission</h2>
        <p>In the world of competitive gaming, every millisecond and every pixel matters. We believe that understanding your technical setup shouldn't be a hurdle to your success. That's why we build lightweight, ad-supported tools that help you find your perfect sensitivity, monitor your progress, and climb the ranks.</p>
        
        <h2>Why eDPI Matters</h2>
        <p>Effective DPI (eDPI) is the true measure of your sensitivity. It combines your hardware settings (DPI) with your software settings (In-game sensitivity) to give you a single number that defines how you move in the virtual world. By standardizing this number, you can easily compare your settings with professional players and maintain consistency across different games.</p>
        
        <h2>Free and Accessible</h2>
        <p>We are committed to keeping our tools free for everyone. We use non-intrusive advertisements to fund our development and hosting costs, ensuring that you always have access to the best gaming utilities without a subscription fee.</p>
      </div>
    </div>
  );
}
