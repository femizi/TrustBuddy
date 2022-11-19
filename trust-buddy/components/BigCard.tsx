

const BigCard = () => {
    return (
        <div className="bg-white | rounded-2xl | p-4">
            <div className="flex | justify-between | py-2">
                <h4>Overview</h4>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.65 2.85C12.9099 2.10485 12.0296 1.51356 11.0599 1.11023C10.0902 0.706901 9.05025 0.499506 8.00001 0.500001C3.58001 0.500001 0.0100098 4.08 0.0100098 8.5C0.0100098 12.92 3.58001 16.5 8.00001 16.5C11.73 16.5 14.84 13.95 15.73 10.5H13.65C13.2381 11.6695 12.4734 12.6824 11.4614 13.3988C10.4494 14.1153 9.23995 14.5 8.00001 14.5C4.69001 14.5 2.00001 11.81 2.00001 8.5C2.00001 5.19 4.69001 2.5 8.00001 2.5C9.66001 2.5 11.14 3.19 12.22 4.28L9.00001 7.5H16V0.500001L13.65 2.85Z" fill="#00AD07" />
                </svg>
            </div>
            <div className="grid | grid-cols-[0.7fr_1.3fr] | gap-2 | py-2| ">
                <div className="grid | gap-4">
                    <div className="bg-[#EAFFF9]/50 | p-3 | stack | rounded-3xl ">
                        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 4.85107H16.3333C16.3333 2.32759 13.9467 0.283691 11 0.283691C8.05333 0.283691 5.66666 2.32759 5.66666 4.85107H2.99999C1.53333 4.85107 0.333328 5.87873 0.333328 7.13476V20.8369C0.333328 22.0929 1.53333 23.1206 2.99999 23.1206H19C20.4667 23.1206 21.6667 22.0929 21.6667 20.8369V7.13476C21.6667 5.87873 20.4667 4.85107 19 4.85107ZM8.33333 9.41844C8.33333 10.0465 7.73333 10.5603 7 10.5603C6.26666 10.5603 5.66666 10.0465 5.66666 9.41844V7.13476H8.33333V9.41844ZM11 2.56738C12.4667 2.56738 13.6667 3.59504 13.6667 4.85107H8.33333C8.33333 3.59504 9.53333 2.56738 11 2.56738ZM16.3333 9.41844C16.3333 10.0465 15.7333 10.5603 15 10.5603C14.2667 10.5603 13.6667 10.0465 13.6667 9.41844V7.13476H16.3333V9.41844Z" fill="#999999" />
                        </svg>
                        <h5>Total Products</h5>
                        <div className="flex | justify-between">
                            <strong>146</strong>
                            <dt>
                                <svg className="self-center" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.61624 0.111488L8.9231 7.5712H0.309371L4.61624 0.111488Z" fill="#00811C" />
                                </svg>
                                63%</dt>
                        </div>

                    </div>
                    <div className="bg-[#EAFFF9]/50 | p-2 | stack | rounded-3xl">
                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 4.85107H16.3333C16.3333 2.32759 13.9467 0.283691 11 0.283691C8.05333 0.283691 5.66666 2.32759 5.66666 4.85107H2.99999C1.53333 4.85107 0.333328 5.87873 0.333328 7.13476V20.8369C0.333328 22.0929 1.53333 23.1206 2.99999 23.1206H19C20.4667 23.1206 21.6667 22.0929 21.6667 20.8369V7.13476C21.6667 5.87873 20.4667 4.85107 19 4.85107ZM8.33333 9.41844C8.33333 10.0465 7.73333 10.5603 7 10.5603C6.26666 10.5603 5.66666 10.0465 5.66666 9.41844V7.13476H8.33333V9.41844ZM11 2.56738C12.4667 2.56738 13.6667 3.59504 13.6667 4.85107H8.33333C8.33333 3.59504 9.53333 2.56738 11 2.56738ZM16.3333 9.41844C16.3333 10.0465 15.7333 10.5603 15 10.5603C14.2667 10.5603 13.6667 10.0465 13.6667 9.41844V7.13476H16.3333V9.41844Z" fill="#999999" />
                        </svg>
                        <h5>Total Products</h5>
                        <div className="flex | justify-between">
                            <strong>146</strong>
                            <dt className="flex">
                                <svg className="self-center" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.61624 0.111488L8.9231 7.5712H0.309371L4.61624 0.111488Z" fill="#00811C" />
                                </svg>
                                63%</dt>
                                </div>
                    </div>
                </div>
                <div className="bg-[#EAFFF9]/50 | rounded-3xl | p-3">
                    <h4> Order Status</h4>
                    <div>Total Orders for the Month</div>
                    <div className="grid | grid-cols-[1.4fr_0.6fr] | gap-2 | h-full bg-red-500 | ">
                        <div className="text-center">
                        <svg className="self-center" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.61624 0.111488L8.9231 7.5712H0.309371L4.61624 0.111488Z" fill="#00811C" />
                    </svg>
                            76%</div>
                        <div></div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BigCard