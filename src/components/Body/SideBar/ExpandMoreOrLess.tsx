interface ExpanButtonProp {
    isOpen: boolean
    onClick: () => void
}

const ExpandMoreOrLess = ({ isOpen, onClick }: ExpanButtonProp) => {
    return (
        <div className="flex items-center justify-center">
            <button
                className="button-main button-content button-base px-[0.7rem] py-[0.6rem] mt-[0.8rem]"
                onClick={onClick}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="w-[1.6rem] h-[1.6rem] fill-[#3f4b53]"
                >
                    {isOpen ? (
                        <path
                            fill="#6F787E"
                            fill-rule="nonzero"
                            d="M22 11v2H2v-2z"
                        ></path>
                    ) : (
                        <path
                            fill="#6F787E"
                            fill-rule="nonzero"
                            d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"
                        ></path>
                    )}
                </svg>
                <span className="leading-[1.29] font-bold ml-[0.8rem]">
                    {isOpen ? 'Thu gọn' : 'Xem thêm'}
                </span>
                {/* <span className="font-bold">Xem thêm</span> */}
            </button>
        </div>
    )
}

export default ExpandMoreOrLess
