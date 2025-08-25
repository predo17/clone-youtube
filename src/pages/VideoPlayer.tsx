
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchVideoDetails, fetchChannelInfo, formatSubscribers } from '../services/youtubeAPI'

const VideoPlayer = () => {
  const { id } = useParams()
  const [video, setVideo] = useState<any>(null)
  const [channel, setChannel] = useState<any>(null)
  const [showMore, setShowMore] = useState(false);



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

  const { snippet } = video
  const subscribers = formatSubscribers(Number(channel.statistics.subscriberCount))

  const toggleDescription = () => setShowMore(!showMore);
  const shortDescription = snippet.description?.slice(0, 180);

  return (
    <div className="flex flex-col xl:flex-row gap-6 px-4 sm:px-6 lg:px-12 max-w-screen-2xl mx-auto w-full mb-6 overflow-hidden">
      {/* Container do vídeo e informações */}
      <div className="w-full lg:max-w-[63rem]">
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
                <p className="text-xs text-gray-500">{subscribers} inscritos</p>
              </div>
              <button className="text-xs md:text-sm font-semibold py-2 px-4 rounded-full bg-zinc-200 hover:bg-[#d6d6d6] text-black ml-3 cursor-pointer">
                Inscrever-se
              </button>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center bg-zinc-800 rounded-full overflow-hidden">
                <button className="px-3 md:px-4 py-1 border-r border-zinc-600 text-white hover:bg-zinc-700 cursor-pointer">
                  <i className="ri-thumb-up-line text-lg md:text-xl"></i>
                </button>
                <button className="px-3 md:px-4 py-1 text-white hover:bg-zinc-700 rotate-180 cursor-pointer">
                  <i className="ri-thumb-up-line text-lg md:text-xl"></i>
                </button>
              </div>
              <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 py-1 px-4 rounded-full text-sm text-white cursor-pointer">
                <i className="ri-share-forward-line text-lg md:text-xl"></i>Compartilhar
              </button>
              <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 py-1 px-4 rounded-full text-sm text-white cursor-pointer">
                <i className="ri-download-line text-lg md:text-xl"></i>Download
              </button>
              <button className="rotate-90 bg-zinc-800 hover:bg-zinc-700 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                <i className="ri-more-2-fill text-white"></i>
              </button>
            </div>
          </div>

          {/* Descrição */}
          <div className="bg-[#535353a8] rounded-xl p-3 text-sm md:text-base text-gray-300 whitespace-pre-line">
            <p>
              {showMore ? snippet.description : `${shortDescription}... `} <br />
              <button
                onClick={toggleDescription}
                className="active:bg-[#535353d8] rounded-sm transition-colors duration-200 cursor-pointer"
              >
                {showMore ? "mostrar menos" : "...mais"}
              </button>
            </p>
          </div>

          <span className='xl:block hidden text-center text-sm mt-10 '>Os comentários estão desativados. <span className='text-blue-400 cursor-pointer'>Saiba mais</span></span>

        </div>
      </div>

      {/* Aside de sugestões */}
      <aside className="w-full xl:max-w-[22.5rem] xl:mt-2 overflow-hidden">
        <div className="max-xl:overflow-x-auto whitespace-nowrap space-x-2 pb-2 max-lg:px-2 max-sm:no-scrollbar">
          <button className="bg-zinc-200 text-black px-3 py-1 outline-0 rounded-lg cursor-pointer">Tudo</button>
          <button className="bg-zinc-800 text-white px-3 py-1 outline-0 rounded-lg cursor-pointer">API</button>
          <button className="bg-zinc-800 text-white px-3 py-1 outline-0 rounded-lg cursor-pointer">Como usar o Figma</button>
          <button className="bg-zinc-800 text-white px-3 py-1 outline-0 rounded-lg cursor-pointer">React</button>
          <button className="bg-zinc-800 text-white px-3 py-1 outline-0 rounded-lg cursor-pointer">Blender</button>
          <button className="bg-zinc-800 text-white px-3 py-1 outline-0 rounded-lg cursor-pointer">Github</button>
          <button className="bg-zinc-800 text-white px-3 py-1 outline-0 rounded-lg cursor-pointer">Para Você</button>
        </div>

        {/* vídeos de demonstração */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-x-4 gap-y-8 xl:gap-2">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex flex-col xl:flex-row gap-2 cursor-pointer">
              <img
                src="https://placehold.co/160x95"
                alt="Sugestão"
                className="w-full xl:w-40 rounded-md object-cover"
              />
              <div className='relative'>
                <p className="font-semibold text-sm text-white pr-5">Outro vídeo {i + 1}</p>
                <p className="text-xs text-gray-400 pr-5">Canal exemplo</p>
                <p className="text-xs text-gray-400 line-clamp-2 pr-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <button className="absolute top-0 right-0 w-10 h-10 hover:bg-zinc-700 active:bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer">
                    <i className="ri-more-2-fill text-white text-base"></i>
                  </button>
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