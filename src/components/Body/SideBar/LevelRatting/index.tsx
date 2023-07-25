import React, { useState } from 'react'
import RattingRangeList from './RattingRangeList'

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

const Ratting = ({data}: DefaultProp) => {
    const [open, setOpen] = useState(true)

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
                    <RattingRangeList datas={data?.attribute_value} />
                </div>
            )}
        </div>
    )
}

export default Ratting
