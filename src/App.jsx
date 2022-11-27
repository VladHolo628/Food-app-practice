import { Hero } from "./components/Hero";
import { MealsList } from "./components/Meals/MealsList";
import { Container } from "./layout/Container/Container";
import { Header } from "./layout/Header/Header";
import { Cart } from "./components/cart/Cart";
import { useState } from "react";
import { CartContextProvider } from "./store/cart-context-1";

function App() {
  const [isOrdering, setIsOrdering] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onCloseHandler = () => {
    setShowModal(false);
  };
  const onOpenHandler = () => {
    setShowModal(true);
  };

  const orderHandler = () => {
    setIsOrdering(true);
  };

  return (
    <CartContextProvider>
      {showModal && (
        <Cart
          isOrdering={isOrdering}
          orderHandler={orderHandler}
          orderCancelingHandler={() => setIsOrdering(false)}
          onClose={onCloseHandler}
        />
      )}
      <Header onOpenModal={onOpenHandler} />
      <main>
        <Container>
          <Hero />
          <MealsList />
        </Container>
      </main>
    </CartContextProvider>
  );
}

export default App;
