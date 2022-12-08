import create from "zustand";

interface ProfileMenuData {
  activeItem: string;
  setActiveItem: (name: string) => void;
}

export const useProfileMenuData = create<ProfileMenuData>((set) => ({
  activeItem: "my-data",
  setActiveItem: (name: string) => set({ activeItem: name }),
}));
