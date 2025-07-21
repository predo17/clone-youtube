
import { useEffect, useState } from 'react'
import VideoCard from '../components/VideoCard'
import { fetchPopularVideos } from '../services/youtubeAPI'

const Home = () => {
  const [videos, setVideos] = useState<any[]>([])

  useEffect(() => {
    fetchPopularVideos().then(setVideos)
  }, [])

  return (
    <div className="w-full">  
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-6">
        {Array.isArray(videos) && videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </main>
    </div>
  )
}

export default Home