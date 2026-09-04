import { useState, useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import type { User } from "@/types";

const MOCK_USERS: User[] = [
  {
    id: "admin-1",
    name: "Admin User",
    email: "admin@massx.in",
    role: "admin",
    createdAt: "2024-01-01",
    isActive: true,
  },
  {
    id: "user-1",
    name: "Demo User",
    email: "demo@massx.in",
    role: "user",
    createdAt: "2024-06-01",
    isActive: true,
  },
];

export function useAuth() {
  const [currentUser, setCurrentUser] = useLocalStorage<User | null>("massx_user", null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      setError(null);

      await new Promise((r) => setTimeout(r, 800));

      const user = MOCK_USERS.find((u) => u.email === email);
      if (user && password.length >= 6) {
        setCurrentUser(user);
        setLoading(false);
        return { success: true, user };
      } else {
        setError("Invalid email or password.");
        setLoading(false);
        return { success: false };
      }
    },
    [setCurrentUser]
  );

  const signup = useCallback(
    async (name: string, email: string, _password: string) => {
      setLoading(true);
      setError(null);

      await new Promise((r) => setTimeout(r, 800));

      const newUser: User = {
        id: `user-${Date.now()}`,
        name,
        email,
        role: "user",
        createdAt: new Date().toISOString(),
        isActive: true,
      };
      setCurrentUser(newUser);
      setLoading(false);
      return { success: true, user: newUser };
    },
    [setCurrentUser]
  );

  const logout = useCallback(() => {
    setCurrentUser(null);
  }, [setCurrentUser]);

  return {
    currentUser,
    loading,
    error,
    login,
    signup,
    logout,
    isAuthenticated: !!currentUser,
    isAdmin: currentUser?.role === "admin",
  };
}
