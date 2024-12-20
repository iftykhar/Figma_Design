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
                <div className="pt-6">
                    <p className="text-gray-600">I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.</p>
                </div>
                <div className="pt-8 flex gap-10 type-model">
                    <div className="">
                        <p className='text-gray-600'>Type</p>
                        <p className='font-bold text-gray-700 text-xl'>Watch</p>
                    </div>
                    <div className="">
                        <p className='text-gray-600'>Model Number</p>
                        <p className='font-bold text-gray-700 text-xl'>Forerunner 290XT</p>
                    </div>
                </div>
                <div className="color-tag pt-6">
                    <p className='font-bold text-gray-700 text-xl'>Band Color</p>
                    <div className="flex gap-3 pt-4">
                        <div class="flex items-center">
                            <button class="relative w-6 h-6 bg-blue-500 text-white rounded-full flex justify-center items-center border-4 border-transparent hover:border-blue-700 focus:border-blue-700 active:border-blue-800">
                              
                                <span class="absolute inset-0 border-2 border-transparent rounded-full hover:border-blue-700 focus:border-blue-700 active:border-blue-800 transition-all duration-200"></span>
                                <span class="z-10"></span>
                            </button>
                        </div>
                        <div class="flex items-center">
                            <button class="relative w-6 h-6 bg-blue-500 text-white rounded-full flex justify-center items-center border-4 border-transparent hover:border-blue-700 focus:border-blue-700 active:border-blue-800">
                              
                                <span class="absolute inset-0 border-2 border-transparent rounded-full hover:border-blue-700 focus:border-blue-700 active:border-blue-800 transition-all duration-200"></span>
                                <span class="z-10"></span>
                            </button>
                        </div>
                        <div class="flex items-center">
                            <button class="relative w-6 h-6 bg-blue-500 text-white rounded-full flex justify-center items-center border-4 border-transparent hover:border-blue-700 focus:border-blue-700 active:border-blue-800">
                              
                                <span class="absolute inset-0 border-2 border-transparent rounded-full hover:border-blue-700 focus:border-blue-700 active:border-blue-800 transition-all duration-200"></span>
                                <span class="z-10"></span>
                            </button>
                        </div>
                        <div class="flex items-center">
                            <button class="relative w-6 h-6 bg-blue-500 text-white rounded-full flex justify-center items-center border-4 border-transparent hover:border-blue-700 focus:border-blue-700 active:border-blue-800">
                              
                                <span class="absolute inset-0 border-2 border-transparent rounded-full hover:border-blue-700 focus:border-blue-700 active:border-blue-800 transition-all duration-200"></span>
                                <span class="z-10"></span>
                            </button>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Landing
