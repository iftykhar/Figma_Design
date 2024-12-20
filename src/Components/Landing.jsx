import React from 'react'
import violate from '../assets/violate.png';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Landing = () => {
  return (
    <>
      <section className='container flex flex-wrap'>
        
            <div className=" w-6/12  items-center">
                <img className='w-[100%]' src={violate}  alt="" />
            </div>
            <div className="w-6/12 items-start text-start px-10 py-4">
                <div className="py-3">
                    <h1 className='text-4xl text-start'>Classy Modern Smart watch</h1>
                </div>
                <div className="ratings flex flex-row items-center text-start gap-2 py-2 ">
                    <div className="star-logo flex text-xl gap-1">
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                        <FaStarHalfAlt className='text-yellow-400' />
                        <FaRegStar className='text-yellow-400 ' />
                    </div>
                    <div className="items-center">
                        <p className='text-gray-500'>(2 Reviews)</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <p className='text-gray-600 text-xl'><strike>$99.00</strike></p>
                    <p className='text-gray-700 text-2xl'>$79.00</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Landing
