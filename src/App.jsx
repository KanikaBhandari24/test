import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' text-7xl w-full min-h-screen bg-zinc-900'>
      <div className='flex justify-between items-center p-10'>
        <div>
          <h1 className='text-3xl text-white font-semibold'>Adi</h1>
        </div>
        <div className='flex gap-10 text-sm text-white'>
          {['About', 'Skills', 'Hobbies', 'Passions'].map((val) => (
          <a>
              {val}
          </a>
          ))}
          <a className='text-2xl font-semibold border-2 border-white' href='https://port-new-six.vercel.app/' download="">porfolio</a>
        </div>
      </div>

      <div>
        <div className='flex leading-0 flex-col items-start justify-start mt-10 px-10 '>
          <h1 className='text-5xl text-white font-semibold'>Hello, I am Aditya</h1>
          <p className='text-2xl text-gray-400 mt-4'>I am a Software Engineer</p>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-300 transition-all duration-300 mt-4'>Contact Me</button>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center  mt-10'>
        <h1 className='text-5xl font-bold text-white text-left px-10 mt-20'>My skills</h1>
        <div className='flex gap-10 items-center px-10 mt-10'>
          {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'GSAP'].map((val) => (
            <h1 className='text-2xl font-semibold text-zinc-200'>{val}</h1>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center justify-center  mt-4'>
      
        <h1 className='text-5xl font-bold text-white text-left px-10 mt-20'>Hobbies and Interest</h1>
        <div className='flex gap-10 items-center px-10 mt-10'>
          {['Running', 'Coding', ' Playing guitar'].map((val) => (
            <h1 className='text-2xl font-semibold text-zinc-200'>{val}</h1>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center justify-center  mt-4'>
      
        <h1 className='text-5xl font-bold text-white text-left px-10 mt-20'>Passion</h1>
        <div className='flex gap-10 items-center px-10 mt-10'>
          
            <h1 className='text-2xl font-semibold text-zinc-200'>I'm passionate about creating animated websites using animating tools like GSAP, Framer Motion</h1>
          
        </div>
      </div>
      <div className='flex flex-col items-center justify-center  mt-4'>
      
        <h1 className='text-5xl font-bold text-white text-left px-10 mt-20'>Academic Background</h1>
        <div className='flex gap-10 items-center px-10 mt-10'>
          
            <h1 className='text-2xl font-semibold text-zinc-200'>Undergraduate Computer Application Student</h1>
          
        </div>
      </div>
      <div className='flex flex-col items-center justify-center  mt-4'>
      
        <h1 className='text-5xl font-bold text-white text-left px-10 mt-20'>certification</h1>
        <div className='flex gap-10 items-center px-10 mt-10'>
          
            <h1 className='text-2xl font-semibold text-zinc-200'>100 days Web development bootcamp</h1>
            <h1 className='text-2xl font-semibold text-zinc-200'>java completion course</h1>
            <h1 className='text-2xl font-semibold text-zinc-200'>100 days python bootcamp</h1>
        </div>
      </div>
      <p className='text-white text-sm px-10 py-10 tracking-tighter'>Due to some circumstances I won't be able to complete this site you can go throgh my <a href='https://port-new-six.vercel.app/'>portfolio</a> for better experience</p>
    </div>
  )
}

export default App
