
import { useEffect, useState } from 'react'
import VideoCard from '../components/VideoCard'
import { fetchPopularVideos } from '../services/youtubeAPI'
import { Link } from 'react-router-dom'

const Home = () => {
  const [videos, setVideos] = useState<any[]>([])

  useEffect(() => {
    fetchPopularVideos().then(setVideos)
  }, [])

  return (
    <div className="w-full">
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-6 max-xl:pb-20">
        {Array.isArray(videos) && videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </main>

      <aside className='fixed bottom-0 xl:top-16 left-0 xl:h-full w-full xl:w-20 bg-[#0f0f0f]/90 backdrop-blur-lg py-[10px] z-10 text-white shadow-md home-menu-mobile'>
        <nav className='flex xl:flex-col max-xl:w-full max-xl:justify-around items-center'>
          <Link to="/" className=" hover:bg-zinc-800 flex flex-col items-center xl:py-3 w-[80%] rounded-xl"><i className="ri-home-4-fill text-2xl pr-1"></i><span className="text-xs  pr-1">Início</span>
          </Link>
          <Link to="" className=" hover:bg-zinc-800 flex flex-col items-center xl:py-3 w-[80%] rounded-xl"><i className="ri-compass-3-line text-2xl"></i><span className="text-xs ">Explorar</span>
          </Link>
          <Link to="" className=" hover:bg-zinc-800 flex flex-col items-center xl:py-3 w-[80%] rounded-xl"><i className="ri-video-ai-fill text-2xl"></i><span className="text-xs ">Inscrições</span>
          </Link>
          <Link to="" className=" hover:bg-zinc-800 flex flex-col items-center xl:py-3 w-[80%] rounded-xl"><i className="ri-account-circle-line text-2xl"></i><span className="text-xs ">Você</span>
          </Link>
        </nav>
      </aside>
    </div>
  )
}

export default Home