import './App.css'
import profile from './assets/profile.jpg';

const App = () => {

  return (
    <>
      <div className='flex flex-col w-full h-full items-center justify-center jutify-items-center'>
        <div className=''>
          <img className='m-2 w-32 h-32 rounded-full drop-shadow-[0_10px_50px_rgba(255,255,255,0.35)] border-white' src={profile} alt='profile'></img>
        </div>
        <p className='m-2 text-xl text-white'>Hi, I'm Girishh 👋</p>
      </div>
    </>
  )
}

export default App
