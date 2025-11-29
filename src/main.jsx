import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Card from './components/Card.jsx'
// import List from './components/List.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <List  given="Hi"/>
    <List  given="Try"/>
    <Card/> */}

    <App/>
  </StrictMode>,
)
