import { Route, Routes } from "react-router-dom"
import HomePage from "./Components/HomePage"

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />}>
        <Route index element={<span>Bem-vindo</span>} />
        <Route path='agenda' element={<h2>Certo</h2>} />
        <Route path='calendar' element={<h1>Ok apareceu</h1>} />
        <Route path='teste' element={<h1>Oi</h1>} />
      </Route>
    </Routes>
  )

}

export default App
