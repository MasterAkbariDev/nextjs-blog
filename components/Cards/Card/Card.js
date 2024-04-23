import Link from 'next/link'
import React from 'react'

const Card = ({ data, small, medium, className }) => {
  return (
    <div className={`w-full h-max ${small || medium ? 'h-max' : ''} my-5 flex flex-col ${small || medium ? 'md:flex-row-reverse' : ''} ${className}`}>
      <Link href={`/posts/${data.id}`} className={`relative ${medium || small ? 'md:w-[200px] md:h-[100px]' : ''} ${className}`}>
        <img src={data.img} className="object-cover object-center w-full h-full rounded-lg" alt={data.title} />
      </Link>
      <div className='relative w-full h-max flex flex-col'>
        <span className={`w-max justify-self-start rounded-md bg-[#8bc34a] tracking-widest px-2 py-1 text-xs font-medium text-white font-bold ml-4 mt-8 ${small || medium ? 'md:mt-0' : ''}`}>{data.category}</span>
        {small && (
          <div className="text-black p-4">
            <Link href={`/posts/${data.id}`}><h1 className="text-2xl font-bold mb-4">{data.title}</h1></Link>
            <span className='text-gray-400'>{data.date}</span>
          </div>
        )}
        {!small && (
          <div className="text-black p-4">
            <Link href={`/posts/${data.id}`}><h1 className="text-4xl font-bold mb-4">{data.title}</h1></Link>
            <div>
              <div className='flex gap-1'>
                <span className='text-gray-400'>By </span>
                <span>{data.author}</span>
                <span>-</span>
                <span className='text-gray-400'>{data.date}</span>
              </div>
              <p className={`${medium ? 'mt-6' : 'mt-12'} text-gray-500 text-justify text-xl tracking-normal`}>{medium ? data.content.slice(0, 80) : data.content.slice(0, 230)}...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card