import {HiArrowRight} from 'react-icons/hi2'
import {FaFacebook, FaInstagram, FaXTwitter, FaBehance} from 'react-icons/fa6'


const Hero = () => {

  return (
    <main className="px-4 pt-[100px] font-[poppins]">
        <div className="flex flex-col items-center md:flex-row md:max-w-[1280px] mx-auto">
          <div className="py-4">
            <p className=" text-2xl py-2 font-normal">hello! i'm 
            Jeremy ito.</p>
            <p className="font-extrabold text-5xl md:max-w-[70%]">I'm FrontEnd Developer and also an enthusiastic <span className="text-slate-300">web designer</span></p>
            <p className='p-4'>I can develope responsive websites with great user experience and interfaces.</p>
            <button className="py-3 px-4 m-4 ml-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">let's talk<HiArrowRight className='ml-1'/></button>
            </div>
            <div className="my-4 md:flex justify-between items-center">
              <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="rounded-xl mx-auto"/>
              <ul className='md:flex hidden flex-col gap-6 px-4'>
                <li  className='border p-2 rounded-full hover:bg-blue-700 hover:text-white cursor-pointer duration-300' title='Facebook'><FaFacebook size={30}/></li>
                <li  className='border p-2 rounded-full hover:bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:text-white duration-300 cursor-pointer' title='instagram'><FaInstagram size={30} /></li>
                <li  className='border p-2 rounded-full hover:bg-gradient-to-r from-slate-900 to-slate-700 hover:text-white cursor-pointer duration-300' title='X'><FaXTwitter size={30} className=''/></li>
                <li className='border p-2 rounded-full hover:bg-gradient-to-r from-blue-600 to-violet-600 cursor-pointer hover:text-white duration-300' title='Behance'><FaBehance size={30} className=''/></li>
              </ul>
            </div>
        </div>
    </main>
  )
}

export default Hero