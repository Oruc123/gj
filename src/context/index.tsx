import React, { createContext, ReactNode } from "react";

interface ContextProps {
  isAuth: boolean;
  login: () => void;
  createdProject?: boolean;
  finishCreateProject: () => void;
  mobileDrawer?: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  tablet: boolean;
  mobile: boolean;
  openCreateProject: () => void;
}

export type MainContext2Props = {
  children: ReactNode;
  value: ContextProps;
};

export const ctx = createContext<Partial<ContextProps>>({});

const MainContext = (props: MainContext2Props) => {
  return <ctx.Provider value={props.value}>{props.children}</ctx.Provider>;
};

export default MainContext;
