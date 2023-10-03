"use client"

import { ItemsProps, Products } from "../../type"
import Image from "next/image"
import { calculatePercentage } from '../helpers/index';
import FormatedPrice from "./FormatedPrice";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from 'react-hot-toast';

const ProductData = ({ item }: ItemsProps) => {
  const dispatch = useDispatch()


  const startArray = Array.from({ length: item?.rating }, (_, index) => (
    <span key={index} className="text-yellow-400">
      <IoIosStar className="" />
    </span>
  ))
  return (
    <div className="w-full rounded-lg overflow-hidden">

      <Link href={{ pathname: "/product", query: { _id: item?._id } }}>


        <div className="w-full h-96 group overflow-hidden relative">
          <Image src={item?.image} alt="product image" width={500} height={500} className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg" />
          {item?.isNew && (
            <span className="absolute top-2 right-2 bg-white duration-200 group-hover:text-white font-medium text-xs py-1 px-3 rounded-full group-hover:bg-orange-600">
              New Arrival
            </span>
          )}
        </div>
      </Link>

      <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{item?.title}</p>

        <div className="flex justify-between items-center">

          <div className="border-[1px] text-xs rounded-full border-orange-600 py-1 px-4">

            <p className=""> {calculatePercentage(item?.price, item?.oldPrice)}% off</p>
          </div>
          <div className="flex items-center gap-x-2">

            <p className="text-slate-500 line-through"> <FormatedPrice amount={item?.oldPrice} /> </p>
            <p className="font-semibold"> <FormatedPrice amount={item?.price} /> </p>

          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* add to cart */}
          <button onClick={() => dispatch(addToCart(item)) && toast.success(`${item?.title.substring(0, 15)} added successfully!`)}
            className="bg-orange-600 tracking-wide px-4 py-2 text-sm rounded-full text-slate-100 hover:text-white duration-300 hover:bg-orange-800 ">Add to cart</button>

          {/* star icons */}
          <div className="flex items-center gap-x-1 ">
            {startArray}
          </div>

        </div>
      </div>
      <Toaster />

    </div>
  )
}

export default ProductData
