
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchVideoDetails, fetchChannelInfo } from '../services/youtubeAPI'
import { formatViews } from '../utils/formatHelpers'

const VideoPlayer = () => {
  const { id } = useParams()
  const [video, setVideo] = useState<any>(null)
  const [channel, setChannel] = useState<any>(null)

  useEffect(() => {
    const loadVideo = async () => {
      const videoData = await fetchVideoDetails(id!)
      setVideo(videoData)

      const channelId = videoData.snippet.channelId
      const channelData = await fetchChannelInfo(channelId)
      setChannel(channelData)
    }

    loadVideo()
  }, [id])

  if (!video || !channel) return

  const { snippet, statistics } = video
  const views = formatViews(statistics.viewCount)

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-12 max-w-screen-2xl mx-auto w-full mb-6">
      {/* Container do vídeo e informações */}
      <div className="w-full lg:max-w-[62rem]">
        {/* Vídeo */}
        <div className="aspect-video rounded-xl w-full mb-4">
          <iframe
            className="w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${id}`}
            title={snippet.title}
            allowFullScreen
          />
        </div>

        {/* Conteúdo */}
        <div>
          <h1 className="text-lg md:text-xl font-bold mb-2 break-words">{snippet.title}</h1>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <img
                src={channel.snippet.thumbnails.default.url}
                alt={channel.snippet.title}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-sm md:text-base">{snippet.channelTitle}</p>
                <p className="text-xs text-gray-500">{views}</p>
              </div>
              <button className="text-xs md:text-sm font-semibold py-2 px-4 rounded-full bg-zinc-200 hover:bg-[#d6d6d6] text-black ml-3 cursor-pointer">
                Inscrever-se
              </button>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center bg-zinc-800 rounded-full overflow-hidden">
                <button className="px-3 md:px-4 py-1 border-r border-zinc-600 text-white hover:bg-zinc-700">
                  <i className="ri-thumb-up-line text-lg md:text-xl"></i>
                </button>
                <button className="px-3 md:px-4 py-1 text-white hover:bg-zinc-700 rotate-180">
                  <i className="ri-thumb-up-line text-lg md:text-xl"></i>
                </button>
              </div>
              <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 py-1 px-4 rounded-full text-sm text-white">
                <i className="ri-share-forward-line text-lg md:text-xl"></i>Compartilhar
              </button>
              <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 py-1 px-4 rounded-full text-sm text-white">
                <i className="ri-download-line text-lg md:text-xl"></i>Download
              </button>
              <button className="rotate-90 bg-zinc-800 hover:bg-zinc-700 w-10 h-10 rounded-full flex items-center justify-center">
                <i className="ri-more-2-fill text-white"></i>
              </button>
            </div>
          </div>

          {/* Descrição */}
          <div className="bg-[#535353a8] rounded-xl p-3 overflow-hidden max-h-[6rem] text-sm md:text-base text-gray-300 whitespace-pre-line">
            {snippet.description}
          </div>
        </div>
      </div>

      {/* Aside de sugestões */}
      <aside className="w-full lg:max-w-[20rem]">
        <div className="overflow-x-auto whitespace-nowrap space-x-2 pb-2">
          <button className="bg-zinc-200 text-black px-3 py-1 rounded-lg">Tudo</button>
          <button className="bg-zinc-800 text-white px-3 py-1 rounded-lg">API</button>
          <button className="bg-zinc-800 text-white px-3 py-1 rounded-lg">Como usar o Figma</button>
        </div>

        {/* vídeos de demonstração */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-2 cursor-pointer">
              <img
                src="https://placehold.co/160x90"
                alt="Sugestão"
                className="w-full lg:w-40 rounded-md object-cover"
              />
              <div>
                <p className="font-semibold text-sm text-white">Outro vídeo {i + 1}</p>
                <p className="text-xs text-gray-400">Canal exemplo</p>
                <p className="text-xs text-gray-400 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>

  )
}

export default VideoPlayer