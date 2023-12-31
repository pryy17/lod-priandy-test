import Navbar from "@/components/Navbar";
import FoodPage from "@/templates/FoodPage";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>lod-test</title>
        <meta name="description" content="Generated by Create Next Stack." />
      </Head>
      <section className="relative overflow-hidden min-w-[80em]">
        <Navbar />
        <FoodPage />
      </section>
    </>
  );
};

export default Index;
