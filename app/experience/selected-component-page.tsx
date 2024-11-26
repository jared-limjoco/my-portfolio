'use client';

import { useState } from 'react';
import clsx from 'clsx';

import Skills from '@/app/experience/skills';
import Roles from '@/app/experience/roles';
import Projects from '@/app/experience/projects';


export default function SelectedComponentPage() {
  // State to track the selected component
  const [selectedComponent, setSelectedComponent] = useState(1);

  return (
    <div className="flex flex-col items-center p-8">
      {/* Row of Buttons in a Table Layout */}
      <div className="w-full sm:w-[70%] bg-zinc-800 grid grid-cols-1 sm:grid-cols-3 p-1 gap-4 justify-center rounded-md shadow-md animate-popFadeIn">
        <div
          onClick={() => setSelectedComponent(1)}
          className={clsx(
            'p-1 cursor-pointer rounded-md transition-all duration-300 transition-colors text-center',
            selectedComponent === 1 ? 'bg-zinc-900 text-white' : 'bg-zinc-800 text-zinc-500'
          )}
        >
          <div className="text-center font-bold">Skills</div>
        </div>
        <div
          onClick={() => setSelectedComponent(2)}
          className={clsx(
            'p-1 cursor-pointer rounded-md transition-all duration-300 transition-colors text-center',
            selectedComponent === 2 ? 'bg-zinc-900 text-white' : 'bg-zinc-800 text-zinc-500'
          )}
        >
          <div className="text-center font-bold">Roles</div>
        </div>
        <div
          onClick={() => setSelectedComponent(3)}
          className={clsx(
            'p-1 cursor-pointer rounded-md transition-all duration-300 transition-colors text-center',
            selectedComponent === 3 ? 'bg-zinc-900 text-white' : 'bg-zinc-800 text-zinc-500'
          )}
        >
          <div className="text-center font-bold">Projects</div>
        </div>
      </div>

      {/* Display the selected component below */}
      <div className="mt-4 w-full sm:w-[105%]">
        {selectedComponent === 1 && (<Skills />)}
        {selectedComponent === 2 && (<Roles />)}
        {selectedComponent === 3 && (<Projects />)}
      </div>
    </div>
  );
}
