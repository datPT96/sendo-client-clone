import React, { useState, useContext, Dispatch } from 'react'
import { LevelPrice } from '@/data/type'
import { ProductContext } from '@/contexts/ProductContext'
import ExpandMoreOrLess from '../ExpandMoreOrLess'
import { ActionContext } from '@/contexts/ActionContext'

interface LevelPriceSelectType {
    datas: LevelPrice[] | undefined
    setGtprice: Dispatch<React.SetStateAction<string>>
    setLtprice: Dispatch<React.SetStateAction<string>>
}

const convertNumber = (value: number) => {
    if (value < 1000000) {
        return `${value / 1000}K`
    }
    return `${Math.floor(value / 1000000)}M`
}

const PriceRangeList = ({
    datas,
    setGtprice,
    setLtprice,
}: LevelPriceSelectType) => {
    const [open, setOpen] = useState(false)
    // const { filterByPrice } = useContext(ProductContext)
    const { addAction } = useContext(ActionContext)

    const hanldeClick = () => {
        setOpen(!open)
    }

    const findInRange = (gtprice: string, ltprice: string) => {
        // filterByPrice(gtprice, ltprice)
        setGtprice(gtprice)
        setLtprice(ltprice)
        addAction('levelPrice', undefined, Number(gtprice), Number(ltprice), undefined)
    }

    return (
        <div className="stretch-content flex-col flex-wrap pt-[0.4rem] items-stretch">
            {!open
                ? datas?.map((item: any, index) => {
                    if (index > 3) {
                        return null
                    }
                    return (
                        <span
                            key={index}
                            onClick={() => {
                                item.gtprice === -1
                                    ? findInRange(item.ltprice, '')
                                    : item.gtprice !== -1 &&
                                        item.ltprice !== -1
                                        ? findInRange(item.ltprice, item.gtprice)
                                        : findInRange('', item.gtprice)
                            }}
                            className="stretch-content items-center flex-wrap h-[3.2rem] bg-gray hover:font-bold cursor-pointer rounded-[0.4rem] px-[0.8rem] mb-[0.8rem]"
                        >
                            {item.gtprice === -1
                                ? `Dưới ${convertNumber(item.ltprice)}`
                                : item.gtprice !== -1 &&
                                    item.ltprice !== -1
                                    ? `${convertNumber(
                                        item.gtprice,
                                    )} - ${convertNumber(item.ltprice)}`
                                    : `Trên ${convertNumber(item.gtprice)}`}
                        </span>
                    )
                })
                : datas?.map((item: any, index) => {
                    return (
                        <span
                            key={index}
                            onClick={() => {
                                item.gtprice === -1
                                    ? findInRange(item.ltprice, '')
                                    : item.gtprice !== -1 &&
                                        item.ltprice !== -1
                                        ? findInRange(item.ltprice, item.gtprice)
                                        : findInRange('', item.gtprice)
                            }}
                            className="stretch-content items-center flex-wrap h-[3.2rem] bg-gray hover:font-bold cursor-pointer rounded-[0.4rem] px-[0.8rem] mb-[0.8rem]"
                        >
                            {item.gtprice === -1
                                ? `Dưới ${convertNumber(item.ltprice)}`
                                : item.gtprice !== -1 &&
                                    item.ltprice !== -1
                                    ? `${convertNumber(
                                        item.gtprice,
                                    )} - ${convertNumber(item.ltprice)}`
                                    : `Trên ${convertNumber(item.gtprice)}`}
                        </span>
                    )
                })}
            <div className="mt-[-0.4rem]">
                <ExpandMoreOrLess isOpen={open} onClick={hanldeClick} />
            </div>
        </div>
    )
}

export default PriceRangeList
