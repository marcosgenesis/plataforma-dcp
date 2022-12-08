import create from "zustand";

interface ProfileMenuData {
  activeMenu: string;
  setActiveMenu: (name: string) => void;
}

export const useProfileMenuData = create<ProfileMenuData>((set) => ({
  activeMenu: "my-data",
  setActiveMenu: (name: string) => set({ activeMenu: name }),
}));
