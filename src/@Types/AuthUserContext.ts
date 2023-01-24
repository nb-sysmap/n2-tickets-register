import { IUserLogged } from "./user";

export interface IUserContext {
  signInMicrosoft: () => IUserLogged;
  signed: boolean;
  userLogged: IUserLogged;
  signOut: () => void;
}