import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { DATA } from '../../context/DataContext'

function Region() {

    const { region } = useParams()

    const { data } = useContext(DATA)


    return (
        <main className='bg-[#e9e9e9]'>
            <div className='font-bold text-[50px] text-center p-4'>
                {region} qitəsindəki bütün ölkələr
            </div>
            <div className='flex flex-wrap justify-center gap-6'>

                {
                    data ? data
                        .filter(item => item.region == region)
                        // .slice(0, 20)
                        .map((item, i) => {

                            return (
                                <div key={i} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                                    <Link to="#">
                                        <img className="w-full h-[210px]" src={item.flags.png} alt="" />
                                    </Link>
                                    <div className="p-5 bg-gray-100">
                                        <Link to="#">
                                            <h5 className="mb-1 text-2xl font-bold tracking-tight">{item.name.common}</h5>
                                        </Link>
                                        <p className='text-[#aaa] text-[.8em] pb-3'>{item.capital}</p>
                                        <p className="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint laboriosam alias saepe velit mollitia ipsum quis inventore sequi, voluptatum eligendi quasi sed molestias! Incidunt, itaque! Non laudantium quo saepe.</p>
                                    </div>
                                </div>
                            )
                        })
                        :
                        "Loading..."
                }

            </div>
        </main>
    )
}

export default Region