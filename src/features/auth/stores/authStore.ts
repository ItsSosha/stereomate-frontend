import { makeAutoObservable } from "mobx";

class AuthStore {
  private _idToken: string | null = null;
  user: any;

  constructor() {
    makeAutoObservable(this);
  }

  setIdToken = (token: string | null) => {
    this._idToken = token;
  };

  get idToken() {
    return this._idToken;
  }
}

export const authStore = new AuthStore();
