import React from 'react';
import VisionSection from "../components/VisionSection/VisionSection";
import Howtodoitsection from "../components/Howtodoitsection/Howtodoitsection";
import flow from "../assets/Flow.png"
import medals from "../assets/medals.png"
import Computers from "../assets/Computers.png"
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Process from '../components/Process/Process';

const About = () => {
  return (
    <>
      <VisionSection />
     
 <Howtodoitsection
        heading="HOW WE DO IT"
        text="The process begins with athlete selection and notification, followed by reporting to the doping
              control station. The athlete chooses a vessel, provides urine samples, chooses its volume,
              and splits it. Once the sample is sealed, specific gravity is measured, and the doping control form
              is completed. Finally, the sample undergoes analysis."
        buttonLabel="View More"
        image={flow}
        layout="image-right"
      />
      <WhyChooseUs/>
      <Process/>

 


    </>
  );
};

export default About;





