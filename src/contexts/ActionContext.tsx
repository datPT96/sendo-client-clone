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
    has_video?: boolean | null,
    is_combo_discount?: string | null,
    is_shipping_discount?: string | null,
    is_promotion?: string | null,
    is_installment?: string | null,
    is_pay_later?: string | null,
    promotion_app?: string | null,
    is_quantity_discount?: string | null,
    is_mega_voucher?: string | null,
    is_flash_sale?: string | null,
    campaign_id?: string | null,
    sort?: string | null
}

interface ActionContextDefault {
    actions: Action
    filterDefault: (type?: string, checkedItem?: string[]) => void
    searchName: (searchKey?: string) => void
    filterStar: (rating_percent: number) => void
    filterLevelPrice: (gtprice?: number, ltprice?: number) => void
    filterByPromo: (type?: string, checkedItem?: string[]) => void
    sortFilter: (key?: string) => void
}

const actionContextDefault = {
    actions: {
        name: null,
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
        has_video: null,
        is_combo_discount: null,
        is_shipping_discount: null,
        is_promotion: null,
        is_installment: null,
        is_pay_later: null,
        promotion_app: null,
        is_quantity_discount: null,
        is_mega_voucher: null,
        is_flash_sale: null,
        campaign_id: null,
        sort: null
    },
    filterDefault: () => { },
    searchName: () => { },
    filterStar: () => { },
    filterLevelPrice: () => { },
    filterByPromo: () => { },
    sortFilter: () => { }
}

const ActionContext = createContext<ActionContextDefault>(actionContextDefault)

const ActionContextProvider = ({ children }: ActionContextProp) => {
    const [actions, setAction] = useState<Action>(actionContextDefault.actions)

    const filterDefault = (type?: string, checkedItem?: string[]) => {
        switch (type) {
            // case 'search_key':
            //     setAction({ ...actions, name: key ?? '' })
            //     break
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

    const searchName = (searchKey?: string) => {
        setAction({
            ...actions,
            name: searchKey || null
        })
    }

    const filterLevelPrice = (gtprice?: number, ltprice?: number) => {
        setAction({
            ...actions,
            final_price: ltprice || null,
            max_final_price: gtprice || null
        })
    }

    const filterStar = (rating?: number) => {
        setAction({
            ...actions, rating_percent: rating || null
        })
    }

    const filterByPromo = (type?: string, checkedItem?: string[]) => {
        switch (type) {
            case 'campaign_id':
                setAction({
                    ...actions,
                    campaign_id: checkedItem?.join(',') || null
                })
                break
            case 'is_flash_sale':
                setAction({
                    ...actions,
                    is_flash_sale: checkedItem?.join(',') || null
                })
                break

            case 'is_mega_voucher':
                setAction({
                    ...actions,
                    is_mega_voucher: checkedItem?.join(',') || null
                })
                break
            case 'is_pay_later':
                setAction({
                    ...actions,
                    is_pay_later: checkedItem?.join(',') || null
                })
                break
            case 'is_combo_discount':
                setAction({
                    ...actions,
                    is_combo_discount: checkedItem?.join(',') || null
                })
                break
            case 'is_quantity_discount':
                setAction({
                    ...actions,
                    is_quantity_discount: checkedItem?.join(',') || null
                })
                break
            case 'is_shipping_discount':
                setAction({
                    ...actions,
                    is_shipping_discount: checkedItem?.join(',') || null
                })
                break
            case 'is_promotion':
                setAction({
                    ...actions,
                    is_promotion: checkedItem?.join(',') || null
                })
                break
            case 'promotion_app':
                setAction({
                    ...actions,
                    promotion_app: checkedItem?.join(',') || null
                })
                break
            case 'is_installment':
                setAction({
                    ...actions,
                    is_installment: checkedItem?.join(',') || null
                })
                break
            default: break
        }
    }

    const sortFilter = (key?: string) => {
        setAction({
            ...actions,
            sort: key || null
        })
    }

    const actionContextValue = {
        actions,
        searchName,
        filterDefault,
        filterStar,
        filterLevelPrice,
        filterByPromo,
        sortFilter
    }

    return (
        <ActionContext.Provider value={actionContextValue}>
            {children}
        </ActionContext.Provider>
    )
}

export { ActionContext }
export default ActionContextProvider
