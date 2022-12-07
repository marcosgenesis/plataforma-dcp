import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';


interface AuthData {
  token: string;
}

interface AuthContextProps {
  data: AuthData;
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
  const [data, setData] = useState<AuthData>(() => {
    const token = localStorage.getItem('@tramaAPP:token');

    if (token) {
      return {token} ;
    }
    return {} as AuthData;
  });

  const login = async ({ email, password }: LoginCredentials) => {
    const response = await api.post('api/v1/auth', {
      email,
      password,
    });

    const { token } = response.data;
    
    if (typeof window !== "undefined"){
      localStorage.setItem('@tramaAPP:token', token);
    }

    setData({token});

  };

  const logout = (): void => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }

    setData({} as AuthData);
  };

  return (
    <AuthContext.Provider value={{ data, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be within an AuthProvider');
  return context;
}