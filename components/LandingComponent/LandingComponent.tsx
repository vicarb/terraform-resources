import React, { useState } from 'react';
import { useSpring } from '@react-spring/web';


const LandingComponent = () => {


  return (
    <section className="bg-brown-light min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-brown-dark mb-4">
        Welcome to My Terraform Site
      </h1>
      <p className="text-lg text-brown-mid">
        Learn Terraform and pass the associate exam with ease!
      </p>
      <button className="mt-4 px-6 py-2 rounded-full bg-brown-mid text-white hover:bg-brown-dark">
        Get Started
      </button>
    </div>
  </section>
  );
};



export default LandingComponent;