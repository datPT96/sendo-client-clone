import React, { ReactNode, createContext, useReducer } from 'react'

import { ProductState, filterReducer } from '@/reducers/ProductReducer'
import { data as productsData } from '@/data/products'
import { FilterActionType } from '@/reducers/type'
import { Action } from './ActionContext'
import productsApi from '@/api/productsApi'

interface ProductContextProps {
    children: ReactNode
}

interface ProductContextDefault {
    products: ProductState
    filterProduct: (action: Action) => Promise<void>
    findProduct: (key: string) => void
    // filterByStar: (key: string) => void
    // filterByPrice: (min?: string | number, max?: string | number) => void
}

const {
    GET_FILTER_PRODUCT,
    GET_SEARCHED_PRODUCT,
    GET_PRODUCT_STAR,
    GET_PRODUCT_PRICE,
} = FilterActionType

const productsDefault: ProductState = []

export const ProductContext = createContext<ProductContextDefault>({
    products: productsDefault,
    filterProduct: () => Promise.resolve(void 0),
    findProduct: () => { },
    // filterByStar: () => {},
    // filterByPrice: () => {},
})

const ProductContextProvider = ({ children }: ProductContextProps) => {
    const [products, dispatch] = useReducer(filterReducer, productsDefault)

    const findProduct = (key: string) => {
        // let productFind = productsApi.findByName(key)
        // console.log(productFind)
        // console.log(key)
        return key
        // dispatch({
        //     type: GET_SEARCHED_PRODUCT,
        //     payload: [...productFind?.data],
        // })
    }

    // const filterByPrice = (min?: string | number, max?: string | number) => {
    //     let productList: ProductState = []

    //     productList = productsData.filter((product) => {
    //         if (min && max === '' && product.item?.final_price) {
    //             console.log(min)
    //             return product.item?.final_price <= Number(min)
    //         }
    //         if (min === '' && max && product.item?.max_final_price) {
    //             console.log(max)
    //             return product.item?.max_final_price > Number(max)
    //         }
    //         return (
    //             product.item?.final_price &&
    //             product.item?.max_final_price &&
    //             product.item.final_price >= Number(min) &&
    //             product.item?.max_final_price <= Number(max)
    //         )
    //     })

    //     console.log(productList)
    //     dispatch({
    //         type: GET_PRODUCT_PRICE,
    //         payload: [...productList],
    //     })
    // }

    // const filterByStar = (key: string) => {
    //     let productsStar: ProductState = []
    //     switch (key) {
    //         case '5':
    //             productsStar = productsData.filter(
    //                 (product) => product.item?.rating_percent === 5,
    //             )
    //             break
    //         case '4':
    //             productsStar = productsData.filter((product) => {
    //                 return (
    //                     product.item?.rating_percent &&
    //                     product.item?.rating_percent >= 4
    //                 )
    //             })
    //             break
    //         case '3':
    //             productsStar = productsData.filter((product) => {
    //                 return (
    //                     product.item?.rating_percent &&
    //                     product.item?.rating_percent >= 3
    //                 )
    //             })
    //             break
    //         default:
    //             break
    //     }

    //     dispatch({
    //         type: GET_PRODUCT_STAR,
    //         payload: [...productsStar],
    //     })
    // }

    const filterProduct = async (actions: Action) => {
        const res = await productsApi.filterByCondition()
        let productList = [...res?.data]

        // let searchKey = actions.name
        // let locations = actions.location
        // if (searchKey) {
        //     const filter = await productsApi.filterByCondition(searchKey)
        //     productList = [...filter?.data]
        // }

        // if (locations && locations.length > 0) {
        //     const stringParams = locations.join(',')
        //     console.log(stringParams)
        //     // const filtered = await productsApi.filterByCondition(searchKey, stringParams)
        //     // if (filtered) {
        //     //     productList = [...filtered.data]
        //     // }
        // }

        // if (actions.shipMethods.length > 0) {
        //     let filtered: ProductState = []
        //     let tempList = []
        //     actions.shipMethods.forEach((item) => {
        //         tempList = productList.filter((product) => {
        //             return product.item?.ship_method?.includes(item)
        //         })
        //         filtered = [...filtered, ...tempList]
        //     })
        //     productList = [...filtered]
        // }

        // if (actions.shopTypes.length > 0) {
        //     let filterd: ProductState = []
        //     let tempList = []
        //     actions.shopTypes.forEach((item) => {
        //         switch (item) {
        //             case 'is_senmall':
        //                 tempList = productList.filter(
        //                     (product) => product.item?.is_senmall === true,
        //                 )
        //                 filterd = [...filterd, ...tempList]
        //                 break
        //             case 'is_shop_plus':
        //                 tempList = productList.filter(
        //                     (product) => product.item?.is_shop_plus === true,
        //                 )
        //                 filterd = [...filterd, ...tempList]
        //                 break
        //             case 'is_self_shipping':
        //                 tempList = productList.filter(
        //                     (product) =>
        //                         product.item?.is_self_shipping === true,
        //                 )
        //                 filterd = [...filterd, ...tempList]
        //                 break
        //             case 'is_certified':
        //                 tempList = productList.filter(
        //                     (product) => product.item?.is_certified === true,
        //                 )
        //                 filterd = [...filterd, ...tempList]
        //                 break
        //             default:
        //                 break
        //         }
        //     })
        //     productList = [...filterd]
        // }

        // if (actions.other.length > 0) {
        //     let filterd: ProductState = []
        //     let tempList = []
        //     actions.other.forEach((item) => {
        //         tempList = productList.filter(
        //             (product) => product.item?.has_video === true,
        //         )
        //         filterd = [...filterd, ...tempList]
        //     })
        //     productList = [...filterd]
        // }

        // if (actions.promo.length > 0) {
        //     let filterd: ProductState = []
        //     let tempList = []
        //     actions.promo.forEach((item) => {
        //         switch (item) {
        //             case 'in_promo':
        //                 tempList = productList.filter(
        //                     (product) =>
        //                         product?.item?.is_in_promotion === true,
        //                 )
        //                 filterd = [...filterd, ...tempList]
        //                 break
        //             case 'in_flash_sale':
        //                 tempList = productList.filter(
        //                     (product) => product.item?.in_flash_sale === true,
        //                 )
        //                 filterd = [...filterd, ...tempList]
        //                 break
        //             case 'free_ship':
        //                 tempList = productList.filter(
        //                     (product) =>
        //                         product.item?.is_shipping_supported === true,
        //                 )
        //                 filterd = [...filterd, ...tempList]
        //                 break
        //             case 'pay_late':
        //                 tempList = productList.filter(
        //                     (product) =>
        //                         product.item?.promotion_sub_message?.type ===
        //                         'pay_later',
        //                 )
        //                 filterd = [...filterd, ...tempList]
        //                 break
        //             case 'promotion_percentage':
        //                 tempList = productList.filter(
        //                     (product) => product.item?.promotion_percentage,
        //                 )
        //                 filterd = [...filterd, ...tempList]
        //                 break
        //             case 'app_discount_percentage':
        //                 tempList = productList.filter(
        //                     (product) => product.item?.app_discount_percentage,
        //                 )
        //                 filterd = [...filterd, ...tempList]
        //                 break
        //             default:
        //                 break
        //         }
        //         productList = [...filterd]
        //     })
        // }

        // productList = [...filteredProducts]
        // console.log('filteredProducts', productList)

        dispatch({
            type: GET_FILTER_PRODUCT,
            payload: [...productList],
        })
    }

    const productsContextData = {
        products,
        filterProduct,
        findProduct,
        // filterByStar,
        // filterByPrice,
    }

    return (
        <ProductContext.Provider value={productsContextData}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
