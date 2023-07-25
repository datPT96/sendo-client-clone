import React, { useState } from 'react'

const TopNavbar = () => {
    const [qrShow, setQrShow] = useState(false)

    const doShowCode = () => {
        setQrShow(!qrShow)
    }
    return (
        <ul className="navbar-top container px-[24px] ">
            <li className="list-item relative mr-[2.4rem]">
                <span className="list-btn topnav-link" onClick={doShowCode}>
                    Tải ứng dụng
                </span>
                {qrShow && (
                    <div className="qr-code flex flex-col items-center bg-white p-[8px] rounded-md fixed top-10 z-40">
                        <img
                            src="https://media3.scdn.vn/img2/2018/5_23/R842FO.png"
                            alt="qr-code"
                        />
                        <span>Quét để tải ứng dụng</span>
                    </div>
                )}
            </li>
            <li className="list-item relative mr-[2.4rem]">
                <span className="list-btn topnav-link">
                    Chăm sóc khách hàng
                </span>
                {/* <div className="bg-white absolute top-10">
                            <div>Trung tâm hỗ trợ</div>
                            <div>Trả hàng hoàn tiền</div>
                        </div> */}
            </li>
            <li className="list-item mr-[2.4rem]">
                <span className="list-btn topnav-link">Kiểm tra đơn hàng</span>
            </li>
        </ul>
    )
}

export default TopNavbar
