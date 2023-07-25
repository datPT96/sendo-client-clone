import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import React, { useState, useContext, MouseEvent, useEffect } from 'react'

import { LevelRatting } from '@/data/type'
import { ProductContext } from '@/contexts/ProductContext'

interface RattingProps {
    datas: LevelRatting[] | undefined
}

const RattingRangeList = ({ datas }: RattingProps) => {
    const [open, setOpen] = useState(false)
    const [key, setKey] = useState<string>('')

    // const { filterByStar } = useContext(ProductContext)

    const hanldeClick = () => {
        setOpen(!open)
    }

    console.log(key)
    const onClick = (e: MouseEvent<HTMLSpanElement>) => {
        setKey(e.currentTarget.title)
    }

    useEffect(() => {
        // filterByStar(key)
    }, [key])

    return (
        <div className="stretch-content flex-wrap flex-col pt-[0.4rem]">
            {!open
                ? datas?.map((item, index) => {
                      if (index > 3) {
                          return null
                      }
                      return (
                          <span
                              key={index}
                              onClick={onClick}
                              title={`${
                                  item.gte_rating_percent !== ''
                                      ? item.gte_rating_percent
                                      : item.lte_rating_percent !== ''
                                      ? item.lte_rating_percent
                                      : ''
                              }`}
                              className="stretch-content items-center flex-wrap h-[3.2rem] bg-gray hover:font-bold cursor-pointer rounded-[0.4rem] px-[0.8rem] mb-[0.8rem]"
                          >
                              {item.option_name}
                          </span>
                      )
                  })
                : datas?.map((item, index) => {
                      return (
                          <span
                              key={index}
                              className="stretch-content items-center flex-wrap h-[3.2rem] bg-gray hover:font-bold cursor-pointer rounded-[0.4rem] px-[0.8rem] mb-[0.8rem]"
                              onClick={onClick}
                          >
                              {item.option_name}
                          </span>
                      )
                  })}
            {datas && (datas.length > 3 && (
                <Button
                    onClick={hanldeClick}
                    sx={{
                        alignSelf: 'center',
                        width: 'fit-content',
                        fontWeight: 700,
                        fontSize: 12,
                        color: 'black',
                        '&:hover': { backgroundColor: '#f2f3f4' },
                    }}
                >
                    {!open ? (
                        <span>
                            <AddIcon /> Xem them
                        </span>
                    ) : (
                        <span>
                            <RemoveIcon /> Thu gon
                        </span>
                    )}
                </Button>
            ))}
        </div>
    )
}

export default RattingRangeList
