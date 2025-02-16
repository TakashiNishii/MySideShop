import Head from "next/head";
import { MainContainer } from "@/components/common/Layout/MainContainer";
import Header from "@/components/common/Layout/Header";
import ProductsList from "@/components/products-list/ProductsList";
import BaseLayout from "./layout";
import { CartIndicator } from "@/components/cart/CartSidebar/CartIndicator";


export default function Home() {
  return (
    <>
      <BaseLayout />
      <MainContainer>
        <ProductsList />
      </MainContainer>
    </>
  );
}
