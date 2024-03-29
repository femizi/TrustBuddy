import React from 'react'
import BigCard from './BigCard'
import SmallCard from './SmallCard'

const Dashboard = () => {
    return (
        <article className='bg-[#F1F0F0] | self-stretch | py-2 px-[5vw] '>
            <h3 className='font-semibold| text-3xl | text-[#282828] py-2 font-inter '> Dashboard</h3>
            <section className='grid | grid-cols-1 md:grid-cols-2 | py-2 | gap-4'>
                <div className='grid | grid-cols-1 | md:grid-cols-2 | gap-4'>
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                </div>
                <BigCard />
                <BigCard />
                <BigCard />
                
            </section>
        </article>
    )
}

export default Dashboard