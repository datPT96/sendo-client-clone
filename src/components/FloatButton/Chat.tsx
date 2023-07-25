import React from 'react'

const Chat = () => {
    return (
        <div className="fixed left-[auto] top-[auto] right-[2.4rem] z-[95] bottom-[2.4rem]">
            <div className="stretch-content flex-wrap items-center justify-center bg-[#3f81fe] rounded-[0.4rem] h-[4rem] w-[9.4rem] cursor-pointer">
                <div className="pr-[0.8rem]">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="fill-[#fff]"
                    >
                        <path
                            d="M20 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7.913L6 21.804V18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16Zm0 2H4v12h4v2.196L11.513 16H20V4Zm-6 7v2H7v-2h7Zm2-4v2H7V7h9Z"
                            fill="#fff"
                            fillRule="nonzero"
                        ></path>
                    </svg>
                </div>
                <span className="text-[#fff] font-bold leading-[1.8rem]">
                    Chat
                </span>
            </div>
            {/* <div className="_33ba-mbl9Nz _33ba-snVm4Y">
                <div className="_33ba-YFSKZ3 _33ba-snVm4Y">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="d7ed-SwZDZ2"
                    >
                        <path
                            fill="#6F787E"
                            d="m8 9.414-4.293 4.293-1.414-1.414L6.586 8 2.293 3.707l1.414-1.414L8 6.586l4.293-4.293 1.414 1.414L9.414 8l4.293 4.293-1.414 1.414L8 9.414z"
                        ></path>
                    </svg>
                </div>
                <iframe
                    title="Chat"
                    src="https://chatweb.sendo.vn/chat?code=e30%3D&amp;parent=https%3A%2F%2Fwww.sendo.vn&amp;ui=2"
                    frameBorder="0"
                    height="100%"
                    width="100%"
                    scrolling="no"
                ></iframe>
            </div> */}
        </div>
    )
}

export default Chat
