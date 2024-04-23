import MainLayout from '@/components/MainLayout/MainLayout'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Posts from '@/data/posts'
import Card from '@/components/Cards/Card/Card'
import Head from 'next/head'

const Category = () => {

    const [pagePosts, setpagePosts] = useState([])
    const [pageCategory, setPageCategory] = useState('')
    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
            setPageCategory(router.query.Category)
        }
    }, [router.isReady, router]);


    useEffect(() => {
        async function filterPosts() {
            const newPosts = await Posts.filter((item) => {
                return item.category === pageCategory
            })
            setpagePosts(newPosts)
        }
        filterPosts();
    }, [pageCategory])

    return (
        <>
            <Head>
                <title>Category | {pageCategory}</title>
            </Head>
            <MainLayout>
                <div className='w-full'>
                    <section className='w-full h-max relative'>
                        <div className='w-full'>
                            <img src='/images/37368.jpg'></img>
                        </div>
                        <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center text-white'>
                            <span className={`w-max justify-self-start rounded-md bg-[#8bc34a] tracking-widest px-2 py-1 text-xs font-medium text-white font-bold mb-10`}>{pageCategory}</span>
                            <h1 className='lg:text-7xl md:text-4xl text-2xl'>'{pageCategory}' Category</h1>
                        </div>
                    </section>
                    <section className='lg:mx-20 mx-5 mt-16'>
                        <h1 className='text-4xl'>{pageCategory}</h1>
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

export default Category