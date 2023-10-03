"use client"
import Image from "next/image"
import { IoMdCart } from "react-icons/io"
import FormatedPrice from "./FormatedPrice"
import { MdFavoriteBorder } from "react-icons/md"
import { useDispatch } from "react-redux"
import { addToCart } from "@/redux/shoppingSlice"
import toast, { Toaster } from "react-hot-toast"

const SingleProduct = ({ product }: any) => {

    const dispatch = useDispatch()

    return (
        <div className="grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg">

            <div className="">
                <Image src={product?.image} alt="Product Image" width={500} height={500}
                    className="w-full max-h-[700px] object-cover rounded-lg" />
            </div>

            <div className="flex flex-col gap-y-10 justify-center">
                <p className="text-3xl font-semibold">{product?.title}</p>
                <p className="text-xl font-semibold"> <FormatedPrice amount={product?.price} /></p>


                <p className="text-lightText "> {product?.description}</p>

                <div className="text-sm text-lightText flex flex-col">
                    <span>
                        SKU:<span className="text-darkText"> {product?._id}</span>
                    </span>

                    <span>
                        Category:<span className="text-darkText"> {product?.category}</span>
                    </span>
                </div>

                <div
                    onClick={() => dispatch(addToCart(product)) && toast.success(`${product?.title.substring(0, 15)} added successfully!`)}
                    className="flex items-center cursor-pointer group">

                    <button

                        className="text-slate-100 border-r-[1px] border-r-slate-500 flex items-center uppercase bg-darkText px-6 py-3 text-sm"> Add to CArt</button>
                    <span className="bg-darkText text-slate-100 w-12 py-3 flex items-center justify-center group-hover:bg-orange-500 duration-200 text-xl "> <IoMdCart /></span>

                </div>

                <p className="flex items-center gap-x-2 text-sm">  <MdFavoriteBorder /> Add to Wishlist</p>
            </div>
            <Toaster />
        </div>
    )
}

export default SingleProduct
