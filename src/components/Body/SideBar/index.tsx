import { Divider } from '@mui/material'
import { useState, useEffect } from 'react'

import Category from './Categories/Category'
import Discounts from './Discounts'
import LevelPrice from './LevelPrice'
import Ratting from './LevelRatting'
import filterCategoryApi from '@/api/filterCategoryApi'
import DefaultTerm from './DefaultTerm'

const Sidebar = () => {
    const [filterCategories, setFilterCategories] = useState([])

    const getListFilter = async () => {
        const list = await filterCategoryApi.getListFilter();
        setFilterCategories(list?.data)
    }

    const shop_warehouse_city = filterCategories.find((item: any) => item.attribute_key === "shop_warehouse_city_id")
    const shipping_method = filterCategories.find((item: any) => item.attribute_key === "shipping_method")
    const shop_type = filterCategories.find((item: any) => item.attribute_key === 'shop_type')
    const GeneralTerm = filterCategories.filter((item: any) => item.attribute_term === "GeneralTerm")
    const levelPrice = filterCategories.find((item: any) => item.attribute_key === "levelPrice")
    const level_ratting = filterCategories.find((item: any) => item.attribute_key === "levelRating")
    const other_type = filterCategories.find((item: any) => item.attribute_key === "other_type")

    useEffect(() => {
        getListFilter()
    }, [])

    return (
        <div className="sidebar-css">
            <div className="block">
                <Category />
                <Divider className="h-[1px]" />
                <DefaultTerm data={shop_warehouse_city} />
                <Divider className="h-[1px]" />
                <DefaultTerm data={shipping_method} />
                <Divider className="h-[1px]" />
                <DefaultTerm data={shop_type} />
                <Divider className="h-[1px]" />
                <Discounts data={GeneralTerm} />
                <Divider className="h-[1px]" />
                <LevelPrice data={levelPrice}/>
                <Divider className="h-[1px]" />
                <Ratting data={level_ratting}/>
                <Divider className="h-[1px]" />
                <DefaultTerm data={other_type} />
                <Divider className="h-[1px]" />
            </div>
        </div>
    )
}

export default Sidebar
