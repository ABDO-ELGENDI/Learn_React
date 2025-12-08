import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import Card from './components/Card.jsx'
// import List from './components/List.jsx'

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <StrictMode>
    {/* <List  given="Hi"/>
    <List  given="Try"/>
    <Card/> */}

    <App/>
  </StrictMode>
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
)
