import { MainContainer } from "@/components/common/Layout/MainContainer";
import ProductsList from "@/components/products-list/ProductsList";
import BaseLayout from "./layout";


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
