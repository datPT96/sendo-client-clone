import { ActionContext } from '@/contexts/ActionContext'
import {
    FormControlLabel,
    FormGroup,
    Checkbox,
    Typography,
} from '@mui/material'
import { red } from '@mui/material/colors'
// import { styled } from '@mui/material/styles'
import React, { useState, useEffect, useCallback, useContext, ChangeEvent } from 'react'


interface SideBarSelectType {
    datas: any
    attribute_key: string
}

const IconBox = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="d7ed-SwZDZ2 d7ed-ong_OF"
        >
            <path
                d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                fill="#6F787E"
                fill-rule="nonzero"
            ></path>
        </svg>
    )
}

const IconChecked = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className=""
        >
            <path
                d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM16 8l-5.293 5.293L8.414 11 7 12.414l3.707 3.707 6.707-6.707L16 8z"
                fill="#EE2624"
                fill-rule="nonzero"
            ></path>
        </svg>
    )
}

const PromotionsSelect = ({ datas, attribute_key }: SideBarSelectType) => {
    // console.log(datas)
    // const [open, setOpen] = useState(false)
    // const [checkValue, setCheckValue] = useState({})
    const [checkedItem, setCheckedItem] = useState<string[]>([])

    const { filterByPromo } = useContext(ActionContext)

    // const onCheck = (e: ChangeEvent<HTMLInputElement>) => {
    //     setCheckValue({
    //         ...checkValue,
    //         [attribute_key]: e.target.value ?? null
    //     })
    // }
    // console.log(attribute_key)

    const handleCheck = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            let newCheckedItem: string[] = [...checkedItem]
            let value = e.target.value
            console.log(value)
            if (newCheckedItem.includes(value)) {
                var index = newCheckedItem.indexOf(value)
                if (index > -1) {
                    newCheckedItem.splice(index, 1)
                }
            } else {
                newCheckedItem.push(value)
            }
            setCheckedItem(newCheckedItem)
            // setCheckValue({
            //     ...{
            //         ...checkedItem.map(item => {
            //             return (
            //                 {
            //                     [attribute_key]: Number(item)
            //                 }
            //             )
            //         })
            //     }

            // })
        },
        [checkedItem],
    )
    // const handleClick = () => {
    //     setOpen(!open)
    // }

    // console.log(checkValue)

    useEffect(() => {
        filterByPromo(attribute_key, checkedItem)
    }, [checkedItem])


    return (
        <div className="w-full">
            <FormGroup className="stretch-content">
                {datas.map((item: any, index: number) => {

                    return (
                        <FormControlLabel
                            key={index}
                            control={
                                <Checkbox
                                    value={item?.value}
                                    icon={<IconBox />}
                                    checkedIcon={<IconChecked />}
                                    sx={{
                                        '&.MuiButtonBase-root': {
                                            padding: 0,
                                        },
                                        '& .MuiSvgIcon-root': {
                                            fontSize: '24px',
                                        },
                                        color: '#6f787e',
                                        '&.Mui-checked': {
                                            color: red[600],
                                        },
                                    }}
                                    disableRipple
                                    onChange={handleCheck}
                                />
                            }
                            label={
                                <Typography
                                    variant="caption"
                                    fontSize={14}
                                    noWrap={true}
                                    align="center"
                                    letterSpacing={0}
                                    lineHeight={'1.8rem'}
                                    sx={{
                                        marginLeft: '0.8rem',
                                        '&:hover': {
                                            fontWeight: '700',
                                        },
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            }
                            className="stretch-content select-btn"
                            sx={{
                                '&.MuiFormControlLabel-root': {
                                    margin: 0,
                                },
                                '&:hover': {
                                    backgroundColor: '#f2f3f4',
                                    fontWeight: 'bold',
                                },
                            }}
                        />
                    )
                })}
            </FormGroup>
        </div>
    )
}

export default PromotionsSelect
