// index.js
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS here
import './index.css'
import React from 'react';
import { Dashboard } from "./Dashboard"



function App() {

  return (
    <div className="grid grid-rows-[auto,1fr] h-screen">
      <div className="bg-gray-100 flex items-center justify-center lg:h-5/10">
        <h1 className="text-5xl font-normal text-gray-800">Hello, Tailwind CSS!</h1>
      </div>
      <Dashboard  className=" bg-slate-500"/>
    
    </div>
  );
}

export default App
