import React from 'react'
import Header from './Header'

const Main = () => {
    return (
        <main className='flex | flex-wrap | h-screen | flex-col sm:flex-row'>
            <aside className='flex-grow border basis-[20%]'>

            </aside>
            <section className='basis-0 grow-[999] min-w-[80%] border  '>
                <Header />
                <article>

                </article>
            </section>
        </main>
    )
}

export default Main