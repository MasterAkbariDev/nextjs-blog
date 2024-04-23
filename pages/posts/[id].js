import MainLayout from '@/components/MainLayout/MainLayout'
import Posts from '@/data/posts'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const id = () => {

    const [pageTitle, setPageTitle] = useState('')
    const [pagePost, setPagePost] = useState([])
    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
            async function filterPosts() {
                await setPagePost(Posts.filter((item) => {
                    return item.id === router.query.id
                }))
            }
            filterPosts();
        }
    }, [router.isReady, router, Posts]);

    useEffect(() => {
        pagePost.map((item) => {
            setPageTitle(item.title)
        })
    } , [pagePost , setPagePost])

    return (
        <>
        <Head>
            <title>{pageTitle}</title>
        </Head>
            <MainLayout>
                {pagePost.map((item, index) => {
                    return (
                        <div key={index} className='w-full'>
                            <section className='w-full h-max relative'>
                                <div className='w-full h-max relative'>
                                    <div className='absolute inset-0 bg-black opacity-75'></div>
                                    <img src={item.img} className='object-cover object-center w-full h-full' />
                                </div>
                                <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center text-white'>
                                    <span className={`w-max justify-self-start rounded-md bg-[#8bc34a] tracking-widest px-2 py-1 text-xs font-medium text-white font-bold mb-10`}>{item.category}</span>
                                    <h1 className='lg:text-7xl md:text-4xl text-2xl'>{item.title}</h1>
                                    <div className='flex text-xl gap-1 text-center mt-16'>
                                        <span>By </span>
                                        <span>{item.author}</span>
                                        <span>-</span>
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                            </section>
                            <section className='lg:mx-20 mx-5 mt-16'>
                                <div className='flex flex-wrap w-full h-max flex flex-col lg:flex-row'>
                                    <div className='w-full lg:w-2/3 border-b border-gray-300 pb-8'>
                                        <p className='text-gray-400 text-xl text-justify'>{item.content}</p>
                                    </div>
                                    <div className='w-full lg:w-1/3 lg:pl-32 mt-36 lg:mt-0'>
                                        <div className='w-full'>
                                            <h1 className='text-4xl text-center'>{item.author}</h1>
                                            <p className='text-justify text-center text-gray-400 mt-5 text-xl'>{item.authorDescription}</p>
                                        </div>
                                        <div className='w-full my-32'>
                                            <h1 className='text-2xl border-b border-gray-300 pb-5'>Tags</h1>
                                            <div className='mt-5 flex flex-wrap'>
                                                {item.tags.map((it, ind) => {
                                                    return <Link href={`/tag/${it.location}`} key={ind} className={`w-max justify-self-start transition duration-500 rounded-md bg-gray-200 text-gray-600 hover:bg-[#2F89FC] hover:text-white tracking-widest m-1 cursor-pointer px-2 py-1 text-xs font-medium font-bold`}>{it.name}</Link>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )
                })}
            </MainLayout>
        </>
    )
}

export default id