import { Link } from 'react-router-dom'
import TopSearch from './TopSearch'

function Footer() {
    return (
        <footer>
            <section className="lg:container px-[24px]">
                <div className="grid grid-cols-2 lg:grid-cols-4 p-[16px]">
                    <Link
                        to={''}
                        className="flex flex-col items-center leading-[1.6rem] py-[8px]"
                    >
                        <div className="w-[130px] h-[88px] mb-[12px]">
                            <img
                                src="https://media3.scdn.vn/img4/2020/12_16/gJwXr6FFZKZCGKWaz4RB.png"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center w-[210px]">
                            <span className="font-bold text-sm mb-[4px]">
                                Siêu nhiều hàng tốt
                            </span>
                            <span className="text-sm text-center text-[#6f787e]">
                                Cần gì cũng có 26 ngành hàng & 10 triệu sản phẩm
                            </span>
                        </div>
                    </Link>
                    <Link
                        to={''}
                        className="flex flex-col items-center leading-[1.6rem] py-[8px]"
                    >
                        <div className="w-[130px] h-[88px] mb-[12px]">
                            <img
                                src="https://media3.scdn.vn/img4/2020/12_16/EfZWQVfV6nQzu2vMmnwC.png"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center w-[210px]">
                            <span className="font-bold text-sm mb-[4px]">
                                Siêu yên tâm
                            </span>
                            <span className="text-sm text-center text-[#6f787e]">
                                Miễn phí đổi trả 48h
                            </span>
                        </div>
                    </Link>
                    <Link
                        to={''}
                        className="flex flex-col items-center leading-[1.6rem] py-[8px]"
                    >
                        <div className="w-[130px] h-[88px] mb-[12px]">
                            <img
                                src="https://media3.scdn.vn/img4/2020/12_16/j5C6IQz7gIXPgjFJxmRz.png"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center w-[210px]">
                            <span className="font-bold text-sm mb-[4px]">
                                Siêu tiện lợi
                            </span>
                            <span className="text-sm text-center text-[#6f787e]">
                                Mang thế giới mua sắm của Sendo trong tầm tay
                                bạn
                            </span>
                        </div>
                    </Link>
                    <Link
                        to={''}
                        className="flex flex-col items-center leading-[1.6rem] py-[8px]"
                    >
                        <div className="w-[130px] h-[88px] mb-[12px]">
                            <img
                                src="https://media3.scdn.vn/img4/2020/12_16/7AJFQGQ5qvS7gGOz8P7a.png"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center w-[210px]">
                            <span className="font-bold text-sm mb-[4px]">
                                Siêu tiết kiệm
                            </span>
                            <span className="text-sm text-center text-[#6f787e]">
                                Giá hợp lý, vừa túi tiền. Luôn có nhiều chương
                                trình khuyến mãi
                            </span>
                        </div>
                    </Link>
                </div>
            </section>
            <section className="py-[2.4rem] bg-gray">
                <div className="sm:container flex items-start text-sm leading-[1.6rem] px-[24px]">
                    <ul className="stretch-content middle-footer">
                        <li className="font-bold mb-[1.2rem]">
                            <span>VỀ CHÚNG TÔI</span>
                        </li>
                        <li className="mb-[0.8rem]">
                            <Link to={''} className="text-sm leading-[1.6rem]">
                                Giới thiệu Sendo.vn
                            </Link>
                        </li>
                        <li className="mb-[0.8rem]">
                            <Link to={''}>Giới thiệu SenMall</Link>
                        </li>
                        <li className="mb-[0.8rem]">
                            <Link to={''}>Quy chế hoạt động</Link>
                        </li>
                        <li className="mb-[0.8rem]">
                            <Link to={''}>Chính sách bảo mật</Link>
                        </li>
                        <li className="mb-[0.8rem]">
                            <Link to={''}>Giao hàng và Nhận hàng</Link>
                        </li>
                    </ul>
                    <ul className="stretch-content middle-footer">
                        <li className="font-bold mb-[1.2rem]">
                            <span>DÀNH CHO NGƯỜI MUA</span>
                        </li>
                        <li className="mb-[0.8rem]">
                            <Link to={''}>Giải quyết khiếu nại</Link>
                        </li>
                        <li className="mb-[0.8rem]">
                            <Link to={''}>Hướng dẫn mua hàng</Link>
                        </li>
                        <li className="mb-[0.8rem]">
                            <Link to={''}>Chính sách đổi trả</Link>
                        </li>
                        <li className="mb-[0.8rem]">
                            <Link to={''}>Chăm sóc khách hàng</Link>
                        </li>
                        <li className="mb-[0.8rem]">
                            <Link to={''}>Nạp tiền điện thoại</Link>
                        </li>
                    </ul>
                    <ul className="stretch-content middle-footer">
                        <li className="font-bold mb-[1.2rem]">
                            <span>DÀNH CHO NGƯỜI BÁN</span>
                        </li>
                        <li className="mb-[0.8rem]">
                            <Link to={''}>Quy định đối với người bán</Link>
                        </li>
                        <li className="mb-[0.8rem]">
                            <Link to={''}>Chính sách bán hàng</Link>
                        </li>
                        <li className="mb-[0.8rem]">
                            <Link to={''}>Hệ thống tiêu chí kiểm duyệt</Link>
                        </li>
                        <li className="">
                            <Link to={''}>Mở shop trên Sendo</Link>
                        </li>
                    </ul>
                    <ul className="stretch-content middle-footer">
                        <li className="font-bold mb-[1.2rem]">
                            <span>TẢI ỨNG DỤNG SENDO</span>
                        </li>
                        <li className="mb-[0.8rem] max-w-[20rem]">
                            Mang thế giới mua sắm của Sendo trong tầm tay bạn
                        </li>
                        <li className="flex flex-wrap gap-[0.8rem] mt-[0.8rem]">
                            <div className="w-[120px]">
                                <Link to={''}>
                                    <img
                                        src="https://media3.scdn.vn/img4/2020/12_16/5lUTWdk3DXr8nlC9MDII.png"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="w-[120px]">
                                <Link to={''}>
                                    <img
                                        src="https://media3.scdn.vn/img4/2021/10_26/0ZARLASzVrfL92924rzW.png"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="w-[120px]">
                                <Link to={''}>
                                    <img
                                        src="https://media3.scdn.vn/img4/2021/03_19/AMV086JNpEbm4OGAvVng.png"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="bottom-footer bg-[#27343e] text-white py-[24px]">
                <div className="lg:container flex justify-between px-[24px]">
                    <ul className="stretch-content flex-col flex-wrap text-sm basis-5/12 max-w-5/12 grow-0">
                        <li className="font-bold mb-[1.2rem] leading-[1.6rem]">
                            Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập
                            đoàn FPT
                        </li>
                        <li className="mb-[1.6rem] leading-[1.6rem]">
                            Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa
                            đổi lần thứ 20, ngày 26/04/2022.
                        </li>
                        <li className="mb-[1.6rem] leading-[1.6rem]">
                            Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.
                        </li>
                        <li className="mb-[1.6rem] leading-[1.6rem]">
                            Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp,
                            Lô D.01, Đường Tân Thuận, Khu chế xuất Tân Thuận,
                            Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí
                            Minh, Việt Nam.
                        </li>
                        <li className="leading-[1.6rem]">
                            Email: lienhe@sendo.vn
                        </li>
                        <li className="flex gap-[2rem] mt-[1.2rem]">
                            <div className="max-w-[108px]">
                                <Link to={''}>
                                    <img
                                        src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="max-w-[108px]">
                                <Link to={''}>
                                    <img
                                        src="https://media3.scdn.vn/img4/2020/12_16/h6lEMGIAt4Uapd0Mls34.png"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </li>
                    </ul>
                    <ul className="stretch-content flex-col flex-wrap gap-[1.1rem] basis-1/2 max-w-[50%] grow-0 text-sm">
                        <li className="">
                            <span className="font-bold leading-[1.6rem]">
                                Đăng ký nhận bản tin ưu đãi khủng từ Sendo
                            </span>
                        </li>
                        <li className="stretch-content gap-[0.4rem] items-center">
                            <div className="basis-1/2 max-w-[50%] grow-0">
                                <div className="email-input border-none">
                                    <input
                                        className="text-[#3f4b53] w-full leading-[1.4rem] p-[0.8rem] border-none outline-none"
                                        type="text"
                                        placeholder="Email của bạn là"
                                    />
                                </div>
                            </div>
                            <div className="basis-2/12 max-w-2/12 grow-0 border-none">
                                <button className="btn-register select-none align-middle">
                                    <span className="leading-[1.29] text-base font-bold">
                                        Đăng ký
                                    </span>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <TopSearch />
        </footer>
    )
}

export default Footer
