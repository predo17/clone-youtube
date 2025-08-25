import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import VideoPlayer from './pages/VideoPlayer'


function Layout() {
  const location = useLocation()
  const isVideoPage = location.pathname.startsWith("/video/")
  const [showSidebar, setShowSidebar] = useState(!isVideoPage)
  const toggleSidebar = () => setShowSidebar(prev => !prev)


    // 🔑 Sempre que mudar de rota, reseta o sidebar
  useEffect(() => {
    if (isVideoPage) {
      setShowSidebar(false) // no vídeo, começa fechado
    } else {
      setShowSidebar(true) // na home, começa aberto
    }
  }, [isVideoPage])


  const paddingLeft =
    showSidebar && !isVideoPage ? "xl:pl-59" : "pl-20"

  const mainClass = isVideoPage
    ? "pt-20 min-lg:px-2 w-full"
    : `pt-31 ${paddingLeft} w-full`

  return (
    <div className="flex flex-col min-h-screen bg-[#0f0f0f] text-white">
      <Navbar toggleSidebar={toggleSidebar} paddingLeft={paddingLeft} />
      <Sidebar isSidebarOpen={showSidebar} isVideoPage={isVideoPage} />
      <main className={mainClass}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoPlayer />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App