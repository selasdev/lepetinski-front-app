/* eslint-disable @typescript-eslint/ban-types */
import React, { FC, useContext, useEffect, useState } from "react";
import { IUser } from "../../types/user";

interface IAuthContextControls {
  setUser?: (user: IUser) => void;
}

export interface IAuthContextValues extends IAuthContextControls {
  user?: IUser | null;
  authenticated?: boolean;
}

export const initialValues: IAuthContextValues = {
  user: null,
  authenticated: false,
};

export const AuthenticationContext = React.createContext<IAuthContextValues>(
  {}
);

interface IAuthenticationProvider {
  values: IAuthContextValues;
  children: React.ReactNode;
}

export const AuthenticationProvider: FC<IAuthenticationProvider> = ({
  values,
  children,
}) => {
  const [authenticated, setAuthenticated] = useState<boolean>(
    values.authenticated || false
  );
  const [user, setUser] = useState<IUser | null>(values.user || null);

  useEffect(() => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [user]);

  return (
    <AuthenticationContext.Provider
      value={{
        authenticated,
        user,
        setUser,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationProvider = (): IAuthContextValues => {
  return useContext(AuthenticationContext);
};
