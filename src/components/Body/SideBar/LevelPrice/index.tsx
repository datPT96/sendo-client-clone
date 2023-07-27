import React, { useState, useContext, ChangeEvent } from 'react'

import LevelFilter from './LevelFilter'
import PriceRangeList from './PriceRangeList'
import { ProductContext } from '@/contexts/ProductContext'
import { ActionContext } from '@/contexts/ActionContext'

interface Attribute_Data {
    _id: string
    attribute_term: string
    attribute_name: string
    attribute_key: string
    attribute_value: []
}

interface DefaultProp {
    data: Attribute_Data | undefined
}

const LevelPrice = ({ data }: DefaultProp) => {
    const [open, setOpen] = useState(true)

    const [gtprice, setGtprice] = useState<string | null>('')
    const [ltprice, setLtprice] = useState<string | null>('')

    // const { filterByPrice } = useContext(ProductContext)

    const { filterLevelPrice } = useContext(ActionContext)

    const onGtpriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setGtprice(e.target.value)
    }

    const onLtpriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLtprice(e.target.value)
    }

    const onClickApply = () => {
        // filterByPrice(gtprice, ltprice)
        filterLevelPrice(Number(gtprice), Number(ltprice))
    }
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className="stretch-content flex-col flex-wrap px-[0.4rem] py-[1.2rem]">
            <div className="stretch-content items-center justify-between">
                <span className="ml-[1.2rem] tracking-[0] text-base font-bold leading-[1.8rem]">
                    {data?.attribute_name}
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
            {open && (
                <div className="px-[1.2rem]">
                    <LevelFilter
                        gtprice={gtprice}
                        ltprice={ltprice}
                        onClick={onClickApply}
                        onGtpriceChange={onGtpriceChange}
                        onLtpriceChange={onLtpriceChange}
                    />
                    <PriceRangeList
                        datas={data?.attribute_value}
                        gtprice={gtprice ?? ''}
                        ltprice={ltprice ?? ''}
                        setGtprice={setGtprice}
                        setLtprice={setLtprice}
                    />
                </div>
            )}
        </div>
    )
}
export default LevelPrice
