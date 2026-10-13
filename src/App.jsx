import './App.css'
import Header from './pages/Header'
import Home from './pages/Home'

function App() {

  return (
    <div className="relative min-h-screen w-full text-white bg-[#030712] overflow-x-hidden">
      {/* Background Blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {/* Blue blob - Top Left */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-blue-500/20 blur-[120px] animate-float-slow"></div>
        
        {/* Orange blob - Middle Right */}
        <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-orange-500/15 blur-[130px] animate-float-reverse"></div>
        
        {/* Sky Blue blob - Bottom Left/Middle */}
        <div className="absolute bottom-[-10%] left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-cyan-500/10 blur-[110px] animate-float-lateral"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header/>
        <Home />
      </div>
    </div>
  )
}


export default App
