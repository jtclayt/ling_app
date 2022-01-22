import { Buffer } from "buffer";
import { User } from "../models/User";

/**
 * Get ther current logged in user data.
 * @returns User data.
 */
export const getCurrentUser = (): User | null => {
  const userString = localStorage.getItem("user");
  if (userString) {
    return JSON.parse(userString) as User;
  }
  return null;
}

/**
 * Get auth headers for making requests.
 * @returns Auth headers for HTTP requests.
 */
export const getAuthHeaders = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return { "Authorization": `Bearer ${token}` };
  }

  return {};
}

/**
 * Helper method for determining whether a user is authenticated.
 * @returns If user has valid token.
 */
export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token");

  if (token) {
    const payloadBase64 = token.split('.')[1];
    const decodedJson = Buffer.from(payloadBase64, 'base64').toString();
    const exp = (JSON.parse(decodedJson)).exp
    return Date.now() < exp * 1000;
  }
  return false;
}
