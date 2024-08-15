import App from './App.jsx'
import DataContext from './context/DataContext'
import WishListContext from './context/WishListContext.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DataContext>
      <WishListContext>
        <App />
      </WishListContext>
    </DataContext>
  </BrowserRouter>
)
