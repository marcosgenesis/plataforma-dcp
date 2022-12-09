import create from "zustand";

interface DeliveryStore {
  taxDelivery?: number;
  setTaxDelivery?: (taxDelivery: number) => void;
  deliveryTime?: string;
  setDeliveryTime?: (deliveryTime: string) => void;
  valueWithDiscount: number;
  setValueWithDiscount: (valueWithDiscount: number) => void;
}

export const useDeliveryStore = create<DeliveryStore>((set, get) => ({
  taxDelivery: 0,
  deliveryTime: "",
  valueWithDiscount: 0,

  setTaxDelivery: (taxDelivery: number) => set({ taxDelivery }),
  setDeliveryTime: (deliveryTime: string) => set({ deliveryTime }),
  setValueWithDiscount: (valueWithDiscount: number) =>
    set({ valueWithDiscount }),
}));
