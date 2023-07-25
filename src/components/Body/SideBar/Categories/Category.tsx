import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MultiLevelMenus from './MultiLevelMenus'
import categoriesList from '@/data/categoriesList'
import categoryApi from '@/api/categoryApi'

const Category = () => {
    const [open, setOpen] = useState(true)
    const [categories, setCategories] = useState([])

    const handleClick = () => {
        setOpen(!open)
    }

    const getAllCategories = async () => {
        const list = await categoryApi.getAllCategory();
        setCategories(list?.data)
    }

    useEffect(() => {
        getAllCategories()
    }, [])
    return (
        <div className="stretch-content flex-col flex-wrap px-[0.4rem] py-[1.2rem]">
            <div className="stretch-content items-center justify-between">
                <span className="ml-[1.2rem] tracking-[0] text-base font-bold leading-[1.8rem]">
                    Danh mục
                </span>
                <button
                    className="button-main button-base button-content p-[0.7rem] hover:bg-gray"
                    onClick={() => handleClick()}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        className={`expand-icon ${open ? '' : 'rotate-180'}`}
                    >
                        <path
                            fill="#6F787E"
                            fillRule="nonzero"
                            d="M12 10.786 6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div
                className={`stretch-content categories-css flex-col ${
                    open ? '' : 'hidden'
                }`}
            >
                <Link to={'/'} className="text-blue px-[1.2rem] py-[0.8rem]">
                    Về trang tất cả danh mục
                </Link>
                <MultiLevelMenus datas={categories} />
            </div>
        </div>
    )
}

export default Category
