import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/router";
import { useState } from "react";
import BaseLayout from "../layout";
import { MainContainer } from "@/components/common/Layout/MainContainer";
import {
  CheckoutContainer,
  ProductList,
  ProductItem,
  ProductInfo,
  Summary,
  SuccessModal
} from "@/components/checkout/checkout.styles";

export default function Checkout() {
  const { items, totalPrice, totalQuantity, clearCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  const handleCheckout = () => {
    setShowSuccess(true);
    setTimeout(() => {
      clearCart();
      router.push("/");
    }, 500);
  };

  if (!items?.length) {
    return (
      <>
        <BaseLayout />
        <MainContainer>
          <CheckoutContainer>
            <h1>Checkout</h1>
            <p>Your cart is empty</p>
          </CheckoutContainer>
        </MainContainer>
      </>
    );
  }

  return (
    <>
      <BaseLayout />
      <MainContainer>
        <CheckoutContainer>
          <h1>Checkout</h1>

          <ProductList>
            {items.map((item) => (
              <ProductItem key={item.id}>
                <img src={item.image} alt={item.title} />
                <ProductInfo>
                  <h3>{item.title}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Unity Price: R$ {item.price.toFixed(2)}</p>
                  <p>Subtotal: R$ {(item.price * item.quantity).toFixed(2)}</p>
                </ProductInfo>
              </ProductItem>
            ))}
          </ProductList>

          <Summary>
            <h2>Summary</h2>
            <p>Total quantity: {totalQuantity} itens</p>
            <p>Total price: R$ {totalPrice.toFixed(2)}</p>
            <button onClick={handleCheckout}>Checkout</button>
          </Summary>

          {showSuccess && (
            <SuccessModal>
              <h2>Purchase successful! 🎉</h2>
            </SuccessModal>
          )}
        </CheckoutContainer>
      </MainContainer>
    </>
  );
}
