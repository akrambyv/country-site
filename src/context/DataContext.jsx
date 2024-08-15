import React, { createContext, useEffect, useState } from 'react'

export const DATA = createContext(null)

function DataContext({ children }) {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(api => setData(api))
  }, [])

  return (
    <DATA.Provider value={{data}}>
      {children}
    </DATA.Provider>
  )
}

export default DataContext