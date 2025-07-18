import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="fixed top-16 left-0 w-59 h-[calc(100%-64px)] bg-[#0f0f0f] hidden md:block py-4 px-2 z-20">
      <nav className="flex flex-col ">
        <Link to="/" className="bg-zinc-800 hover:bg-zinc-700 flex items-center gap-6 px-4 py-1 rounded-xl"><i className="ri-home-4-fill text-2xl"></i><span className="text-sm font-medium">Início</span></Link>
        <Link to="" className=" hover:bg-zinc-800 flex items-center gap-6 px-4 py-1 rounded-xl"><i className="ri-compass-3-line text-2xl"></i><span className="text-sm font-medium">Explorar</span>
        </Link>
        <Link to="" className="relative hover:bg-zinc-800 flex items-center gap-6 px-4 py-1 rounded-xl"><i className="ri-video-ai-fill text-2xl"></i><span className="text-sm font-medium">Inscrições</span><span className=" absolute right-4 w-1 h-1 bg-blue-500 rounded-full"></span>
        </Link>

        <hr className="my-3 text-zinc-800" />

        <Link to="" className=" hover:bg-zinc-800 flex items-center gap-2 px-4 py-1 rounded-xl"><h3 className="text-[19px] font-medium ">Você</h3><i className="ri-arrow-right-s-line mt-1"></i>
        </Link>
        <Link to="" className=" hover:bg-zinc-800 flex items-center gap-6 px-4 py-1 rounded-xl"><i className="ri-history-line text-2xl"></i><span className="text-sm font-medium">Histórico</span>
        </Link>
        <Link to="" className=" hover:bg-zinc-800 flex items-center gap-6 px-4 py-1 rounded-xl"><i className="ri-play-list-2-fill text-2xl"></i><span className="text-sm font-medium">Playlists</span>
        </Link>
        <Link to="" className=" hover:bg-zinc-800 flex items-center gap-6 px-4 py-1 rounded-xl"><i className="ri-time-line text-2xl"></i><span className="text-sm font-medium">Assinter mais tarde</span>
        </Link>
        <Link to="" className=" hover:bg-zinc-800 flex items-center gap-6 px-4 py-1 roundedx-g"><i className="ri-thumb-up-line text-2xl"></i><span className="text-sm font-medium">Vídeos com "Gostei"</span>
        </Link>

        <hr className="my-3 text-zinc-800" />

        <span className="ml-2 mb-1 text-lg font-medium">Inscrições</span>

        <Link to="" className=" hover:bg-zinc-800 flex items-center gap-6 px-4 py-2 rounded-xl"><div className="w-6 h-6 bg-red-500 rounded-full"></div><span className="text-sm font-medium">Stop Bild Channel</span>
        </Link>        
        <Link to="" className=" hover:bg-zinc-800 flex items-center gap-6 px-4 py-2 rounded-xl"><div className="w-6 h-6 bg-amber-300 rounded-full"></div><span className="text-sm font-medium">Attention Channel</span>
        </Link>        
        <Link to="" className="relative hover:bg-zinc-800 flex items-center gap-6 px-4 py-2 rounded-xl"><div className="w-6 h-6 bg-green-500 rounded-full"></div><span className="text-sm font-medium">Go Channel</span><span className=" absolute right-4 w-1 h-1 bg-blue-500 rounded-full"></span>
        </Link>        
      </nav>
    </aside>
  )
}

export default Sidebar
