import React, { useState } from 'react';
import violate from '../assets/violate.png';
import black from '../assets/black.png';
import blue from '../assets/blue.png';
import cyan from '../assets/cyan.png';
import { FaStar, FaStarHalfAlt, FaRegStar, FaRegHeart } from "react-icons/fa";
import Modal from '../Components/Modal.jsx';

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const handleAddToCartClick = () => { setIsModalOpen(true); }; 
  const handleCloseModal = () => { setIsModalOpen(false); };

  return (
    <>
      <section className='container mx-auto p-4 flex flex-wrap'>
        <div className="w-full md:w-6/12 flex justify-center items-center">
          <img className='w-full' src={violate} alt="Smart watch" />
        </div>
        <div className="w-full md:w-6/12 text-start px-4 py-4">
          <div className="py-3">
            <h1 className='text-2xl md:text-4xl'>Classy Modern Smart watch</h1>
          </div>
          <div className="ratings flex flex-wrap items-center gap-2 py-2">
            <div className="star-logo flex text-xl gap-1">
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
              <FaStarHalfAlt className='text-yellow-400' />
              <FaRegStar className='text-yellow-400' />
            </div>
            <p className='text-gray-500'>(2 Reviews)</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className='text-gray-600 text-xl'><strike>$99.00</strike></p>
            <p className='text-gray-700 text-2xl'>$79.00</p>
          </div>
          <div className="pt-6">
            <p className="text-gray-600">I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.</p>
          </div>
          <div className="pt-8 flex flex-wrap gap-10">
            <div>
              <p className='text-gray-600'>Type</p>
              <p className='font-bold text-gray-700 text-xl'>Watch</p>
            </div>
            <div>
              <p className='text-gray-600'>Model Number</p>
              <p className='font-bold text-gray-700 text-xl'>Forerunner 290XT</p>
            </div>
          </div>
          <div className="pt-6">
            <p className='font-bold text-gray-700 text-xl'>Band Color</p>
            <div className="flex gap-3 pt-4">
              <button className="w-6 h-6 bg-blue-500 rounded-full border-4 border-transparent hover:border-blue-700 focus:border-blue-700 active:border-blue-800"></button>
              <button className="w-6 h-6 bg-blue-500 rounded-full border-4 border-transparent hover:border-blue-700 focus:border-blue-700 active:border-blue-800"></button>
              <button className="w-6 h-6 bg-blue-500 rounded-full border-4 border-transparent hover:border-blue-700 focus:border-blue-700 active:border-blue-800"></button>
              <button className="w-6 h-6 bg-blue-500 rounded-full border-4 border-transparent hover:border-blue-700 focus:border-blue-700 active:border-blue-800"></button>
            </div>
          </div>
          <div className="pt-8">
            <p className='font-bold text-gray-700 text-xl'>Wrist Size</p>
            <div className="flex flex-wrap gap-3 pt-4">
              <button className='border-2 rounded-md py-1 px-6 flex gap-2 text-gray-600 items-center'>
                <h2 className='font-semibold'>S</h2><p>$69</p>
              </button>
              <button className='border-2 rounded-md py-1 px-6 flex gap-2 text-gray-600 items-center'>
                <h2 className='font-semibold'>M</h2><p>$79</p>
              </button>
              <button className='border-2 rounded-md py-1 px-6 flex gap-2 text-gray-600 items-center'>
                <h2 className='font-semibold'>L</h2><p>$89</p>
              </button>
              <button className='border-2 rounded-md py-1 px-6 flex gap-2 text-gray-600 items-center'>
                <h2 className='font-semibold'>XL</h2><p>$99</p>
              </button>
            </div>
          </div>
          <div className="pt-10 flex gap-3 items-center">
            <div className="flex items-center border rounded">
              <button className="px-4 py-2 border-r">-</button>
              <span className="px-4 py-2">0</span>
              <button className="px-4 py-2 border-l">+</button>
            </div>
            <button onClick={handleAddToCartClick} className='border-2 rounded-lg px-4 py-2 bg-blue-500 text-white font-semibold'>Add to Cart</button>
            <FaRegHeart className='text-xl' />
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

    </>
  )
}

export default Landing;
