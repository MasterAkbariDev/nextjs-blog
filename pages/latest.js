import Card from '@/components/Cards/Card/Card'
import MainLayout from '@/components/MainLayout/MainLayout'
import Posts from '@/data/posts'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const latest = () => {

    const [pagePosts, setPagePosts] = useState([])

    useEffect(() => {
        function sortPosts() {
            setPagePosts(Posts.sort((a, b) => {
                const dateA = new Date(a.date)
                const dateB = new Date(b.date)
                if (dateA > dateB) {
                    return -1
                } else if (dateA < dateB) {
                    return 1
                } else {
                    return 0
                }
            }))
        }
        sortPosts()
    }, [Posts])

    return (
        <>
        <Head>
            <title>Latest</title>
        </Head>
        <MainLayout>
            <div className='w-full'>
                <section className='w-full h-max relative'>
                    <div className='w-full'>
                        <img src='/images/37368.jpg'></img>
                    </div>
                    <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center text-white'>
                        <h1 className='lg:text-7xl md:text-4xl text-2xl'>Latest</h1>
                    </div>
                </section>
                <section className='lg:mx-20 mx-5 mt-16'>
                    <h1 className='text-4xl'></h1>
                    <div className='flex flex-wrap w-full h-max'>
                        {pagePosts.map((item, index) => {
                            return <Card data={item} key={index} />
                        })}
                    </div>
                </section>
            </div>
        </MainLayout>
        </>
    )
}

export default latest