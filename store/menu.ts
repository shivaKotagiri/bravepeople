import { create } from "zustand";

interface MenuState  {
    menuOpen: boolean,
    setMenuOpen: () => void
}

export const useMenuStore = create<MenuState>(set => ({
    menuOpen: false,
    setMenuOpen: () => set((state) => ({ menuOpen: !state.menuOpen}))
}));
