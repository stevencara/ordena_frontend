import { createContext, useState } from 'react';
import { users } from '../data/users';

export const AuthContext = createContext();

export function AuthProvider ({children}) {
  const [user, setUser] = useState(null)

  const login = (email, password) => {
    const foundUser = users.find((u) => u.email === email && u.password === password)

    if(!foundUser){
      return {success: false, message: "Credenciales inválidas"}
    }

    setUser(foundUser)
    return{success: true,
      user: foundUser
    }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{user, login, logout }}> 
      {children}
    </AuthContext.Provider>      
  )
}