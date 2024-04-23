import React, { useEffect, useState } from 'react'
import '../app/globals.css'
import MainLayout from '@/components/MainLayout/MainLayout'
import Carousel from '@/components/Carousel/Carousel'
import Posts from '@/data/posts'
import ImageCard from '@/components/Cards/ImageCard/ImageCard'
import Card from '@/components/Cards/Card/Card'
import Head from 'next/head'

const index = () => {
  const [newPosts, setNewPosts] = useState(Posts)

  useEffect(() => {
    let firstNumber = Math.floor(Math.random() * Posts.length)
    let secondNumber = Math.floor(Math.random() * Posts.length)
    while (firstNumber === secondNumber || (Posts.slice(Math.min(firstNumber, secondNumber), Math.max(firstNumber, secondNumber)).length < 3)) {
      firstNumber = Math.floor(Math.random() * Posts.length)
      secondNumber = Math.floor(Math.random() * Posts.length)
    }
    setNewPosts(Posts.slice(Math.min(firstNumber, secondNumber), Math.max(firstNumber, secondNumber)))
  }, [])

  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>

      <MainLayout>
        <Carousel Images={newPosts} description />
        <section className='mx-5 lg:mx-20 mt-32'>
          <div className='w-full flex flex-col lg:flex-row justify-between lg:h-[500px]'>
            <div className='lg:w-1/2 w-full'>
              <ImageCard className={'w-full flex h-full'} data={Posts[0]} />
            </div>
            <div className='lg:w-1/2 w-full lg:ml-3 my-2 lg:my-0 flex flex-col'>
              <div className='w-full lg:pb-2 lg:h-2/4 flex justify-between'>
                <ImageCard className={'w-full'} data={Posts[7]} />
              </div>
              <div className='lg:h-2/4 flex flex-col lg:flex-row justify-between'>
                <ImageCard className={'lg:w-1/2 my-2 lg:my-0 lg:mr-2'} data={Posts[1]} />
                <ImageCard className={'lg:w-1/2'} data={Posts[2]} />
              </div>
            </div>
          </div>
        </section>
        <section className='mx-5 lg:mx-20 mt-32'>
          <h1 className='text-4xl'>Popular Posts:</h1>
          <div className='mt-10'>
            <div className='w-full flex flex-col lg:flex-row'>
              <div className='lg:w-1/2 w-full'>
                <Card data={Posts[0]} />
              </div>
              <div className='lg:w-1/2 w-full flex flex-col lg:ml-4'>
                <Card medium data={Posts[1]} />
                <Card medium data={Posts[2]} />
                <Card medium data={Posts[3]} />
              </div>
            </div>
          </div>
        </section>
        <section className='mx-5 lg:mx-20 mt-32 flex flex-col xl:flex-row'>
          <div className='w-full xl:w-1/3 mt-5'>
            <h1 className='text-4xl'>Sports:</h1>
            <div className='mt-10'>
              <div className='w-full flex flex-col'>
                <Card data={Posts[0]} />
                <Card small data={Posts[1]} />
                <Card small data={Posts[2]} />
                <Card small data={Posts[3]} />
              </div>
            </div>
          </div>
          <div className='w-full xl:w-1/3 xl:mx-5 mt-5'>
            <h1 className='text-4xl'>Travel:</h1>
            <div className='mt-10'>
              <div className='w-full flex flex-col'>
                <Card data={Posts[0]} />
                <Card small data={Posts[1]} />
                <Card small data={Posts[2]} />
                <Card small data={Posts[3]} />
              </div>
            </div>
          </div>
          <div className='w-full xl:w-1/3 mt-5'>
            <h1 className='text-4xl'>Lifestyle:</h1>
            <div className='mt-10'>
              <div className='w-full flex flex-col'>
                <Card data={Posts[0]} />
                <Card small data={Posts[1]} />
                <Card small data={Posts[2]} />
                <Card small data={Posts[3]} />
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  )
}


export default index