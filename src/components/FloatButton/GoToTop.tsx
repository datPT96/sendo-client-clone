import React from 'react'

const GoToTop = () => {
    return (
        <button
            aria-label="button scroll to top"
            className="btn-gotop flex justify-center items-center bottom-[8.8rem] right-[5.2rem]"
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="d7ed-SwZDZ2"
                style={{ color: 'rgb(136, 138, 142)' }}
            >
                <path
                    fill="#6F787E"
                    fillRule="nonzero"
                    d="M13 5.414V22h-2V5.414l-6.293 6.293-1.414-1.414L12 1.586l8.707 8.707-1.414 1.414z"
                ></path>
            </svg>
        </button>
    )
}

export default GoToTop
