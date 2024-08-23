import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WISHCONTEXT } from '../../context/WishListContext'

function WishComponent() {

    const { wishList, setWishList } = useContext(WISHCONTEXT)

    function deleteWishList() {
        localStorage.removeItem("wish")
        setWishList([])
    }

    console.log("xezer");
    
    return (
        <>
            <div className='flex flex-wrap justify-center gap-6 h-auto'>

                {
                    wishList.lenght !== 0 &&
                    wishList.map((item, i) => {
                        return (
                            <div key={i} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                                <Link to="#">
                                    <img className="w-full h-[210px]" src={item.flag} alt="" />
                                </Link>
                                <div className="p-5 bg-gray-100">
                                    <Link to="#">
                                        <h5 className="mb-1 text-2xl font-bold tracking-tight">{item.name}</h5>
                                    </Link>
                                    <p className='text-[#aaa] text-[.8em] pb-3'>{item.capital}</p>
                                    <p className="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint laboriosam alias saepe velit mollitia ipsum quis inventore sequi, voluptatum eligendi quasi sed molestias! Incidunt, itaque! Non laudantium quo saepe.</p>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
            <div className='m-5 text-center'>
                <button onClick={deleteWishList} className='p-3 bg-blue-500 rounded-md text-white'>Sebeti Temizle</button>
            </div>
        </>
    )
}

export default WishComponent