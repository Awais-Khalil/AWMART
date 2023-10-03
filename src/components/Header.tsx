"use client"

import { IoMdCart } from 'react-icons/io'
import React, { use, useEffect } from 'react'
import Container from './Container'
import Logo from './Logo'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { useSession, signIn, signOut } from 'next-auth/react'
import { FiLogOut } from 'react-icons/fi'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { Products, StateProps } from '../../type'
import { useState } from 'react'
import FormatedPrice from './FormatedPrice'
import Link from 'next/link'
import { deleteUser, addUser } from '@/redux/shoppingSlice'
import { BsBookmark } from 'react-icons/bs'


const Header = () => {
  const dispatch = useDispatch()
  const { data: session } = useSession()
  const { productData, orderData } = useSelector((state: StateProps) => state.shopping)


  useEffect(() => {
    if (session) {
      dispatch(addUser({
        name: session?.user?.name,
        email: session?.user?.email,
        Image: session?.user?.image
      }));
    } else {
      dispatch(deleteUser());
    }
  }, [session, dispatch]);


  const [totalAmt, setTotalAmt] = useState(0)

  useEffect(() => {
    let amt = 0
    productData?.map((item: Products) => {
      amt += item.price * item.quantity
      return amt
    });
    setTotalAmt(amt)
  }, [productData])


  return (
    <div className='bg-bodyColor h-20 top-0 sticky z-50'>

      <Container className='h-full flex items-center md:gap-x-5 justify-between md:justify-start'>

        <Logo />

        {/* Search Field */}

        <div className='w-full hidden md:flex group bg-white  items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600'>
          <FiSearch className='text-gray-500 group-focus-within:text-darkText duration-200' />
          <input type='text' placeholder='search for products' className='placeholder:text-sm flex-1 outline-none' />
        </div>


        {/* Login */}

        {!session &&
          <div onClick={() => signIn()} className='bg-bgLight cursor-pointer flex text-gray-500 items-center justify-center p-1.5 rounded-full hover:bg-white  border-[1px] duration-200 border-gray-200 hover:border-orange-500'>
            <div className='text-2xl'>     <AiOutlineUser /> </div>
            <p className='text-sm font-semibold'> Login/Register </p>
          </div>}
        {/* Cart Button */}

        <Link href={'/cart'}>
          <div className='bg-black border-[1px] border-black hover:border-orange-600 duration-200 relative hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5'>
            <div className='text-xl'>     <IoMdCart /> </div>
            <p className='text-sm font-semibold'>
              <FormatedPrice amount={totalAmt ? totalAmt : 0} />
            </p>
            <span className='bg-white rounded-full text-orange-600 text-xs font-semibold absolute flex items-center justify-center shadow-xl shadow-black -right-2 -top-1 w-5 h-5'> {productData ? productData?.length : 0} </span>
          </div>
        </Link>


        {/* Image */}

        {session &&

          <Image src={session?.user?.image as string} alt="User image" width={50} height={50}

            className='rounded-full object-cover'
          />

        }

        {/* Order button */}

        {orderData?.order?.length > 0 && session && (

          <Link href={'/order'} className='px-2 cursor-pointer gap-x-2'>
            <BsBookmark />
            <p className='text-sm font-semibold'> Orders</p>

          </Link>

        )}

        {/* Logout button */}

        {session &&


          <div className='bg-bgLight px-2 cursor-pointer gap-x-1 text-gray-500 flex items-center justify-center p-1.5 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-orange-500 duration-200'>
            <FiLogOut className='text-2xl cursor-pointer' onClick={() => signOut()} />
            <p className='font-sm font-semibold'> Logout </p>
          </div>

        }

      </Container>


    </div>
  )
}

export default Header
