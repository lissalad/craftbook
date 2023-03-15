import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import Materials from './components/Materials'
import CraftGallery from './components/CraftGallery'
import data, { allMaterials } from "./utils/craftData";

interface MyComponentProps {
  materials: string[];
  allMaterials: string[];
}

const Home: NextPage = () => {
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>(allMaterials);

  console.log(selectedMaterials);

  function handleCheckboxChange(item: string) {
    if (selectedMaterials.includes(item)) {
      setSelectedMaterials(selectedMaterials.filter((m) => m !== item));
    } else {
      setSelectedMaterials([...selectedMaterials, item]);
    }
  }

  return (
    <>
      <Head>
        <title>craftBook</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

    <Materials onChange={handleCheckboxChange} selectedMaterials={selectedMaterials} allMaterials={allMaterials}/>
      <CraftGallery items={data} selectedMaterials={selectedMaterials}/>
    </>
  )
}

export default Home
