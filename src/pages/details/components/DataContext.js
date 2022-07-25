import { createContext } from "react";

export const DataContext = createContext();

export const DetailsPageProvider = DataContext.Provider;

export const DetailsPageConsumer = DataContext.Consumer;
