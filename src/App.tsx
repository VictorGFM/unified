import { useState } from 'react'

import './App.scss'
import MainPage from './pages/MainPage'

const App = () => {
  const [count, setCount] = useState(0)

  return <MainPage />
}

export default App
