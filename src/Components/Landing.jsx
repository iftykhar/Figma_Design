import React from 'react'
import violate from '../assets/violate.png';

const Landing = () => {
  return (
    <>
      <section className='container flex '>
        {/* <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1> */}
            <div className=" w-6/12 ">
                <img src={violate}  alt="" />
            </div>
            <div className="w-6/12">
                <div className="">
                    <h1 className=''>Classy Modern Smart watch</h1>
                </div>
                <div className="">
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Landing
