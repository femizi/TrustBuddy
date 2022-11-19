

const SmallCard = () => {
    return (
        <div className="grid | grid-cols-[1.4fr_0.6fr] | bg-white | rounded-2xl | gap-2 | px-4 | py-8 ">
            <div className="stack">
                <h4> Total Sales</h4>
                <strong>#280,000</strong>
            </div>
            <div className="stack">
                <div className="flex">
                    <svg className="self-center" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.61624 0.111488L8.9231 7.5712H0.309371L4.61624 0.111488Z" fill="#00811C" />
                    </svg>

                    17%</div>
                <div>
                    <svg width="77" height="25" viewBox="0 0 77 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.571716 23.5514C8.74309 6.17727 14.5457 27.7937 25.9583 11.6616C37.371 -4.47042 41.0659 24.5458 53.6331 23.8791C66.2003 23.2124 59.2185 -1.57092 76.6729 0.473076" stroke="#00811C" stroke-width="1.05696" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default SmallCard