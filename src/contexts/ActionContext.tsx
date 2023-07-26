import React, { ReactNode, createContext, useState } from 'react'

interface ActionContextProp {
    children: ReactNode
}

export interface Action {
    name?: string | null,
    shop_warehouse_city_id?: string | null,
    is_using_instant?: boolean | null,
    is_using_in_day?: boolean | null,
    is_using_standard?: boolean | null,
    is_senmall?: boolean | null,
    is_shipping_support?: boolean | null,
    is_shop_certificated?: boolean | null,
    is_shop_plus?: boolean | null,
    final_price?: number | null,
    max_final_price?: number | null,
    rating_percent?: number | null,
    has_video?: boolean | null
}

interface ActionContextDefault {
    actions: Action
    addAction: (type?: string, key?: string, gtprice?: number, ltprice?: number, checkedItem?: string[]) => void
    filterStar: (rating_percent: number) => void
}

const actionContextDefault = {
    actions: {
        name: '',
        shop_warehouse_city_id: null,
        is_using_instant: null,
        is_using_in_day: null,
        is_using_standard: null,
        is_shop_plus: null,
        is_senmall: null,
        is_shipping_support: null,
        is_shop_certificated: null,
        final_price: null,
        max_final_price: null,
        rating_percent: null,
        has_video: null
    },
    addAction: () => { },
    filterStar: () => { }
}

const ActionContext = createContext<ActionContextDefault>(actionContextDefault)

const ActionContextProvider = ({ children }: ActionContextProp) => {
    const [actions, setAction] = useState<Action>(actionContextDefault.actions)

    const addAction = (type?: string, key?: string, gtprice?: number, ltprice?: number, checkedItem?: string[]) => {
        switch (type) {
            case 'search_key':
                setAction({ ...actions, name: key ?? '' })
                break
            case 'location':
                setAction({ ...actions, shop_warehouse_city_id: checkedItem?.join(',') || null })
                break
            case 'shopTypes':
                setAction({
                    ...actions,
                    is_senmall: checkedItem?.some(item => item === 'is_senmall') || null,
                    is_shop_plus: checkedItem?.some(item => item === 'is_shop_plus') || null,
                    is_shipping_support: checkedItem?.some(item => item === 'is_shipping_support') || null,
                    is_shop_certificated: checkedItem?.some(item => item === 'is_shop_certificated') || null
                })
                break
            case 'shipMethods':
                setAction({
                    ...actions,
                    is_using_in_day: checkedItem?.some(item => item === 'is_using_in_day') || null,
                    is_using_instant: checkedItem?.some(item => item === 'is_using_instant') || null,
                    is_using_standard: checkedItem?.some(item => item === 'is_using_standard') || null,
                })
                break
            case 'levelPrice':
                setAction({
                    ...actions,
                    final_price: ltprice || null,
                    max_final_price: gtprice || null
                })
                break
            // case 'promo':
            //     setAction({ ...actions, promo: checkedItem as string[] })
            //     break
            case 'other':
                setAction({ ...actions, has_video: checkedItem?.some(item => item === 'has_video') || null })
                break
            default:
                break
        }
    }

    const filterStar = () => {

    }

    const actionContextValue = {
        actions,
        addAction,
        filterStar
    }

    return (
        <ActionContext.Provider value={actionContextValue}>
            {children}
        </ActionContext.Provider>
    )
}

export { ActionContext }
export default ActionContextProvider
