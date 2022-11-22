import React from 'react'
import Dashboard from './Dashboard'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Main = () => {
    return (
        <main className='flex | flex-wrap | justify-items-stretch  | flex-col sm:flex-row'>
            <Sidebar/>
            <section className='basis-0 grow-[999] min-w-[80%] border  '>
                <Header />
               <Dashboard/>
               <Footer/>
            </section>
        </main>
    )
}

export default Main