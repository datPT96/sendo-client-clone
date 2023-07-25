export const locations = [
    {
        "option_id": 2,
        "option_name": "Hà Nội",
        "search_key": 2
    },
    {
        "option_id": 1,
        "option_name": "Hồ Chí Minh",
        "search_key": 1
    },
    {
        "option_id": 18,
        "option_name": "Đắk Lắk",
        "search_key": 18
    },
    {
        "option_id": 61,
        "option_name": "Bình Dương",
        "search_key": 61
    },
    {
        "option_id": 17,
        "option_name": "Đà Nẵng",
        "search_key": 17
    },
    {
        "option_id": 35,
        "option_name": "Lào Cai",
        "search_key": 35
    },
    {
        "option_id": 33,
        "option_name": "Lâm Đồng",
        "search_key": 33
    },
    {
        "option_id": 40,
        "option_name": "Phú Thọ",
        "search_key": 40
    },
    {
        "option_id": 23,
        "option_name": "Hà Nam",
        "search_key": 23
    },
    {
        "option_id": 15,
        "option_name": "Cần Thơ",
        "search_key": 15
    },
    {
        "option_id": 3,
        "option_name": "Hưng Yên",
        "search_key": 3
    },
    {
        "option_id": 4,
        "option_name": "Kháng Hòa",
        "search_key": 4
    }
]

export const ship_method = [
    {
        "option_name": "Hỏa tốc",
        "search_key": "is_using_instant",
        "value": 1
    },
    {
        "option_name": "Nhanh",
        "search_key": "is_using_in_day",
        "value": 1
    },
    {
        "option_name": "Tiêu chuẩn",
        "search_key": "is_using_standard",
        "value": 1
    }
]

export const shop_types = [
    {
        "option_name": "SenMall",
        "search_key": "is_senmall",
        "value": 2
    },
    {
        "option_name": "Shop+",
        "search_key": "is_shop_plus",
        "value": 1
    },
    {
        "option_name": "Shop tự giao",
        "search_key": "is_self_shipping",
        "value": 1
    },
    {
        "option_name": "Shop uy tín",
        "search_key": "is_certified",
        "value": 1
    }
]

export const discounts = [
    {
        "option_name": "BACK TO SCHOOL",
        "value": 187,
        "label": "BACK TO SCHOOL",
        'search_key': 'is_in_promotion'
    },
    {
        "option_name": "SĂN SALE SHOP+ (01/07-31/07)",
        "value": 183,
        "label": "SĂN SALE SHOP+ (01/07-31/07)",
        'search_key': 'is_in_promotion'
    },
    {
        "option_name": "Flash Sale",
        "value": 1,
        "label": "Flash Sale",
        'search_key': 'in_flash_sale'
    },
    {
        "option_name": "Siêu voucher tháng",
        "value": 1,
        "label": "Siêu voucher tháng",
        'search_key': 'mega_voucher'
    },
    {
        "option_name": "Mua trước trả sau",
        "value": 1,
        "label": "Mua trước trả sau",
        'search_key': 'pay_late'
    },
    {
        "option_name": "Freeship",
        "value": 1,
        "label": "Freeship",
        'search_key': 'free_ship'
    },
    {
        "option_name": "Khuyến mãi",
        "value": 1,
        "label": "Khuyến mãi",
        'search_key': 'promotion_percentage'
    },
    {
        "option_name": "Khuyến mãi app",
        "value": 1,
        "label": "Khuyến mãi app",
        'search_key': 'app_discount_percentage'
    },
    {
        "option_name": "Trả góp 0%",
        "value": 1,
        "label": "Trả góp 0%",
        'search_key': 'pay_late'
    },
]

export const level_price = [
    {
        "gtprice": "-1",
        "ltprice": "90000"
    },
    {
        "gtprice": "90000",
        "ltprice": "550000"
    },
    {
        "gtprice": "550000",
        "ltprice": "1500000"
    },
    {
        "gtprice": "1500000",
        "ltprice": "3000000"
    },
    {
        "gtprice": "3000000",
        "ltprice": "5000000"
    },
    {
        "gtprice": "5000000",
        "ltprice": "-1"
    }
]

export const level_ratting = [
    {
        "option_name": "5 sao",
        "gte_rating_percent": "5",
        "lte_rating_percent": ""
    },
    {
        "option_name": "4-5 sao",
        "gte_rating_percent": "4",
        "lte_rating_percent": "5"
    },
    {
        "option_name": "3-5 sao",
        "gte_rating_percent": "3",
        "lte_rating_percent": "5"
    }
]

export const other_filter = [
    {
        "option_name": "Có video",
        "search_key": "is_video",
        "icon": "icon",
        "value": 1
    }
]