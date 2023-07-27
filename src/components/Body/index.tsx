import React, { useContext, useEffect, useState, useLayoutEffect } from 'react'

import Breadcrumb from './Breadcrumb'
import Sidebar from './SideBar'
import Contents from './Content'
import { ActionContext } from '@/contexts/ActionContext'
import productsApi from '@/api/productsApi'
import { Product } from '@/reducers/ProductReducer'
// import { ProductContext } from '@/contexts/ProductContext'


const Body = () => {
    const [listData, setListData] = useState<Product[]>([])
    const [p, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState()
    const [loadPage, setLoadPage] = useState(true)

    const { actions } = useContext(ActionContext)
    // const { products, filterProduct } = useContext(ProductContext)

    const getListProduct = async () => {
        const list = await productsApi.filterByCondition({ ...actions, p, s: 20 })
        setTotalPage(list?.data.total_page)
        p === 1 ? setListData(list?.data.datas) :
            setListData((prev) => ([...prev, ...list?.data?.datas]))
    }

    const getMorePage = () => {
        setPage((prev) => prev + 1)
        setLoadPage(true)
    }

    useLayoutEffect(() => {
        const onScroll = () => {
            if (window.scrollY >= window.screen.availHeight * 0.6) {
                if (loadPage && p !== totalPage) {
                    getMorePage()
                    setLoadPage(false)
                }
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => { window.removeEventListener('scroll', onScroll) }
    }, [p, totalPage, loadPage])

    useLayoutEffect(() => {
        const onScroll = () => {
            if (window.scrollY === 0) {
                setPage(1)
                setLoadPage(true)
            }
        }
        window.scrollTo({
            top: 0
        })

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => { window.removeEventListener('scroll', onScroll) }
    }, [actions])

    useEffect(() => {
        getListProduct()
        // filterProduct(actions, p, 20)
    }, [actions, p])

    return (
        <main className="relative">
            <div className="bg-gray min-h-screen w-full pb-[2.4rem]">
                <div className="container px-[24px] mb-[8px]">
                    <Breadcrumb />
                    <div className="stretch-content min-h-[90vh]">
                        <Sidebar />
                        <div className="flex-1">
                            <Contents productList={listData} getMorePage={getMorePage} page={p} totalPage={totalPage} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Body
