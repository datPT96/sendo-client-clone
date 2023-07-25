import { Breadcrumbs, Link } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'

const BreadcrumbsNav = styled(Breadcrumbs)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    height: '32px',
    color: '#6f787e',
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: '1.8rem',
}))

const BreadcrumbItem = styled(Link)({
    fontFamily: 'Roboto,sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: '1.8rem',
})

const BreadcrumbSeparator = () => {
    return <span className="text-[11px]">/</span>
}

const Breadcrumb = () => {
    return (
        <div className="py-[1.6rem]">
            <BreadcrumbsNav
                aria-label="breadcrumb"
                separator={<BreadcrumbSeparator />}
            >
                <BreadcrumbItem underline="none" color={'#0f62fe'}>
                    Sendo.vn
                </BreadcrumbItem>
                <BreadcrumbItem underline="none" color={'#0f62fe'} href="/">
                    Nhà Cửa
                </BreadcrumbItem>
                <BreadcrumbItem underline="none" color={'#0f62fe'} href="/">
                    Nội thất phòng làm việc
                </BreadcrumbItem>
                <BreadcrumbItem underline="none" color={'#6f787e'}>
                    Ghế văn phòng
                </BreadcrumbItem>
            </BreadcrumbsNav>
            <div className="stretch-content items-center min-h-[2.4rem]">
                <span className="text-[2rem] font-bold tracking-[0.015rem]">
                    Ghế văn phòng
                </span>
                <span className="text-base ml-[0.8rem]">
                    Tìm thấy hơn 10.000 sản phẩm
                </span>
            </div>
        </div>
    )
}

export default Breadcrumb
