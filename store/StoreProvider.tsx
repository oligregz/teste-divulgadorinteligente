"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { IStoreProviderProps } from "@/types/api.type";

export default function StoreProvider({ children }: IStoreProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
