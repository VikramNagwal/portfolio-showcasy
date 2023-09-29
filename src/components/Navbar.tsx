import { useState } from 'react'
import {HiArrowRight, HiBars3, HiXMark, HiDocumentArrowDown, HiChartBar, HiPhone} from 'react-icons/hi2'

const Navbar = () => {

    const [nav, setNav] = useState<boolean>(false)

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-white py-2'>
        <div className='flex items-center justify-between py-4 px-6'>
            <h1 className="text-slate-400 font-bold text-2xl md:text-3xl">
                show<span className="text-black">casy.</span>
            </h1>
             <div className='flex items-center'>
                <button className="py-3 hidden px-4 md:inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">let's talk<HiArrowRight className='ml-1'/></button>
                {!nav?<HiBars3 onClick={() => setNav((prev) => !prev)} size={40} className='px-2 py1 border rounded-full mx-2 md:mx-6 border-black cursor-pointer'/>:<HiXMark onClick={() => setNav((prev) => !prev)} size={40} className='px-2 py1 border rounded-full mx-2 border-black md:mx-6 cursor-pointer'/>}
             </div>   
        </div>
          {/* mobile navigation*/} 
          <div className={nav?'w-full text-lg bg-gray-800 font-semibold py-6 px-4 text-white' : 'hidden'}>
            
            <ul className='text-center'>
              <li className='py-2 flex items-center gap-3 cursor-pointer my-2 px-4 mx-auto'>Download CV<HiDocumentArrowDown size={20} className=''/></li>
              <li className='py-2 flex items-center gap-3 cursor-pointer my-2 px-4 mx-auto'>skills<HiChartBar size={20} className='' /></li>
              <li className='py-2 flex items-center gap-3 cursor-pointer my-2 px-4 mx-auto'>Contact me<HiPhone size={20} className=''/></li>
            </ul>
          </div>
    </nav>
  )
}

export default Navbar