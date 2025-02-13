import Head from "next/head";
import { MainContainer } from "@/components/common/Layout/MainContainer";
import Header from "@/components/common/Layout/Header";


export default function Home() {
  return (
    <>
      <Head>
        <title>MySide Shop</title>
        <meta name="description" content="Seu melhor lugar para comprar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainContainer>
      </MainContainer>
    </>
  );
}
