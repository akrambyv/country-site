import React from 'react'
import { Link } from 'react-router-dom'

function Card({ item, addToWishList }) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <Link to={`/${item.cca3}`}>
                <img className="w-full h-[210px]" src={item.flags.png} alt="" />
            </Link>
            <div className="p-5 bg-gray-100">
                <Link to={`/${item.cca3}`}>
                    <h5 className="mb-1 text-2xl font-bold tracking-tight">{item.name.common}</h5>
                </Link>
                <p className='text-[#aaa] text-[.8em] pb-3'>{item.capital}</p>
                <p className="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint laboriosam alias saepe velit mollitia ipsum quis inventore sequi, voluptatum eligendi quasi sed molestias! Incidunt, itaque! Non laudantium quo saepe.</p>
                <button onClick={() => { addToWishList(item.cca3, item?.flags?.svg, item?.name?.common, item?.region) }} className='p-2 bg-gray-200 rounded-md'>Sevimli Ölkəm</button>
            </div>
        </div>
    )
}

export default Card