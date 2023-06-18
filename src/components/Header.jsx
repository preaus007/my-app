import React from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function Header() {
  
  const location = useLocation();
  const navigator = useNavigate(); 
  
  function pathMatchRoute(route){
    if(route === location.pathname){
      return true;
    }
  }

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <h2 className='cursor-pointer text-lg font-bold' onClick={() => navigator("/")}><span className='text-green-500'>Bird</span>ly</h2>
        </div>
        <div>
          <ul className='flex space-x-10'> 
            <li className={`cursor-pointer py-5 font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-green-900" }`} onClick={() => navigator("/")}>Home</li>
            <li className={`cursor-pointer py-5 font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-green-900" }`} onClick={() => navigator("/offers")}>Offers</li>
            <li className={`cursor-pointer py-5 font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/sign-in") && "text-black border-b-green-900" }`} onClick={() => navigator("/sign-in")}>Sign in</li>
          </ul>
        </div>
      </header>
    </div>
  )
}
