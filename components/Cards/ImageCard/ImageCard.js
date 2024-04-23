import Link from 'next/link'
import React from 'react'

const ImageCard = ({ data, className }) => {
  return (
    <Link href={`/posts/${data.id}`} className={`relative rounded-lg ${className} flex overflow-hidden group`}>
      <div className="w-full h-full relative">
        <div className='absolute inset-0 bg-black opacity-75 transition z-10'></div>
        <img src={data.img} className="object-cover object-center w-full h-full transition duration-[5000ms] group-hover:scale-150" alt={data.title} />
      </div>
      <div className='absolute z-20 w-full h-full left-0 top-0 flex flex-col justify-between'>
        <span className="w-max justify-self-start rounded-md bg-[#8bc34a] tracking-widest px-2 py-1 text-xs font-medium text-white font-bold ml-4 mt-3">{data.category}</span>
        <div className="text-white p-5">
          <h5 className="text-2xl font-bold mb-4">{data.title}</h5>
          <span className='text-gray-300'>{data.date}</span>
        </div>
      </div>
    </Link>
  )
}

export default ImageCard