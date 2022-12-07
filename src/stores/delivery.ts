import create from "zustand";

interface DeliveryStore {
  taxDelivery?: number;
  setTaxDelivery?: (taxDelivery: number) => void;
  deliveryTime?: string;
  setDeliveryTime?: (deliveryTime: string) => void;
}

export const useDeliveryStore = create<DeliveryStore>((set, get) => ({
  taxDelivery: 0,
  deliveryTime: undefined,

  setTaxDelivery: (taxDelivery: number) => set({ taxDelivery }),
}));
