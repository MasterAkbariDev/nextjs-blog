import MainLayout from '@/components/MainLayout/MainLayout'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Posts from '@/data/posts'
import Card from '@/components/Cards/Card/Card'
import Head from 'next/head'

const Tag = () => {

    const [pagePosts, setpagePosts] = useState([])
    const [pageTag, setPageTag] = useState('')
    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
            setPageTag(router.query.tag)
        }
    }, [router.isReady, router]);


    useEffect(() => {
        async function filterPosts() {
            const newPosts = Posts.filter(post => post.tags.some(tag => tag.name === pageTag));
            setpagePosts(newPosts)
        }
        filterPosts();
    }, [pageTag])

    return (
        <>
            <Head>
                <title>Tag | {pageTag}</title>
            </Head>
            <MainLayout>
                <div className='w-full'>
                    <section className='w-full h-max relative'>
                        <div className='w-full'>
                            <img src='/images/37368.jpg'></img>
                        </div>
                        <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center text-white'>
                            <span className={`w-max justify-self-start rounded-md bg-[#8bc34a] tracking-widest px-2 py-1 text-xs font-medium text-white font-bold mb-10`}>{pageTag}</span>
                            <h1 className='lg:text-7xl md:text-4xl text-2xl'>'{pageTag}' Tag</h1>
                        </div>
                    </section>
                    <section className='lg:mx-20 mx-5 mt-16'>
                        <h1 className='text-4xl'>{pageTag}</h1>
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

export default Tag