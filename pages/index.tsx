import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import CraftGallery from "../components/CraftGallery";
import data, { allMaterials } from "../utils/craftData";
import { atom } from "jotai";

interface MyComponentProps {
  materials: string[];
  allMaterials: string[];
}

const Home: NextPage = () => {
  const [selectedMaterials, setSelectedMaterials] =
    useState<string[]>(allMaterials);

  function handleCheckboxChange(item: string) {
    if (selectedMaterials.includes(item)) {
      setSelectedMaterials(selectedMaterials.filter((m) => m !== item));
    } else {
      setSelectedMaterials([...selectedMaterials, item]);
    }
  }

  function handleClear() {
    setSelectedMaterials([]);
  }

  function selectAll() {
    setSelectedMaterials(allMaterials);
  }

  return (
    <>
      <Head>
        <title>craftyBook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-row relative">
        <Sidebar
          onChange={handleCheckboxChange}
          selectedMaterials={selectedMaterials}
          allMaterials={allMaterials}
          handleClear={handleClear}
          selectAll={selectAll}
        />
        <CraftGallery items={data} selectedMaterials={selectedMaterials} />
      </main>
    </>
  );
};

export default Home;
