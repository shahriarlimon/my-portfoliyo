import React from 'react';
import firstProject from '../assets/screencapture-the-autostars-web-app-2022-06-11-20_44_00.png';
import toolKits from '../assets/toolKits.png';
import doctor from '../assets/Dr.Marckel.png';
import drone from '../assets/drone.png';
import bookReader from '../assets/BookReader.png';
import phoneMania from '../assets/PhonoMania.png'



const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${firstProject})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a target="_blank"  href=' https://the-autostars.web.app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a target="_blank" href='https://github.com/shahriarlimon/the-auto-stars-client'
>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Client
                  </button>
                </a>
                <a target="_blank" href='https://github.com/shahriarlimon/the-autostars-server'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Server
                  </button>
                </a>

              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${toolKits})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a target="_blank" href='https://tool-kits-d4174.web.app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a target="_blank" href='https://github.com/shahriarlimon/toolKits-client'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Client
                  </button>
                </a>
                <a target="_blank" href='https://github.com/shahriarlimon/toolKits-server'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Server
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${doctor})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a target="_blank" href='https://doctor-chamber-53e5b.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a target="_blank" href='https://github.com/shahriarlimon/doctor_markel'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${drone})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a target="_blank" href='https://animated-drone-zone.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a target="_blank" href='https://github.com/shahriarlimon/drone-zone'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${bookReader})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a target="_blank" href='https://hereisbookreader.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a target="_blank" href='https://github.com/shahriarlimon/bookReader'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${phoneMania})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                JS Application
              </span>
              <div className='pt-8 text-center'>
                <a target="_blank" href='https://phonomania.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a target="_blank" href='https://github.com/shahriarlimon/phono-mania'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
