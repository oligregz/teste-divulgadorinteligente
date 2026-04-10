import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice";
import ProductCard from "./ProductCard.component";
import { IProduct } from "../types/api.type";

const renderWithRedux = (component: React.ReactElement) => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("[ProductCard Component - Tests]", () => {
  const mockProduct: IProduct = {
    id: 99,
    title: "Test Smartphone X",
    image: "https://test.com/image.jpg",
    priceFormatted: "R$ 2.500,00",
    priceNumeric: 2500.0,
    priceFromFormatted: "R$ 3.000,00",
    link: "https://test.com/produto",
    seller: "tech_store",
    coupon: "TECH10",
  };

  it("[1] should render product details correctly", () => {
    renderWithRedux(<ProductCard product={mockProduct} />);

    expect(screen.getByText("Test Smartphone X")).toBeInTheDocument();
    expect(screen.getByText("tech_store")).toBeInTheDocument();
    expect(screen.getByText("R$ 2.500,00")).toBeInTheDocument();
    expect(screen.getByText("R$ 3.000,00")).toBeInTheDocument();
    expect(screen.getByText("TECH10")).toBeInTheDocument();

    const image = screen.getByRole("img", { name: "Test Smartphone X" });
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toContain(
      encodeURIComponent("https://test.com/image.jpg"),
    );
  });

  it('[2] should dispatch addItem action to Redux store when "Add to Cart" is clicked', () => {
    const { store } = renderWithRedux(<ProductCard product={mockProduct} />);

    const addButton = screen.getByRole("button", { name: /add to cart/i });

    fireEvent.click(addButton);

    const state = store.getState();
    expect(state.cart.items.length).toBe(1);
    expect(state.cart.items[0].id).toBe(99);
    expect(state.cart.totalAmount).toBe(2500.0);
  });
});
