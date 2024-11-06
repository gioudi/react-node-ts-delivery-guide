export interface Login {
  email: string;
  password: string;
}

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
  isLogged: boolean;
}
