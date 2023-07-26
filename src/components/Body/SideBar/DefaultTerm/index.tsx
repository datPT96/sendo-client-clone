import React, {
    useState,
    ChangeEvent,
    useCallback,
    useContext,
    useEffect,
} from 'react'
import SideBarSelect from '../SideBarSelect'
import { Action, ActionContext } from '@/contexts/ActionContext'

interface Attribute_Data {
    _id: string
    attribute_term: string
    attribute_name: string
    attribute_key: string
    attribute_value: []
}

interface DefaultProp {
    data: Attribute_Data | undefined
    attribute_key: string
}

const DefaultTerm = ({ data, attribute_key }: DefaultProp) => {
    const [open, setOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open)
    }

    const { actions, addAction } = useContext(ActionContext)

    const [checkedItem, setCheckedItem] = useState<string[]>([])

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
            console.log(newCheckedItem)
            setCheckedItem(newCheckedItem)
        },
        [checkedItem],
    )

    useEffect(() => {
        addAction(attribute_key, undefined, undefined, undefined, checkedItem)
    }, [checkedItem])

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
            {open && <SideBarSelect datas={data?.attribute_value} onClick={handleCheck} />}
        </div>
    )
}

export default DefaultTerm
