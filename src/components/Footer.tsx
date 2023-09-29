import {FaFacebook, FaInstagram, FaXTwitter, FaBehance} from 'react-icons/fa6'

const Footer = () => {

  return (
    <div>
        <ul className='flex py-4 gap-6 px-4 bg-gray-900'>
  <li className='border mx-auto p-2 rounded-full text-white hover:bg-blue-700 cursor-pointer duration-300' title='Facebook'><FaFacebook size={30}/></li>
  <li className='border mx-auto p-2 rounded-full text-white hover:bg-gradient-to-r from-fuchsia-500 to-pink-500 duration-300 cursor-pointer' title='instagram'><FaInstagram size={30} /></li>
  <li className='border mx-auto p-2 rounded-full text-white hover:bg-gradient-to-r from-slate-900 to-slate-700 cursor-pointer duration-300' title='X'><FaXTwitter size={30} className=''/></li>
  <li className='border mx-auto p-2 rounded-full text-white hover:bg-gradient-to-r from-blue-600 to-violet-600 cursor-pointer duration-300' title='Behance'><FaBehance size={30} className=''/></li>
  </ul>
    </div>
  )
}

export default Footer