import { useState , React} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route,BrowserRouter,Routes,Link, useNavigate } from 'react-router-dom'
import OldApp from './components/OldApp'
import List from './components/List'
import Card from './components/Card'
import CardNameCom from './components/CardNameCom'
import CardNested from './components/CardNested'
import ItemCard from './components/ItemCard'
import ItemCardPro from './components/ItemCardPro'
import CItemCardPro from './components/CItemCardPro'


function App() {
  //const [count, setCount] = useState(0)

 
  return (
    <div>
      {/* <a href="/list">List</a> */}
    <BrowserRouter>
    <nav>{/*must be inside browser router */}
        <Link to="/">Home</Link> |{" "}
        <Link to="/List">List</Link> |{" "}
        <Link to="/Card">Card</Link>
      </nav>
    <Routes>
      <Route path='/' element={<OldApp/>}></Route>
      <Route path='/list' element={<List given='Hi'/>}></Route>
       <Route path='/card' element={<Card/>}>
          <Route path='nestedcard' element={<CardNested/>}/>{/*nested route doesn't have close tag as it ended with /> */}
       </Route>
       <Route path='/card/:cardname' element={<CardNameCom/>}></Route>{/*useparameters in url */}
       <Route path='/carditem' element={<ItemCard/>}></Route>
       <Route path='/carditempro' element={<ItemCardPro/>}></Route>
       <Route path='/clcarditempro' element={<CItemCardPro tit="Hello"/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>

    // <>
    //   <div>
    //     <a href="https://vite.dev">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
