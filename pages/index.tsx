import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import Materials from './components/Materials'

const Home: NextPage = () => {
  const [materials, setMaterials] = useState([]);

  return (
    <>
      <Head>
        <title>craftBook</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

    <Materials setMaterials={setMaterials} filters={materials}/>
      
    </>
  )
}

export default Home
