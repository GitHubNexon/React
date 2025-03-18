import { useState } from 'react'
import { FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from "react-icons/ri";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
        <div className="flex items-center mb-4">
          <FaReact className="text-6xl text-blue-600 mr-3" />
          <h1 className="text-4xl font-bold text-blue-700">
            Welcome to Vite React with Tailwind CSS v4
          </h1>
          <RiTailwindCssFill className="text-6xl text-blue-600 ml-3" />
        </div>
        
        <div className="text-xl text-gray-700 mb-6">
          <p>Your count: <span className="font-semibold">{count}</span></p>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Increment Count
          </button>
        </div>
      </div>
    </>
  )
}

export default App
