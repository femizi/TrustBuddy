import React from 'react'

const Header = () => {
    return (
        <header className='flex | justify-between  |  py-2 | flex-col | md:flex-row | gap-2 bg-gradient-to-r from-[#fff] via-[#fff] to-[#EAFEF8] px-[5vw]'>
            <div>
                <h1 className=' text-2xl | font-medium | font-inter | text-[#3C3C3C]'> Welcome Back, Femi!</h1>
                <h2 className='font-nunito-sans|text-[#515151] | font-semibold | text-base'>
                    Track, manage and forcast your customers and orders</h2>
            </div>
            <div className='relative | self-center'>
                <button className='bg-[#2E3192] | py-2 | px-3 |
                 text-white | text-lg | font-semibold | rounded-lg | pr-10'>
                    Download Report
                </button>
                <svg className='absolute | top-[12px] | right-[8px]' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3334 7.50003H13V2.50003H8.00002V7.50003H4.66669L10.5 13.3334L16.3334 7.50003ZM4.66669 15V16.6667H16.3334V15H4.66669Z" fill="white" />
                </svg>
            </div>
        </header>
    )
}

export default Header