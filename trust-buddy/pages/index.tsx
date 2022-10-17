import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import Nav from '../components/Nav'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title> Trust Buddy</title>
      </Head>
      <Nav/>
      <Main/>
    </div>
  )
}

export default Home
