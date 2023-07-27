import React, {
    useState,
} from 'react'

import PromotionsSelect from './PromotionsSelect'
import ExpandMoreOrLess from '../ExpandMoreOrLess'

interface DiscountsProp {
    data: any
}

const Discounts = ({ data }: DiscountsProp) => {

    const [open, setOpen] = useState(true)
    const [showMore, setShowMore] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    const hanldeShow = () => {
        setShowMore(!showMore)
    }

    return (
        <div className="stretch-content flex-col flex-wrap px-[0.4rem] py-[1.2rem]">
            <div className="stretch-content items-center justify-between mb-[0.8rem]">
                <span className="ml-[1.2rem] tracking-[0] text-base font-bold leading-[1.8rem]">
                    Ưu đãi
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
                !showMore ? data.map((item: any, index: number) => {
                    if (index > 3) {
                        return null
                    }
                    if (item.attribute_term === "GeneralTerm") {
                        return (
                            <PromotionsSelect datas={item.attribute_value} attribute_key={item.attribute_key} key={item.attribute_key} />
                        )
                    }
                    return null
                })
                    :
                    data.map((item: any) => {
                        if (item.attribute_term === "GeneralTerm") {
                            return (
                                <PromotionsSelect datas={item.attribute_value} attribute_key={item.attribute_key} key={item.attribute_key} />
                            )
                        }
                        return null
                    })
            )}
            {data.length > 4 && (
                <ExpandMoreOrLess isOpen={showMore} onClick={hanldeShow} />
            )}
        </div>
    )
}

export default Discounts
