import React from 'react'
import violate from '../assets/violate.png';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Landing = () => {
  return (
    <>
      <section className='container flex flex-wrap'>
        
            <div className=" w-6/12  items-center">
                <img className='w-[100%]' src={violate}  alt="" />
            </div>
            <div className="w-6/12 items-center ">
                <div className="">
                    <h1 className='text-4xl'>Classy Modern Smart watch</h1>
                </div>
                <div className="ratings flex flex-row">
                    <div className="star-logo flex">
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                        <FaStarHalfAlt className='text-yellow-400' />
                        <CiStar className='text-yellow-400' />
                    </div>
                    <div className="">
                        <p>(2 Reviews)</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Landing
