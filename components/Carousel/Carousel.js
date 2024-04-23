import Link from 'next/link';
import React, { useState, useEffect } from 'react'

const Carousel = ({ Images, description }) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            currentImage === Images?.length - 1 ? setCurrentImage(0) : handleNextClick();
        }, 7000);

        return () => {
            clearInterval(interval);
        };
    }, [currentImage]);

    const handlePrevClick = () => {
        setCurrentImage(currentImage === 0 ? Images?.length - 1 : currentImage - 1);
    };

    const handleNextClick = () => {
        setCurrentImage(currentImage === Images?.length - 1 ? 0 : currentImage + 1);
    };

    const translateValue = currentImage * 100;

    return (
        <div id="controls-carousel" className="relative w-full h-[700px]" data-carousel="static">
            <div className="relative h-full overflow-hidden flex">
                {Images?.map((item, index) => (
                    <div
                        key={index}
                        className="w-full h-full absolute duration-300 ease-in-out"
                        style={{
                            transform: `translateX(${index * 100 === translateValue ? 0 : index * 100 < translateValue ? -100 : 100}%)`,
                        }}
                    >
                        <div className='-full h-full relative'>
                        <div className='absolute inset-0 bg-black opacity-75'></div>
                            <img src={item.img} className='object-cover object-center w-full h-full' />
                        </div>
                        {description ? (
                            <div className="absolute w-3/4 left-[70px] md:left-[130px] top-1/3 text-white">
                                <span className="inline-flex items-center rounded-md bg-[#8bc34a] tracking-widest px-2 py-1 text-xs font-medium text-white font-bold ring-1 ring-inset ring-green-600/20">{item.category}</span>
                                <h1 className="text-4xl font-bold mt-3 mb-8"><Link href={`/posts/${item.id}`}>{item.title}</Link></h1>
                                <span className='cursor-default'>By {item.author}</span>
                            </div>
                        ) : ''}
                    </div>
                ))}
            </div>
            <button type="button" className="text-white h-full absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handlePrevClick}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700/50 hover:bg-black transition duration-400 font-bold text-lg">
                    &lt;
                </span>
            </button>
            <button type="button" className="text-white h-full absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handleNextClick}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700/50 hover:bg-black transition duration-300 font-bold text-lg">
                    &gt;
                </span>
            </button>
        </div>
    );
};

export default Carousel;