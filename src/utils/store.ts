import { create } from "zustand";

interface User {
  username: string;
  recipes: Recipe[];
  settings: any;
}

export interface Recipe {
  id: number;
  name: string;
  description: string;
}

interface UserStore {
  user: User | null;
  isLoading: boolean;
  recipes: Recipe[];
  isLoggedIn: boolean;
  setUser: (userData: User | null) => void;
  setLoading: (value: boolean) => void;
  logout: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: {} as User,
  isLoading: false,
  isLoggedIn: false,
  recipes: [],
  setUser: (userData: User | null) => {
    set(() => ({
      user: userData,
      isLoggedIn: true,
      recipes: userData?.recipes,
    }));
  },
  setLoading: (value: boolean) => {
    set(() => ({
      isLoading: value,
    }));
  },
  logout: () => {
    set(() => ({
      isLoggedIn: false,
    }));
  },
}));

export default useUserStore;
