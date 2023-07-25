import React from 'react'
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
} from '@mui/material'
import LinearProgress, {
    linearProgressClasses,
} from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'
import { Product } from '@/reducers/ProductReducer'

interface ProductCardProp {
    product: Product
}

const CardWrapper = styled(Card)({
    borderRadius: '8px',
    transition: 'none',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,.12), 0 -2px 2px 0 rgba(0,0,0,.04)',
    '&:hover': {
        boxShadow: '0 8px 16px 0 rgba(0,0,0,.12), 0 -4px 8px 0 rgba(0,0,0,.04)',
    },
})

const Contents = styled(CardContent)({
    position: 'relative',
    padding: '16px 8px 0 8px',
    '&:last-child': {
        padding: 0,
    },
})

const Footers = styled(CardActions)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '11px',
    marginTop: '4px',
    padding: '0 8px 8px',
}))

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: '1.4rem',
    borderRadius: '8px',
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#f47c7b',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: '8px',
        backgroundColor: '#d52220',
    },
}))

const ProductCard = ({ product }: ProductCardProp) => {
    let percent = 0
    let progressbar = false
    if (product?.quantity && product?.remaining) {
        progressbar = true
        percent =
            (product?.quantity - product?.remaining * 100) /
            product?.quantity
    }
    return (
        <CardWrapper>
            <CardMedia component={'img'} image={product?.thumbnail_url} />
            <Contents>
                <div className="flex w-full absolute top-0 left-0 translate-y-[-50%]">
                    {/* {product?.event_banners?.map((img, index) => {
                        return (
                            <img
                                key={index}
                                src={img?.image}
                                alt=""
                                className="max-w-[48%] h-[1.6rem]"
                            />
                        )
                    })} */}
                    <img
                        src={product?.event_banners}
                        alt=""
                        className="max-w-[48%] h-[1.6rem]"
                    />
                </div>
                <span className="text-base mb-[0.4rem] h-[3.6rem] block overflow-text">
                    {product?.shop_badge_urls?.map((item, index) => {
                        return (
                            <img
                                key={index}
                                src={item.icon_url}
                                alt=""
                                className="h-[1.2rem] mr-[0.4rem] inline-block"
                            />
                        )
                    })}
                    {product?.name}
                </span>
                <div className="flex flex-col items-stretch w-full">
                    <div className="flex items-baseline w-full">
                        <span className="price-discout">
                            {product?.original_price}
                        </span>
                        <span className="ml-[0.4rem] discount-percent">
                            {product?.promotion_percentage &&
                                `-${product?.promotion_percentage}%`}
                        </span>
                    </div>
                    <span className="final-price overflow-text">
                        {product?.price_range}
                    </span>
                </div>
                <div className="flex w-full pt-[1px] pb-[3px]">
                    <div className="paylate">
                        <img
                            src={product?.promotion_sub_message?.icon}
                            alt=""
                            className="h-[1.2rem]"
                        />
                        <span>
                            {product?.promotion_sub_message?.text}
                        </span>
                    </div>
                </div>
                {
                    <Box
                        className={`${progressbar ? 'visible' : 'invisible'}`}
                        sx={{ position: 'relative' }}
                    >
                        <BorderLinearProgress
                            variant="determinate"
                            value={percent}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0.1,
                                left: '50%',
                                transform: 'translateX(-50%)',
                            }}
                        >
                            <Typography
                                zIndex={1}
                                color={'#fff'}
                                fontSize={'11px'}
                            >
                                Mở bán
                            </Typography>
                        </Box>
                    </Box>
                }
            </Contents>
            <Footers>
                <div>
                    {product?.rating_percent && (
                        <span className="final-rating after:text-[#ffc600] after:content-['★'] after:leading-[1.1rem] after:tracking-normal">
                            {`${product?.rating_percent}/5`}
                        </span>
                    )}
                </div>
                <div>
                    <span className="final-rating">
                        {product?.shop_warehouse_city}
                    </span>
                </div>
            </Footers>
        </CardWrapper>
    )
}

export default React.memo(ProductCard)
