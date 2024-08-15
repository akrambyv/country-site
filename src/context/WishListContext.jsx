import { createContext, useState } from "react"

export const WISHCONTEXT = createContext(null)

function WishListContext({children}) {
    const [wishList, setWishList] = useState(JSON.parse(localStorage.getItem("wish")) || [])

  return (
    <WISHCONTEXT.Provider value={{wishList, setWishList}}>
        {children}
    </WISHCONTEXT.Provider>
  )
}

export default WishListContext