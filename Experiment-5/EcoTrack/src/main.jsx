import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthContext} from "./contexts/AuthContext.jsx" 
import { Provider } from 'react-redux'
import store from './store/store.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <Provider store={store}>
       <App />
       </Provider>
    </AuthContext>
  </StrictMode>,
)
