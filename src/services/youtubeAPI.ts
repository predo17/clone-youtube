const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY as string
const BASE_URL = 'https://www.googleapis.com/youtube/v3'

export const fetchPopularVideos = async () => {
  const res = await fetch(
    `${BASE_URL}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=BR&maxResults=10&key=${API_KEY}`
  )
  const data = await res.json()
  return data.items
}

export const fetchChannelInfo = async (channelId: string) => {
  const res = await fetch(
    `${BASE_URL}/channels?part=snippet&id=${channelId}&key=${API_KEY}`
  )
  const data = await res.json()
  return data.items[0]
}

export const fetchVideoDetails = async (videoId: string) => {
  const res = await fetch(
    `${BASE_URL}/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`
  )
  const data = await res.json()
  return data.items[0]
}

export const formatDuration = (iso: string) => {
  const match = iso.match(/PT(\d+H)?(\d+M)?(\d+S)?/)
  const [, h, m, s] = match ?? []
  const hours = h ? h.replace('H', '') : '0'
  const minutes = m ? m.replace('M', '') : '0'
  const seconds = s ? s.replace('S', '') : '0'

  return hours !== '0'
    ? `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
    : `${minutes}:${seconds.padStart(2, '0')}`
}


