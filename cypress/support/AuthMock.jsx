import React from "react";
import { AuthContext } from "../../Frontend/src/hooks/useAuth.jsx";

export const AuthMock = ({ children, user = null, login = () => {} }) => {
  return (
    <AuthContext.Provider value={{ user, login, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
