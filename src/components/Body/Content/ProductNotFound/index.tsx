import React from 'react'

const ProductNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16">
            <div className="w-[420px]">
                <img
                    src="https://media3.scdn.vn/img4/2021/08_26/nOqzow56j12TOlZ1FVSo.png"
                    alt=""
                />
            </div>
            <span className="text-base font-bold mt-9">
                Không tìm thấy sản phẩm
            </span>
        </div>
    )
}

export default ProductNotFound
