
import { ActionContext } from '@/contexts/ActionContext'
import React, { useState, useContext, useCallback, useEffect, useRef } from 'react'

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

const IconSelected = () => {
    return (
        <span >
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="d7ed-Jr5mDx">
                <path fill="#ee2624" fillRule="nonzero" d="M9.707 14.293 19 5l1.414 1.414L9.707 17.121 4 11.414 5.414 10z"></path>
            </svg>
        </span>
    )
}

const SortProduct = () => {
    const [option, setOption] = useState('Đề cử')
    const [expand, setExpand] = useState(false)
    const [selected, setSelected] = useState<string>('de-cu')

    const selectItem = useRef<HTMLDivElement>(null)

    const { sortFilter } = useContext(ActionContext)

    const onSelectChange = useCallback(
        (e: string, q: string) => {
            setOption(e)
            setSelected(q)
            sortFilter(q)
        }, [sortFilter, setOption, setSelected]
    )

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // nếu element click không nằm trong divSelectSortType thì setShow(false)
            if (
                selectItem.current &&
                !selectItem.current.contains(event.target as Node)
            ) {
                setExpand(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <div className="stretch-content items-center">
            <span className="mr-[0.8rem] tracking-normal leading-[1.8rem]">
                Sắp xếp theo:
            </span>
            <div className="srceen-basis-2 w-full relative">
                <div
                    ref={selectItem}
                    className={`min-h-[3.2rem] input-base text-[#3f4b53] border-[#cfd2d4] bg-[#fff] ${expand ? 'border-blue border-1 shadow-[0_0_0_1px_#3f81fe]' : ''}`}
                    onClick={() => { setExpand(!expand) }}
                >
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
                {expand && <div className='absolute top-[4.3rem] left-0 rounded-[0.4rem] bg-white w-full shadow-[0_-4px_16px_0_rgba(0,0,0,.1),_0_8px_16px_0_rgba(0,0,0,.1)]'>
                    <ul className='p-[0.8rem] stretch-content flex-col flex-wrap justify-center'>
                        {selectType.map(select => {
                            return (
                                <li
                                    key={select.value}
                                    className={`flex items-center justify-between px-[1.2rem] py-[0.4rem] rounded-[0.4rem] hover:bg-gray cursor-pointer ${selected === select.value ? 'font-bold' : ''}`}
                                    onClick={() => { onSelectChange(select.label, select.value) }}
                                >
                                    <span className={`stretch-content items-center flex-1 ${selected !== select.value ? 'leading-[2.4rem]' : ''}`}>{select.label}</span>{selected === select.value ? <IconSelected /> : ''}
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>}
            </div>
        </div>
    )
}

export default SortProduct
