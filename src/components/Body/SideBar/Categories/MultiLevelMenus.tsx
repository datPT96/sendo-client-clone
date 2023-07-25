import React, { useState } from 'react'
import ExpandMoreOrLess from '../ExpandMoreOrLess'

interface Categories {
    id: number
    level: number
    name: string
    url_path: string
    is_selected?: boolean
    sub_category?: Categories[]
}

interface MultiLevelMenusType {
    datas: Categories[]
}

interface ListMenuType {
    level: number
    data: Categories
    hasSubCategory?: boolean
    label: string
    index: number
    isSelected?: boolean
}

interface SubCategoryType {
    level: number
    data?: Categories[]
    toggle: boolean
    menuIndex: number
}

const MultiLevelMenus = ({ datas }: MultiLevelMenusType) => {
    const [activeMenu, setActiveMenu] = useState<string[]>(['cate-1-0'])
    const [open, setOpen] = useState(false)

    const handleExpandBtn = (label: string) => {
        let newActiveMenus: string[] = [...activeMenu]
        console.log(label)
        if (newActiveMenus.includes(label)) {
            var index = newActiveMenus.indexOf(label)
            if (index > -1) {
                newActiveMenus.splice(index, 1)
            }
        } else {
            newActiveMenus.push(label)
        }
        console.log(newActiveMenus)
        setActiveMenu(newActiveMenus)
    }

    const onClickExpand = () => {
        setOpen(!open)
    }

    const ListMenu = ({
        level,
        data,
        hasSubCategory,
        label,
        index,
        isSelected,
    }: ListMenuType) => {
        return (
            <li className="cursor-pointer">
                <div
                    className={`stretch-content items-center hover:bg-gray hover:font-bold px-[0.8rem] py-[0.4rem] rounded-[0.4rem]`}
                >
                    <button
                        className={`${
                            hasSubCategory
                                ? 'p-[0.5rem] button-main button-base button-content bg-white hover:bg-gray rounded-[0.4rem]'
                                : 'ml-[2.4rem]'
                        }`}
                        onClick={() => handleExpandBtn(label)}
                    >
                        {hasSubCategory && (
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                className={`w-[1.2rem] h-[1.2rem] ${
                                    activeMenu.includes(label)
                                        ? ''
                                        : 'rotate-180'
                                }`}
                            >
                                <path
                                    fill="#6F787E"
                                    fillRule="nonzero"
                                    d="M12 10.786 6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                                ></path>
                            </svg>
                        )}
                    </button>
                    <span
                        className={`truncate ml-[0.4rem] flex-1 ${
                            hasSubCategory && isSelected ? 'font-bold' : ''
                        } ${
                            !hasSubCategory && isSelected
                                ? 'text-red font-bold'
                                : ''
                        }`}
                    >
                        {data.name}
                    </span>
                </div>
                {hasSubCategory && (
                    <SubCategory
                        level={level}
                        data={data?.sub_category}
                        toggle={activeMenu.includes(label)}
                        menuIndex={index}
                    />
                )}
            </li>
        )
    }

    const SubCategory = ({
        level,
        data,
        toggle,
        menuIndex,
    }: SubCategoryType) => {
        if (!toggle) {
            return null
        }

        level = level + 1
        return (
            <ul className="ml-[1.2rem]">
                {open
                    ? data?.map((menu: Categories, index) => {
                          const labelCategory = `cate-subCate-${level}-${index}-${menuIndex}`
                          return (
                              <ListMenu
                                  key={menu.id}
                                  level={level}
                                  data={menu}
                                  hasSubCategory={menu.sub_category && menu.sub_category?.length > 0}
                                  label={labelCategory}
                                  index={index}
                                  isSelected={menu.is_selected}
                              />
                          )
                      })
                    : data?.map((menu: Categories, index) => {
                          const labelCategory = `cate-subCate-${level}-${index}-${menuIndex}`

                          if (index >= 6) {
                              return null
                          }
                          return (
                              <ListMenu
                                  key={menu.id}
                                  level={level}
                                  data={menu}
                                  hasSubCategory={menu.sub_category && menu.sub_category?.length > 0}
                                  label={labelCategory}
                                  index={index}
                                  isSelected={menu.is_selected}
                              />
                          )
                      })}
            </ul>
        )
    }

    return (
        <div className="max-h-[5000vh] overflow-hidden">
            <ul>
                {datas.map((item, index) => {
                    const level = 1
                    const label = `cate-${level}-${index}`
                    return (
                        <ListMenu
                            key={item.id}
                            level={level}
                            data={item}
                            hasSubCategory={item.sub_category && item.sub_category?.length > 0}
                            label={label}
                            index={index}
                            isSelected={item.is_selected}
                        />
                    )
                })}
            </ul>
            <div className="pl-[1.2rem]">
                <ExpandMoreOrLess isOpen={open} onClick={onClickExpand} />
            </div>
            {/* {open ? (
                <ExpandLess onClick={onClickExpand} />
            ) : (
                
            )} */}
        </div>
    )
}

export default MultiLevelMenus
