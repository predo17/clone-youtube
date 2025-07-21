import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { timeAgo, formatViews } from '../utils/formatHelpers'
import { fetchChannelInfo, formatDuration, fetchVideoDetails } from '../services/youtubeAPI'

interface Props {
  video: any
}

const VideoCard = ({ video }: Props) => {
  const { id, snippet } = video
  const videoId = id.videoId || id

  const [channel, setChannel] = useState<any>(null)
  const [duration, setDuration] = useState('')


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Pega avatar do canal
        const channelData = await fetchChannelInfo(snippet.channelId)
        setChannel(channelData)

        // Pega duração e visualizações
        const videoData = await fetchVideoDetails(videoId)
        setDuration(formatDuration(videoData.contentDetails.duration))
      } catch (error) {
        console.error('Erro ao buscar dados extras:', error)
      }
    }

    fetchData()
  }, [snippet.channelId, videoId])

  return (
    <Link to={`/video/${videoId}`} className="block">
      <div className="rounded-xl overflow-hidden cursor-pointer">
        <div className="relative">
          <img
            src={snippet.thumbnails.medium.url}
            alt={snippet.title}
            className="w-full rounded-xl"
          />
          <div className="absolute bottom-2 right-2 text-xs text-white bg-zinc-800/50 px-2 py-0.5 rounded-sm">{duration}</div>
        </div>
        <div className="p-2 flex gap-2">
          {channel && (
            <img
              src={channel.snippet.thumbnails.default.url}
              alt="Channel Avatar"
              className="rounded-full w-8 h-8"
            />
          )}
          <div className="flex-1">
            <h3 className="font-medium text-base line-clamp-2">{snippet.title}</h3>
            <p className="text-xs text-gray-400 pb-0.5">{snippet.channelTitle}</p>
            <div className="text-xs text-gray-400">
              {formatViews(Number(video.statistics.viewCount))} • {timeAgo(snippet.publishedAt)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard