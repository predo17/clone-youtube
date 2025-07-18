
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
    <div className="max-md:px-18 flex flex-row gap-4">
      <div className="flex flex-wrap gap-6 ">
        <div className="w-full max-w-[62rem]">
          <div className="aspect-video rounded-xl overflow-hidden mb-4">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${id}`}
              title={snippet.title}
              allowFullScreen
            />
          </div>
          {/* Título */}
          <h1 className="text-xl font-bold mb-2">{snippet.title}</h1>

          {/* Info do canal */}
          <div className="flex items-center gap-3 mb-2 whitespace-nowrap">
            <img
              src={channel.snippet.thumbnails.default.url}
              alt={channel.snippet.title}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{snippet.channelTitle}</p>
              <p className="text-sm text-gray-500">{views}</p>

            </div>

            <button className=" text-sm font-semibold py-2 px-4 rounded-full bg-zinc-200 hover:bg-[#d6d6d6] text-black ml-3 cursor-pointer">Inscrever-se</button>

            <div className="flex items-center justify-end gap-2 w-full">
              <div className="flex items-center bg-zinc-800 rounded-full overflow-hidden">
                <button className="px-4 py-1 border-r border-zinc-600 text-white hover:bg-zinc-700 cursor-pointer">
                  <i className="ri-thumb-up-line text-xl"></i>
                </button>
                <button className="px-4 py-1 text-white hover:bg-zinc-700 rotate-180 cursor-pointer">
                  <i className="ri-thumb-up-line text-xl"></i>
                </button>
              </div>
              <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 py-1 px-4 rounded-full cursor-pointer"><i className="ri-share-forward-line text-xl"></i>Compartilhar</button>
              <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 py-1 px-4 rounded-full cursor-pointer"><i className="ri-download-line text-xl "></i>Download</button>
              <button className="rotate-90 bg-zinc-800 hover:bg-zinc-700 w-10 h-10 rounded-full cursor-pointer"><i className="ri-more-2-fill flex items-center justify-center"></i></button>

            </div>
          </div>

          {/* Descrição */}
          <div className="bg-[#535353a8] rounded-xl p-2 overflow-hidden h-full max-h-[6rem] ">
            <p className=" text-sm md:text-base text-gray-300 whitespace-pre-line">
              {snippet.description}
            </p>
          </div>
        </div>

        <div className="">
          <aside className="w-full max-w-[20rem]">
            <div className="overflow-x-auto whitespace-nowrap space-x-2">
              <button className="bg-zinc-200 text-black px-3 py-1 rounded-lg cursor-pointer">Tudo</button>
              <button className="bg-zinc-800 text-white px-3 py-1 rounded-lg cursor-pointer">API</button>
              <button className="bg-zinc-800 text-white px-3 py-1 rounded-lg cursor-pointer">Como usar o Figma</button>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:block">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex max-lg:flex-col lg:space-y-2 gap-2 cursor-pointer ">
                  <img
                    src="https://placehold.co/160x90"
                    alt="Sugestão"
                    className="w-40 rounded-md object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm text-white">Outro vídeo {i + 1}</p>
                    <p className="text-xs text-gray-400">Canal exemplo</p>
                    <p className="text-xs text-gray-400 line-clamp-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum et nostrum nesciunt.</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer




// import { useParams } from 'react-router-dom'

// const VideoPlayer = () => {
//   const { id } = useParams()

//   return (
//     <div className="p-4 flex flex-col lg:flex-row gap-4">
//       <div className="flex-1">
//         <div className="aspect-video bg-black mb-4">
//           {/* Simulação de vídeo */}
//           <iframe
//             className="w-full h-full"
//             src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//             title="Vídeo"
//             allowFullScreen
//           />
//         </div>
//         <h2 className="text-lg font-bold mb-2">Título do Vídeo {id}</h2>
//         <p className="text-sm text-gray-500">Nome do Canal • 1M views • há 1 dia</p>
//       </div>

//       <aside className="w-full lg:w-96 flex flex-col gap-4">
//         {[...Array(4)].map((_, i) => (
//           <div key={i} className="flex gap-2">
//             <img
//               src="https://placehold.co/160x90"
//               alt="sugestão"
//               className="w-40 rounded-md"
//             />
//             <div>
//               <p className="font-semibold text-sm">Outro vídeo {i + 1}</p>
//               <p className="text-xs text-gray-500">Canal exemplo</p>
//             </div>
//           </div>
//         ))}
//       </aside>
//     </div>
//   )
// }

// export default VideoPlayer
