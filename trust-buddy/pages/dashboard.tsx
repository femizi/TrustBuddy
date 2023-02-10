import type { NextPage } from 'next'
import Head from 'next/head'

import Main from '../components/Main'
import Nav from '../components/Nav'

const dashboard: NextPage = () => {
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

export default dashboard