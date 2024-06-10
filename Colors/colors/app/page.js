"use client"

import Head from 'next/head';
import React, { useState } from 'react';
import ColorCard from './components/ColorCard'
// import styles from '../styles/styles.css';

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Home() {
    const [colors, setColors] = React.useState({
        color1: '#FFFFFF',
        color2: '#FFFFFF',
        color3: '#FFFFFF',
        color4: '#FFFFFF',
        color5: '#FFFFFF',
    });

    const randomizeColors = () => {
        setColors({
            color1: getRandomColor(),
            color2: getRandomColor(),
            color3: getRandomColor(),
            color4: getRandomColor(),
            color5: getRandomColor(),
        });
    };
    return (
      <div className="min-h-screen flex flex-row items-center justify-center bg-gray-100">
        <div>
          <div id="container" className="flex flex-wrap justify-center my-12 m-8 py-8 px-8 bg-white shadow-lg rounded-lg">
            <section id="section1" className="color-section m-4 py-4 px-8 rounded-lg" style={{ backgroundColor: colors.color1 }}>
              <p id="color1" className="text-white font-bold text-xl">{colors.color1}</p>
            </section>
            <section id="section2" className="color-section m-4 py-4 px-8 rounded-lg" style={{ backgroundColor: colors.color2 }}>
              <p id="color2" className="text-white font-bold text-xl">{colors.color2}</p>
            </section>
            <section id="section3" className="color-section m-4 py-4 px-8 rounded-lg" style={{ backgroundColor: colors.color3 }}>
              <p id="color3" className="text-white font-bold text-xl">{colors.color3}</p>
            </section>
            <section id="section4" className="color-section m-4 py-4 px-8 rounded-lg" style={{ backgroundColor: colors.color4 }}>
              <p id="color4" className="text-white font-bold text-xl">{colors.color4}</p>
            </section>
            <section id="section5" className="color-section m-4 py-4 px-8 rounded-lg" style={{ backgroundColor: colors.color5 }}>
              <p id="color5" className="text-white font-bold text-xl">{colors.color5}</p>
            </section>
          <div>
            <button id="randomizeButton" onClick={randomizeColors} className="mt-8 my-8 py-2 px-4 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Randomize Colors
            </button>
          </div>
          </div>
        </div>
        <div>
          <ColorCard color={randomizeColors} />
        </div>
      </div>
    );
  }    


//     return (
//       <div>
//           <div id="container" className='flex m-12 py-12 px-12'>
//               <section id="section1" className="color-section py-4 px-4" style={{ backgroundColor: colors.color1 }}>
//                   <p id="color1">{colors.color1}</p>
//               </section>
//               <section id="section2" className="color-section  py-4 px-4" style={{ backgroundColor: colors.color2 }}>
//                   <p id="color2">{colors.color2}</p>
//               </section>
//               <section id="section3" className="color-section  py-4 px-4" style={{ backgroundColor: colors.color3 }}>
//                   <p id="color3">{colors.color3}</p>
//               </section>
//               <section id="section4" className="color-section  py-4 px-4" style={{ backgroundColor: colors.color4 }}>
//                   <p id="color4">{colors.color4}</p>
//               </section>
//               <section id="section5" className="color-section py-4 px-4" style={{ backgroundColor: colors.color5 }}>
//                   <p id="color5">{colors.color5}</p>
//               </section>
              


//           </div>
//               <div>
//                 <button id="randomizeButton" onClick={randomizeColors}>
//                     Randomize Colors
//                 </button>
//               </div>
//         </div>
//     );
// }

export default Home;