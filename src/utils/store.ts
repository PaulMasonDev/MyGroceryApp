import { create } from "zustand";

interface User {
  username: string;
  recipes: Recipe[];
  settings: any;
}

interface Recipe {
  id?: number;
  name: string;
  description: string;
}

interface UserStore {
  user: User;
  isLoggedIn: boolean;
  setUser: (userData: User) => void;
  addUserRecipe: (newRecipe: Recipe) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: {} as User,
  isLoggedIn: false,

  setUser: (userData: User) => {
    set(() => ({
      user: userData,
      isLoggedIn: true,
    }));
  },
  addUserRecipe: (newRecipe) =>
    set((state) => ({
      user: {
        ...state.user,
        recipes: [...state.user.recipes, newRecipe],
      },
    })),
  //   login: (userData) =>
  //     set((state) => ({
  //       user: userData,
  //       isLoggedIn: true,
  //     })),

  //   logout: () => set({ user: null, isLoggedIn: false }),
}));

export default useUserStore;
