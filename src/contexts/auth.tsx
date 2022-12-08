import React, { createContext, useContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import api from "../services/api";
import Router from "next/router";

interface AuthData {
  token: string;
}

interface AuthContextProps {
  data: AuthData;
  user: {
    avatar: string;
    birthdate: string;
    city: string;
    country: string;
    cpf: string;
    createdAt: string;
    email: string;
    firstName: string;
    gender: string;
    id: string;
    lastName: string;
    neighbourhood: string;
    phone: string;
    state: string;
    street: string;
    updatedAt: string;
    zipcode: string;
  };
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface TypeContextProvider {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthContextProvider({ children }: TypeContextProvider) {
  const cookies = parseCookies();
  const token = cookies["@tramaAPP:token"];
  const [user, setUser] = useState(null);
  const [data, setData] = useState<AuthData>(() => {
    if (token) {
      return { token };
    }
    return {} as AuthData;
  });

  useEffect(() => {
    async function loadUser() {
      if (token) {
        const userResponse = await api.get("/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(userResponse.data);
        return;
      }
      setUser(null);
    }
    loadUser();
  }, [token]);

  const login = async ({ email, password }: LoginCredentials) => {
    const response = await api.post("/auth", {
      email,
      password,
    });

    const { token } = response.data;
    setCookie(undefined, "@tramaAPP:token", token, {
      maxAge: 60 * 60 * 24 * 60,
      path: "/",
    });

    const userResponse = await api.get("/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser(userResponse.data);

    setData({ token });
  };

  const logout = (): void => {
    destroyCookie(undefined,"@tramaAPP:token");
    setData({} as AuthData);
    Router.push('/authentication')
  };

  return (
    <AuthContext.Provider value={{ data, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be within an AuthProvider");
  return context;
}