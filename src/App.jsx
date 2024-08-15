import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Main from './components/Main/Main'
import Region from './components/Main/Region'
import WishComponent from './components/Main/WishComponent'
import Cardinfo from './components/Main/Card Folder/Cardinfo'

function App() {
  return (
    <> 
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Main />} />
          <Route path='/menu/:region' element={<Region />} />
          <Route path='/wishlist' element={<WishComponent />} />
          <Route path='/:id' element={<Cardinfo />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
