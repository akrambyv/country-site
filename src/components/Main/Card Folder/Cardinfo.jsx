import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Cardinfo() {
    const { id } = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${id}`)
            .then(res => res.json())
            .then(data => setData(data[0]))
    }, [id])


    return (
        <>
            {
                data ?
                    <section className="dark:bg-gray-100 dark:text-gray-800">
                        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                            <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                                <img src={data.flags.svg} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                                <div className="p-6 space-y-2 lg:col-span-5">
                                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{data.name.common}</h3>
                                    <span className="text-xs dark:text-gray-600">{data.capital}</span>
                                    <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                                </div>
                            </a>
                            <div>
                                {
                                    data.borders?.map(item =>
                                        <Link to={`/${item}`} className='p-2 bg-blue-500 rounded-md text-white mx-2'>{item}</Link>
                                    )
                                }
                            </div>
                        </div> 
                    </section>
                    :
                    <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
                        <div className="h-48 rounded-t dark:bg-gray-300"></div>
                        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
                            <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                            <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                            <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
                        </div>
                    </div>

            }
        </>
    )
}

export default Cardinfo