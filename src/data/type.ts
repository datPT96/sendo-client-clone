export interface CategoryInfo {
    id?: number
    level?: number
    name?: string
    url_path?: string
    sub_category?: CategoryInfo[]
}

export interface Locations {
    option_id?: number
    option_name?: string
}

export interface ShippingMethod {
    option_name?: string
    search_key?: string
    value?: number
}

export interface ShopTypes {
    option_name?: string
    search_key?: string
    value?: number
}

export interface Discounts {
    option_name?: string;
    value?: number;
    label?: string;
}

export interface LevelPrice {
    gtprice?: number | string;
    ltprice?: number | string;
}

export interface LevelRatting {
    option_name?: string;
    gte_rating_percent?: string;
    lte_rating_percent?: string;
}

export interface otherFilter {
    option_name?: string;
    search_key?: string;
    icon?: string;
    value?: number;
}