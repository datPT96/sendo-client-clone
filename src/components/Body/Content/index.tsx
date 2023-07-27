import React from 'react'
import SortProduct from './SortProduct'
import ProductCard from './ProductCard'
// import { data } from '@/data/products'
import { Link } from 'react-router-dom'
import { ProductState } from '@/reducers/ProductReducer'
import ProductNotFound from './ProductNotFound'

interface ContentsProp {
    productList: ProductState
    page?: number | null
    totalPage?: number | null
    getMorePage: () => void
}

const Contents = ({ productList, page, totalPage, getMorePage }: ContentsProp) => {
    return (
        <>
            <SortProduct />
            <div className="min-h-[80vh] mt-[1.6rem]" >
                {productList.length > 0 ? (
                    <>
                        <div className="m-[-0.8rem] mb-[0.8rem] stretch-content flex-wrap grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 w-[calc(100%+1.6rem)]">
                            {/* <ProductCard /> */}
                            {productList?.map((product, index) => {
                                if (product.type === 'SKU') {
                                    return (
                                        <div
                                            key={index}
                                            className="p-[8px] w-full"
                                        >
                                            <Link to="/">
                                                <div className="">
                                                    <ProductCard
                                                        product={product}
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }
                                return null
                            })}
                        </div>
                        <div className="stretch-content justify-center pt-[0.8rem] pb-[2.4rem]">
                            <div className="srceen-basis-3">
                                <div className="px-[0.4rem]">
                                    {page === totalPage ? <></> : <button className="inline-flex items-center justify-center w-full border-[1px] border-solid border-[#fff] bg-white text-[#3f4b53] rounded-[0.4rem] px-[1.6rem] py-[1rem] hover:bg-[#fafafa] hover:border-[#fafafa]"
                                        onClick={getMorePage}>
                                        <span className="font-bold">
                                            Xem thêm
                                        </span>
                                    </button>}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <ProductNotFound />
                )}
            </div>
        </>
    )
}

export default Contents
