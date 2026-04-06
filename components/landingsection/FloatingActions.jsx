import React from 'react'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { IoMdCall } from "react-icons/io";

const FloatingActions = () => {
  return (
    <div>
        <div className="fixed right-4 bottom-10 -translate-y-1/2 z-50 flex flex-col items-center gap-4">

     
      <a
        href="https://wa.me/9962998008"
        target="_blank"
        className="w-12 h-12 bg-green-500 hidden rounded-full md:flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={30} />
      </a>

      
      <a
  href="tel:+919962998008" 
  className="w-12 h-12 bg-green-500 md:hidden rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
>
  {/* <FaPhone size={18} /> */}
  <IoMdCall size={30} />
</a>

      {/* Book Now Button */}

    </div>
    </div>
  )
}

export default FloatingActions