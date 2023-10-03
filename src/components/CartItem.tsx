import { Products, StateProps } from "../../type"
import { useSelector } from "react-redux"
import Image from "next/image"
import { AiOutlineClose } from "react-icons/ai"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { decreaseQuantity, deleteProduct, increaseQuantity } from "@/redux/shoppingSlice"
import FormatedPrice from "./FormatedPrice"

const CartItem = () => {

    const { productData } = useSelector((state: StateProps) => state?.shopping)
    const dispatch = useDispatch()

    return (
        <div className="flex flex-col gap-y-2">
            <div className="hidden font-semibold bg-white p-2 lg:inline-flex items-center justify-between">
                <p className="w-1/3"> Product</p>
                <p className="flex w-1/3 items-center justify-center"> Quantity</p>
                <p className="flex w-1/3 items-center justify-end"> SubTotal</p>
            </div>

            {/* Generate the Product */}

            <div className="flex flex-col gap-y-2">

                {
                    productData?.map((item: Products) => (

                        <div key={item._id} className="w-full bg-white p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-start w-full gap-x-3 md:w-1/3">
                                <span
                                    onClick={() => dispatch(deleteProduct(item?._id))}
                                    className="">
                                    <AiOutlineClose className="text-lg cursor-pointer duration-200 hover:text-red-500" />
                                </span >
                                <Image src={item?.image} width={500} height={500} alt="product image" className="w-20 object-cover h-20" loading="lazy" />
                            </div>
                            {/* quantity */}
                            <div className="flex items-center justify-start gap-x-3 border-[1px] border-slate-300 py-2 px-4 w-full md:w-auto">
                                <p> Quantity</p>
                                <div className="flex item-center cursor-pointer text-lg justify-between w-20">
                                    <span
                                        onClick={() => dispatch(decreaseQuantity(item))}
                                        className="cursor-pointer" > <FiChevronLeft />  </span >
                                    <span > {item?.quantity}</span >
                                    <span
                                        onClick={() => dispatch(increaseQuantity(item))}
                                        className="cursor-pointer" > <FiChevronRight />  </span >
                                </div>
                            </div>

                            <div className="w-full md:w-1/3 justify-start items-end md:justify-end">
                                <p className="text-lg font-semibold"> <FormatedPrice amount={item?.price * item?.quantity} /> </p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CartItem
