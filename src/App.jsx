// index.js
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS here
import './index.css'
import React from 'react';
import { Dashboard } from "./Dashboard"




function App() {

  return (
    // wallpaperColor: bg-[rgb(23,23,25)]
    // stageColor: [rgb(36,35,41)]
    <div className="grid grid-rows-[auto,1fr] h-full bg-[rgb(23,23,25)]">
      <div className=" bg-[rgb(23,23,25)]/30 backdrop-blur-2xl  flex flex-col justify-start lg:h-5/10 p-5 mb-5 sticky top-0 z-50 shadow-lg shadow-[rgb(36,35,41)] ps-5"  >
          <img src="../public/Logo.png" alt="Logo"  className='  w-40'/>
          <span className='text-white'> Powered by speachly</span>
      </div>
      <div>
        <Dashboard  className=" bg-slate-500"/>
      </div>
    
    </div>
  );
}

export default App
