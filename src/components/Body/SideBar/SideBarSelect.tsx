import ActionContextProvider, { ActionContext } from '@/contexts/ActionContext'
import { Discounts, Locations, ShippingMethod, otherFilter } from '@/data/type'
import {
    FormControlLabel,
    FormGroup,
    Checkbox,
    Typography,
} from '@mui/material'
import { red } from '@mui/material/colors'
// import { styled } from '@mui/material/styles'
import React, { useState, ChangeEvent } from 'react'
import ExpandMoreOrLess from './ExpandMoreOrLess'


interface SideBarSelectType {
    datas: any
    onClick: (e: ChangeEvent<HTMLInputElement>) => void
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

const SideBarSelect = ({ datas, onClick }: SideBarSelectType) => {
    const [open, setOpen] = useState(false)

    const onCheck = onClick
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className="w-full mt-[0.8rem]">
            <FormGroup className="stretch-content">
                {!open
                    ? datas?.map((item: any, index: number) => {
                        if (index > 3) {
                            return null
                        }
                        return (
                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox
                                        value={item?.search_key ? item?.search_key : item?.option_id}
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
                                        onChange={onCheck}
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
                                        {item.option_name}
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
                    })
                    : datas?.map((item: any, index: number) => {
                        return (
                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox
                                        value={item?.search_key ? item?.search_key : item?.option_id}
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
                                        onChange={onCheck}
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
                                        {item.option_name}
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
                {datas?.length > 4 && (
                    <ExpandMoreOrLess isOpen={open} onClick={handleClick} />
                )}
            </FormGroup>
        </div>
    )
}

export default SideBarSelect
