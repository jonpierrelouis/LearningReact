import { Route, Routes, Link } from "react-router-dom"
import Home from "./components/Home"
import RouteExample from "./components/RouteExample"

const App = () => {
  return (
    <>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ex">Route Example</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ex" element={<RouteExample/>}></Route>
      </Routes>

    </>
    

  )
}

export default App