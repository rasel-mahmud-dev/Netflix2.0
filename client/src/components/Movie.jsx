import React from 'react'
import fullPath from "src/utils/fullPath"
import { Link } from "react-router-dom"

export default function Movie({ movie }) {
    return (

        <div className="card relative group">
            <img className="rounded-xl duration-500 transition-all brightness-100 group-hover:brightness-50" src={fullPath(movie.cover)} alt="car!" />
            <div className=" group-hover:bottom-0 -bottom-full duration-500 transition-all bg-red absolute left-1/2 -translate-x-1/2 bg-dark-700 w-full ">
                <div className="flex justify-center p-5 text-white">
                    <div>
                        <h1 className="text-center text-xl">{movie.title}</h1>
                        <button className='btn btn-primary mt-5'>
                            <Link to={`/movie/${movie._id}`}>Watch Now</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}