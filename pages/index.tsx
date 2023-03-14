import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import Materials from './components/Materials'

interface MyComponentProps {
  materials: string[];
  allMaterials: string[];
}

const Home: NextPage = () => {
  const allMaterials = ["glue", "paper", "success", "dreams"];
  const [materials, setMaterials] = useState<string[]>(allMaterials);

  console.log(materials);

  function handleCheckboxChange(item: string) {
    if (materials.includes(item)) {
      setMaterials(materials.filter((m) => m !== item));
    } else {
      setMaterials([...materials, item]);
    }
  }

  return (
    <>
      <Head>
        <title>craftBook</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

    <Materials onChange={handleCheckboxChange} materials={materials} allMaterials={allMaterials}/>
      
    </>
  )
}

export default Home
