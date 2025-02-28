/// <reference types="vite-plugin-svgr/client" />
import './App.css'
import profile from './assets/profile.jpg';
import ReactLogo from './assets/reactjs-icon.svg?react';
import JavaLogo from './assets/java-icon.svg?react';
import SpringLogo from './assets/springio-icon.svg?react';
import KafkaLogo from './assets/apache_kafka-icon.svg?react';
import JSLogo from './assets/javascript-icon.svg?react';
import MongoLogo from './assets/mongodb-icon.svg?react';

interface Project {
  photo: string,
  title: string,
  desc: string
}
const App = () => {

  const projects: Array<Project> =
    [
      {
        photo: profile,
        title: 'Portfolio',
        desc: 'A react application built for personal portfolio'
      },
      {
        photo: profile,
        title: 'Portfolio',
        desc: 'A react application built for personal portfolio'
      },


    ];

  return (
    <>
      <div className='flex flex-col w-full h-full items-center justify-center jutify-items-center'>
        <div className=''>
          <img className='m-2 w-32 h-32 rounded-full drop-shadow-[0_10px_50px_rgba(255,255,255,0.35)] border-white' src={profile} alt='profile'></img>
        </div>
        <p className='m-2 text-xl text-white'>Hi, I'm Girishh 👋</p>
      </div>
    </>
  )
}

export default App
