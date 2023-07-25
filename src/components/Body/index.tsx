import React, { useContext, useEffect } from 'react'

import Breadcrumb from './Breadcrumb'
import Sidebar from './SideBar'
import Contents from './Content'
import { ProductContext } from '@/contexts/ProductContext'
import { ActionContext } from '@/contexts/ActionContext'

const Body = () => {
    const { products, filterProduct } = useContext(ProductContext)
    const { actions } = useContext(ActionContext)
    // console.log(actions)
    useEffect(() => {
        filterProduct(actions)
    }, [actions])

    return (
        <main className="relative">
            <div className="bg-gray min-h-screen w-full pb-[2.4rem]">
                <div className="container px-[24px] mb-[8px]">
                    <Breadcrumb />
                    <div className="stretch-content min-h-[90vh]">
                        <Sidebar />
                        <div className="flex-1">
                            <Contents productList={products} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Body
