import { create } from "zustand";

interface UserMenuStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useUserMenuModal = create<UserMenuStore>(set => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useUserMenuModal;
