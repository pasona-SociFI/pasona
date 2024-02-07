// // src/context/AuthContext.tsx
// import { createContext, useContext, ReactNode, useState } from 'react';

// interface AuthContextType {
//   user: any;
//   login: () => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType>(null!);

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState(null);

//   const login = () => {
//     // Implement login logic
//     setUser({ name: "Sample User" });
//   };

//   const logout = () => {
//     // Implement logout logic
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);
