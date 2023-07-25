import {
    Box,
    ListItemIcon,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CheckIcon from '@mui/icons-material/Check'
import React, { useState } from 'react'

const selectType = [
    {
        label: 'Đề cử',
        value: 'de-cu',
    },
    {
        label: 'Bán chạy',
        value: 'ban-chay',
    },
    {
        label: 'Khuyến mãi',
        value: 'khuyen-mai',
    },
    {
        label: 'Đánh giá tốt',
        value: 'danh-gia-tot',
    },
]

const Options = styled(MenuItem)(({ theme }) => ({
    justifyContent: 'space-between',
    fontSize: 14,
    '& .MuiSvgIcon-root': {
        color: '#ee2624',
        marginRight: theme.spacing(0),
        fontSize: 24,
    },
}))

const SortProduct = () => {
    const [option, setOption] = useState('Đề cử')

    const onSelectChange = (e: SelectChangeEvent) => {
        setOption(e.target.value as string)
    }

    return (
        <div className="stretch-content items-center">
            <span className="mr-[0.8rem] tracking-normal leading-[1.8rem]">
                Sắp xếp theo:
            </span>
            <div className="srceen-basis-2 w-full">
                <div className="min-h-[3.2rem] input-base text-[#3f4b53] border-[#cfd2d4] bg-[#fff]">
                    <div className="flex w-full">
                        <div className="w-full leading-[1.29] pl-[.8rem] py-[.8rem]">
                            <span className="w-full cursor-pointer leading-[1.6rem]">
                                {option}
                            </span>
                        </div>
                        <input type="hidden" value={option} />
                    </div>
                    <div className="flex items-center px-[0.8rem]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            className="w-[1.6rem] h-[1.6rem]"
                        >
                            <path
                                fill="#6F787E"
                                fill-rule="nonzero"
                                d="M12 13.214 17.524 8 19 9.393 12 16 5 9.393 6.476 8z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SortProduct
