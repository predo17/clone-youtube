
import { Link } from 'react-router-dom'
import CategoryFilter from './CategoryFilter'

interface NavbarProps {
  toggleSidebar: () => void;
  paddingLeft: string;
}

const Navbar = ({ toggleSidebar, paddingLeft }: NavbarProps)=> {
  return (
    <div className="fixed top-0 left-0 w-full h-auto bg-[#0f0f0ff1] backdrop-blur-2xl z-10">
      <header className="h-16 flex items-center justify-between gap-3 px-4 ">
        <div className="flex gap-6 items-center">
          <button onClick={toggleSidebar} className="px-2 py-1 hover:bg-zinc-700 rounded-full cursor-pointer hidden md:block">
            <i className="ri-menu-line text-2xl"></i>
          </button>

          <Link to='/' className="flex items-center gap-3 relative cursor-pointer">
            <i className="ri-youtube-fill text-[2.2rem] w-3 h-3 bg-white flex items-center justify-center text-red-500"></i>
            <h1 className="text-2xl">Youtube<span className="absolute top-0 pl-1 text-xs text-gray-400">BR</span></h1>
          </Link>
        </div>

        <form className=" lg:flex-1 max-w-2xl ml-4 flex items-center max-md:gap-4">
          <input
            type="text"
            placeholder="Pesquisar"
            className=" w-full max-w-xl px-6 py-2 bg-zinc-900 rounded-l-full hidden md:block outline outline-zinc-700 focus:outline-blue-700 z-10"
          />
          <button className=" md:px-6 md:py-2 md:bg-zinc-800 md:border border-zinc-700  rounded-r-full cursor-pointer max-md:block hidden">
            <i className="ri-picture-in-picture-line"></i>
          </button>
          <button className=" md:px-6 md:py-2 md:bg-zinc-800 md:border border-zinc-700  rounded-r-full cursor-pointer max-md:block hidden">
            <i className="ri-notification-4-fill"></i>
          </button>
          <button className=" md:px-6 md:py-2 md:bg-zinc-800 md:border border-zinc-700  rounded-r-full cursor-pointer">
            <i className="ri-search-line"></i>
          </button>
          <button className="px-3.5 py-2.5 bg-zinc-800 rounded-full hover:bg-zinc-700 ml-4 cursor-pointer hidden md:block">
            <i className="ri-mic-fill"></i>
          </button>
        </form>

        <div className="flex items-center gap-2 max-md:hidden">
          <button className="flex gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full cursor-pointer">
            <i className="ri-video-add-fill text-xl"></i>
            <h1 className="mt-0.5">Criar</h1>
          </button>
          <button className="w-10 h-10 hover:bg-zinc-700 rounded-full cursor-pointer">
            <i className="ri-notification-4-fill"></i>
          </button>
          <button className="ml-2 w-8 h-8 bg-blue-600 cursor-pointer rounded-full font-semibold text-white">
            P
          </button>
        </div>
      </header>
    
      <div className={`mt-2 transition-all duration-300 ${paddingLeft}`}>
        {location.pathname === '/' && <CategoryFilter />}{/*Como pode ser só isso kkkkk*/ }
      </div>
        

    </div>

  )
}

export default Navbar
