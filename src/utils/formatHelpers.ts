export const formatViews = (views: string | number) => {
  const num = typeof views === 'string' ? parseInt(views) : views

  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)} mi visualizações`
  if (num >= 1_000) return `${Math.floor(num / 1_000)} mil visualizações`
  return `${num} visualizações`
}

export const timeAgo = (dateString: string): string => {
  const date = new Date(dateString)
  const now = new Date()
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000)

  const minutes = Math.floor(diff / 60)
  const hours = Math.floor(diff / 3600)
  const days = Math.floor(diff / 86400)
  const weeks = Math.floor(diff / 604800)
  const months = Math.floor(diff / 2592000)
  const years = Math.floor(diff / 31536000)

  if (years > 0) return `há ${years} ano${years > 1 ? 's' : ''}`
  if (months > 0) return `há ${months} mês${months > 1 ? 'es' : ''}`
  if (weeks > 0) return `há ${weeks} semana${weeks > 1 ? 's' : ''}`
  if (days > 0) return `há ${days} dia${days > 1 ? 's' : ''}`
  if (hours > 0) return `há ${hours} hora${hours > 1 ? 's' : ''}`
  if (minutes > 0) return `há ${minutes} minuto${minutes > 1 ? 's' : ''}`

  return 'agora mesmo'
}
