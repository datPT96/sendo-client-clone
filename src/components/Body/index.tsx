import React, { useContext, useEffect, useState } from 'react'

import Breadcrumb from './Breadcrumb'
import Sidebar from './SideBar'
import Contents from './Content'
import { ActionContext } from '@/contexts/ActionContext'
import productsApi from '@/api/productsApi'
import { Product } from '@/reducers/ProductReducer'

const Body = () => {
    const [listData, setListData] = useState<Product[]>([])
    const [params, setParams] = useState({
        name: '',
        shop_warehouse_city_id: '',
        is_using_instant: '',
        is_using_in_day: '',
        is_using_standard: '',
        is_senmall: '',
        is_shipping_support: '',
        is_shop_certificated: '',
        is_shop_plus: '',
        final_price: '',
        max_final_price: '',
        rating_percent: '',
        has_video: ''
    })

    const [p, setPage] = useState(1)

    const { actions } = useContext(ActionContext)

    const getListProduct = async () => {
        const list = await productsApi.filterByCondition({ ...actions, p, s: 20 })
        setListData(list?.data)
    }
    console.log(actions)

    useEffect(() => {
        getListProduct()
    }, [actions])

    return (
        <main className="relative">
            <div className="bg-gray min-h-screen w-full pb-[2.4rem]">
                <div className="container px-[24px] mb-[8px]">
                    <Breadcrumb />
                    <div className="stretch-content min-h-[90vh]">
                        <Sidebar />
                        <div className="flex-1">
                            <Contents productList={listData} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Body
