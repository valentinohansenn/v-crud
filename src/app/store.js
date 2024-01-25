import { create } from "zustand";

export const useStore = create((set) => {
  return {
    limit: 28,
    skip: 0,
    q: "",
    category: "all",
    allProducts: null,
    total: 0,
    setLimit: (lim) => set(() => ({ limit: lim })),
    setSkip: (skipVal) => set(() => ({ skip: skipVal })),
    setText: (text) => set(() => ({ q: text })),
    setCategory: (cate) => set(() => ({ category: cate })),
    setAllProducts: (obj) => set(() => ({ allProducts: obj })),
    setTotal: (length) => set(() => ({ total: length })),
  };
});
