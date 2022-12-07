import create from "zustand";

interface CupomStore {
  isFreeShipping: boolean;
  changeIsFreeShipping: () => void;
  discount: number;
  setDiscount: (discount: number) => void;
}

export const useCupomStore = create<CupomStore>((set, get) => ({
  discount: 0,
  isFreeShipping: false,
  changeIsFreeShipping: () => {
    set({ isFreeShipping: !get().isFreeShipping });
  },
  setDiscount: (discount: number) => {
    set({ discount: get().discount + discount });
  },
}));
