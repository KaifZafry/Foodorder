// import React from 'react'
// import UserClass from './UserClass'

// const About = () => {
//   return (
//     <div>
//         <h1>
//             This is About page</h1>
//             <h2>this is created for only learning purpose</h2>
//             <UserClass name={"kaifZafry"} location={"Delhi"}/>
//     </div>
//   )
// }

// export default About

import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About Kitche</h1>
      <p>
        Kitchen is a food delivery platform that brings your favorite food from local restaurants
        right to your doorstep. With a wide range of cuisines and restaurants to choose from,
        Kitchen makes it easy for you to enjoy delicious meals without leaving the comfort of your
        home.
      </p>
      <p>
        Our mission is to provide a seamless and convenient food ordering experience. Whether you're
        craving something specific or exploring new flavors, Kitchen has you covered. Discover
        incredible dining options and let us handle the rest.
      </p>
    </div>
  );
};

export default AboutPage;