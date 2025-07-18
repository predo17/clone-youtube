import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import VideoPlayer from './pages/VideoPlayer'

function Layout() {
  const location = useLocation()
  const isVideoPage = location.pathname.startsWith("/video/")
  const [showSidebar, setShowSidebar] = useState(true)
  const toggleSidebar = () => setShowSidebar(prev => !prev)

    useEffect(() => {
    setShowSidebar(!isVideoPage)
  }, [isVideoPage])

  const paddingLeft = showSidebar && !isVideoPage ? 'md:pl-59' : ''

  return (
    <div className="flex flex-col min-h-screen bg-[#0f0f0f] text-white">
      <Navbar toggleSidebar={toggleSidebar} paddingLeft={paddingLeft} />
      {showSidebar && <Sidebar />}
      <main className={`pt-31 ${paddingLeft} w-full transition-all duration-300`}>
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
