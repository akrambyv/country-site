import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { DATA } from '../../context/DataContext'
import { WISHCONTEXT } from '../../context/WishListContext'
import Card from './Card Folder/Card'

function Main() {

  const { wishList, setWishList } = useContext(WISHCONTEXT)

  function addToWishList(id, flag, name, region) {
    const obj = { id, flag, name, region }
    setWishList([...wishList, obj])

    localStorage.setItem("wish", JSON.stringify(wishList))
  }

  const { data } = useContext(DATA)
  const [slice, setSlice] = useState(20)

  return (
    <main className='bg-[#e9e9e9] min-h-[100vh]'>

      <div className='text-center pt-[70px] pb-[100px]'>
        <h1 className='font-bold text-[45px]'>Ölkə axtarışına <p className='text-[#6366F1] font-bold'>Xoş gəlmisiniz</p></h1>
        <p className='pt-3 text-[17px]'>Aşağıdan bütün ölkələri axtara və onlar haqqında ətraflı məlumat tapa <br /> bilərsiniz!</p>
        <div className='pt-[40px] flex gap-3 justify-center'>
          <button className='bg-[#6366F1] text-white p-4 font-bold text-[18px] pl-[32px] pr-[32px] rounded-md'>Axtarmağa Başla!</button>
          <button className='border border-black rounded-md text-[18px] pl-[32px] pr-[32px]'>Ölkələrə keçid et...</button>
        </div>
      </div>

      <div className='flex flex-wrap justify-center gap-6'>

        {
          data ? data
            .slice(0, slice)
            .map((item, i) => {
              return (
                <Card key={i} item = {item} addToWishList={addToWishList} />
              )
            })
            :
            "Loading..."
        }

      </div>

      <div className='text-center'>
        <button onClick={() => { setSlice(slice + 10) }} className='bg-blue-600 text-white m-7 rounded-md p-3'>Elave Et</button>
      </div>

    </main>
  )
}

export default Main