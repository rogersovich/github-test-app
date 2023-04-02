import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
