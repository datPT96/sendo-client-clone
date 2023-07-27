import React, { useState, useContext, Dispatch, useCallback, useEffect } from 'react'
import { LevelPrice } from '@/data/type'
import ExpandMoreOrLess from '../ExpandMoreOrLess'
import { ActionContext } from '@/contexts/ActionContext'

interface LevelPriceSelectType {
    datas: LevelPrice[] | undefined
    gtprice: string
    ltprice: string
    setGtprice: Dispatch<React.SetStateAction<string | null>>
    setLtprice: Dispatch<React.SetStateAction<string | null>>
}

const convertNumber = (value: number) => {
    if (value < 1000000) {
        return `${value / 1000}K`
    }
    return `${Math.floor(value / 1000000)}M`
}

const PriceRangeList = ({
    datas,
    gtprice,
    ltprice,
    setGtprice,
    setLtprice,
}: LevelPriceSelectType) => {
    const [open, setOpen] = useState(false)
    const { filterLevelPrice } = useContext(ActionContext)
    const [selected, setSelected] = useState<number | null>()

    const hanldeClick = () => {
        setOpen(!open)
    }

    const findInRange = (gtprice: string, ltprice: string, index?: number) => {
        if (index === selected) {
            setGtprice(null)
            setLtprice(null)
            setSelected(null)
        }
        else {
            setGtprice(gtprice)
            setLtprice(ltprice)
            setSelected(index)
        }

    }

    useEffect(() => {
        filterLevelPrice(Number(gtprice), Number(ltprice))

    }, [gtprice, ltprice])


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
                                    ? findInRange(item.ltprice, '', index)
                                    : (item.gtprice !== -1 &&
                                        item.ltprice !== -1)
                                        ? findInRange(item.ltprice, item.gtprice, index)
                                        : findInRange('', item.gtprice, index)
                            }}
                            className={`stretch-content items-center flex-wrap h-[3.2rem] bg-gray hover:font-bold cursor-pointer rounded-[0.4rem] px-[0.8rem] mb-[0.8rem] ${selected === index ? 'font-bold border-red border-[1px]' : ''}`}
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
                                    ? findInRange(item.ltprice, '', index)
                                    : item.gtprice !== -1 &&
                                        item.ltprice !== -1
                                        ? findInRange(item.ltprice, item.gtprice, index)
                                        : findInRange('', item.gtprice, index)
                            }}
                            className={`stretch-content items-center flex-wrap h-[3.2rem] bg-gray hover:font-bold cursor-pointer rounded-[0.4rem] px-[0.8rem] mb-[0.8rem] ${selected === index ? 'font-bold border-red border-[1px]' : ''}`}
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
