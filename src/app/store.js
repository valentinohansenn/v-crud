import { create } from "zustand";

export const useStore = create((set) => {
  return {
    q: "",
    setText: (text) => set(() => ({ q: text })),
  };
});
