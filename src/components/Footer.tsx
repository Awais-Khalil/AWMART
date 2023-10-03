"use client"
import React from 'react'
import { BsYoutube, BsGithub, BsLinkedin, BsFacebook, BsReddit, BsGit } from 'react-icons/bs'
import payment from '../images/payment.png'
import Container from './Container'
import Logo from './Logo'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='w-full bg-darkText text-slate-100'>
            <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

                <div className='flex flex-col gap-y-4'>

                    <Logo />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aliquam excepturi provident tempora mollitia nam totam perferendis reiciendis facere libero necessitatibus accusantium aperiam odit, ullam pariatur quisquam commodi impedit quibusdam!
                    </p>

                    <div className='flex gap-x-4 items-center'>
                        <a href="/" target="_blank">
                            <span className='bg-slate-100 text-darkText hover:bg-orange-600 hover:text-white cursor-pointer duration-200 p-1 inline-flex items-center justify-center rounded-md text-lg'> <BsYoutube /> </span>
                        </a>

                        <a href="/" target="_blank">
                            <span className='bg-slate-100 text-darkText hover:bg-orange-600 hover:text-white cursor-pointer duration-200 p-1 inline-flex items-center justify-center rounded-md text-lg'> <BsFacebook /> </span>
                        </a>

                        <a href="/" target="_blank">
                            <span className='bg-slate-100 text-darkText hover:bg-orange-600 hover:text-white cursor-pointer duration-200 p-1 inline-flex items-center justify-center rounded-md text-lg'> <BsLinkedin /> </span>
                        </a>

                        <a href="/" target="_blank">
                            <span className='bg-slate-100 text-darkText hover:bg-orange-600 hover:text-white cursor-pointer duration-200 p-1 inline-flex items-center justify-center rounded-md text-lg'> <BsReddit /> </span>
                        </a>

                        <a href="/" target="_blank">
                            <span className='bg-slate-100 text-darkText hover:bg-orange-600 hover:text-white cursor-pointer duration-200 p-1 inline-flex items-center justify-center rounded-md text-lg'> <BsGithub /> </span>
                        </a>



                    </div>

                </div>

                <div>

                    <p className='text-lg'> Latest Posts</p>
                    <ul className='text-sm flex flex-col font-light mt-2 gap-y-2'>
                        <li className='flex flex-col'>
                            <span className='text-slate hover:text-orange-600 cursor-pointer duration-200 '> Where Music Is Headed Next</span>
                            <span className='text-orange-600'> January 31,2022</span>
                        </li>


                        <li className='flex flex-col'>
                            <span className='text-slate hover:text-orange-600 cursor-pointer duration-200 '> Where Music Is Headed Next</span>
                            <span className='text-orange-600'> January 31,2022</span>
                        </li>

                        <li className='flex flex-col'>
                            <span className='text-slate hover:text-orange-600 cursor-pointer duration-200 '> Where Music Is Headed Next</span>
                            <span className='text-orange-600'> January 31,2022</span>
                        </li>

                        <li className='flex flex-col'>
                            <span className='text-slate hover:text-orange-600 cursor-pointer duration-200 '> Where Music Is Headed Next</span>
                            <span className='text-orange-600'> January 31,2022</span>
                        </li>


                    </ul>

                </div>

                <div>

                    <p> Links</p>
                    <ul className='text-base mt-2 font-medium flex flex-col gap-y-2'>

                        <Link href="/">
                            <li className='hover:text-orange-500 cursor-pointer duration-200'>
                                Home
                            </li>

                        </Link>
                        <Link href="/about">
                            <li className='hover:text-orange-500 cursor-pointer duration-200'>
                                About
                            </li>

                        </Link>
                        <Link href="/cart">
                            <li className='hover:text-orange-500 cursor-pointer duration-200'>
                                Cart
                            </li>

                        </Link>
                        <Link href="/newsletter">
                            <li className='hover:text-orange-500 cursor-pointer duration-200'>
                                Newsletter
                            </li>

                        </Link>
                        <Link href="/contact">
                            <li className='hover:text-orange-500 cursor-pointer duration-200'>
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <p className='text-lg'> Pay us with your trusted services</p>
                    <Image src={payment} alt="payment banner image"
                        className='w-full h-10 mt-2 object-cover'
                    />
                </div>


            </Container>
        </div>
    )
}

export default Footer
