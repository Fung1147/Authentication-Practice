import { create } from "zustand";
import { actionLogin } from "../api/auth";
import { persist } from "zustand/middleware";

// Create Store
const authStore = (set) => ({
  user: null,
  token: null,

  // Login at components call
  actionLoginWithZustand: async (value) => {
    try {
      const res = await actionLogin(value);
      // Backend ส่งกลับมา: { payload, token }
      const { payload, token } = res.data;

      // Update data into Store
      set({
        user: payload,
        token: token,
      });

      return { success: true, role: payload.role };
    } catch (error) {
      console.log(error.response?.data?.message);
      return {
        success: false,
        error: error.response?.data?.message || "Login failed",
      };
    }
  },

  // Logout
  actionLogout: () => {
    set({ user: null, token: null });
    // Clear data
    localStorage.removeItem("auth-store");
  },
});

// ใช้ persist เพื่อ refresh แล้วข้อมูลยังคงอยู่
const useAuthStore = create(
  persist(authStore, {
    name: "auth-store", // key name in localStorage
  }),
);

export default useAuthStore;
