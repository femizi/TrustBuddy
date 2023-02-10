import React from 'react'

const Header = () => {
    return (
        <header className='flex | justify-between  |  py-2 | flex-col | md:flex-row | gap-2 bg-gradient-to-r from-[#fff] via-[#fff] to-[#EAFEF8] px-[5vw]'>
            <div>
                <h1 className=' text-2xl | font-medium | font-inter | text-[#3C3C3C]'> Welcome Back, Femi!</h1>
                <h2 className='font-nunito-sans|text-[#515151] | font-semibold | text-base'>
                    Track, manage and forcast your customers and orders</h2>
            </div>
            <div className='flex | gap-2 | justify-between'>
                <div className='relative | self-center'>
                    <button className='bg-white | py-2 | px-3 |
                 text-black | text-lg | font-semibold | rounded-lg | pr-10 | border | border-black'>
                        Download Report
                    </button>
                    <svg className='absolute | top-3 | right-[8px]' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='fill-black' d="M16.3334 7.50003H13V2.50003H8.00002V7.50003H4.66669L10.5 13.3334L16.3334 7.50003ZM4.66669 15V16.6667H16.3334V15H4.66669Z" fill="white" />
                    </svg>
                </div>
                <div className='relative | self-center'>
                    <button className='bg-[#2E3192]  | py-2 | px-3 |
                 text-white | text-lg | font-semibold | rounded-lg | pl-10 | hover:scale-125 | transition-transform'>
                        Add New Order
                    </button>
                    <svg className='absolute | top-3 | left-2' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 3.05176e-05H2C1.46957 3.05176e-05 0.960859 0.210744 0.585786 0.585817C0.210714 0.96089 0 1.4696 0 2.00003V16C0 16.5305 0.210714 17.0392 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C17.1 18 18 17.1 18 16V2.00003C18 0.90003 17.1 3.05176e-05 16 3.05176e-05ZM14 10H10V14H8V10H4V8.00003H8V4.00003H10V8.00003H14V10Z" fill="white" />
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Header