import { Button, TextField } from '@mui/material'
import React, { ChangeEvent } from 'react'

interface LevelFilterProp {
    gtprice?: string
    ltprice?: string
    onClick: () => void
    onLtpriceChange: (e: ChangeEvent<HTMLInputElement>) => void
    onGtpriceChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const LevelFilter = ({
    gtprice,
    ltprice,
    onClick,
    onLtpriceChange,
    onGtpriceChange,
}: LevelFilterProp) => {
    return (
        <div className="stretch-content flex-col flex-wrap py-[0.8rem]">
            <div className="stretch-content">
                <div className="stretch-content flex-col flex-wrap">
                    <span className="mb-[0.8rem] text-[#6f787e] tracking-[0] leading-[1.8rem]">
                        Thấp nhất
                    </span>
                    <div className="input-base ">
                        <div className="flex w-full">
                            <input
                                type="number"
                                className="w-full leading-[1.4rem] text-base p-[0.8rem] border-none"
                                value={gtprice}
                                onInput={onGtpriceChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="mx-[0.4rem] mt-[auto] mb-[0.8rem] ">
                    <svg
                        width="4"
                        height="12"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className=""
                    >
                        <path
                            fill="#6F787E"
                            fillRule="nonzero"
                            d="M22 11v2H2v-2z"
                        ></path>
                    </svg>
                </div>
                <div className="stretch-content flex-col flex-wrap">
                    <span className="mb-[0.8rem] text-[#6f787e] tracking-[0] leading-[1.8rem]">
                        Cao nhất
                    </span>
                    <div className="input-base ">
                        <div className="flex w-full">
                            <input
                                type="number"
                                className="w-full leading-[1.4rem] text-base p-[0.8rem] border-none"
                                value={ltprice}
                                onInput={onLtpriceChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button
                className={`button-content button-base text-white font-bold hover:opacity-[0.8] mt-[0.8rem] px-[0.8rem] py-[0.4rem] rounded-[0.4rem]
                ${
                    gtprice || ltprice
                        ? 'bg-red border-[1px] border-solid border-red'
                        : 'bg-gray text-[#b7bbbf] border-gray cursor-not-allowed'
                }`}
                disabled={gtprice || ltprice ? false : true}
                onClick={onClick}
            >
                <span className="text-sm leading-[1.2]">Áp dụng</span>
            </button>
        </div>
    )
}

export default LevelFilter
