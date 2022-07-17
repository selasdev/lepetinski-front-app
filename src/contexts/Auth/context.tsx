/* eslint-disable @typescript-eslint/ban-types */
import React, { FC, useContext } from "react";

export interface IAuthContextValues {
  user?: any;
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
  return (
    <AuthenticationContext.Provider value={values}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationProvider = (): IAuthContextValues => {
  return useContext(AuthenticationContext);
};
