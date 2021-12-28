export interface RegisterData {
  userName: string;
  password: string;
  checkPassword: string;
  firstName?: string;
  lastName?: string;
}

export interface LoginData {
  userName: string;
  password: string;
}
