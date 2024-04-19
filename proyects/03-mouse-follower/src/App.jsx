import { useEffect, useState } from "react"
import './index.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('efecto', { enabled })
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
      console.log('cleanup');
    }
  }, [enabled])
  return (
    <>
      {/* <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      /> */}
      <div className="absolute bg-black bg-opacity-50 border border-white rounded-full opacity-80 pointer-events-none left-[-25px] top-[-25px] w-12 h-12" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
        {/* Contenido */}
      </div>
      <button onClick={() => { setEnabled(!enabled) }}>
        {enabled ? 'Desactivar' : 'Activar'}
        seguir puntero
      </button>
    </>
  )
}

function App() {

  const [mounted, setMounted] = useState(false)

  return (
    <>
      {mounted && <FollowMouse />}
      <button onClick={() => { setMounted(!mounted) }}>
        Mount FollowMouse
      </button>
    </>
  )
}

export default App
