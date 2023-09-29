import {FaHtml5, FaCss3, FaReact, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss, SiJavascript} from'react-icons/si'

const Skills = () => {

  return (
<main className='py-6 bg-gray-900'>
  <p className='text-2xl text-white font-semibold px-4 capitalize text-center py-2'>my skills</p>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-6 py-6'>
        <FaCss3 size={80}  className='mx-auto border text-white border-white cursor-pointer hover:scale-95 hover:bg-white hover:text-black duration-300 rounded-md p-4' title='html5'/>
        <FaHtml5 size={80} className='mx-auto border text-white border-white cursor-pointer hover:scale-95 hover:text-black hover:bg-white duration-300 rounded-md p-4' title='CSS'/>
        <FaReact size={80}  className='mx-auto border  text-white border-white cursor-pointer hover:scale-95 duration-300 hover:bg-white hover:text-black rounded-md p-4' title='React'/>
        <FaNodeJs size={80}  className='mx-auto border  text-white border-white cursor-pointer hover:scale-95 duration-300 hover:bg-white hover:text-black rounded-md p-4'title='NodeJs'/>
        <SiTailwindcss size={80}  className='mx-auto  text-white p-4 border cursor-pointer hover:scale-95 duration-300 hover:bg-white hover:text-black border-white rounded-md' title='tailwindCSS'/>
        <SiJavascript size={80}  className='mx-auto  text-white p-4 border cursor-pointer hover:scale-95 duration-300 hover:bg-white hover:text-black border-white rounded-md' title='javascript'/>
    </div>
</main>
  )
}

export default Skills