import { BaseApiClient } from "./BaseApiClient";
import {
  LoginResponse,
  UserResponse,
  RegisterPayload,
} from "../test-data/types";

export class AuthApiClient extends BaseApiClient {
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await this.request.post("/users/login", {
      data: { email, password },
    });

    if (!response.ok()) {
      throw new Error(`Login Failed with status ${response.status()}`);
    }

    const responseBody = await response.json();
    return responseBody;
  }

  async getCurrentUser(token: string): Promise<UserResponse> {
    const response = await this.request.get("/users/me", {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    if (!response.ok()) {
      throw new Error(
        `Get current user failed with status ${response.status()}`,
      );
    }

    const responseBody = await response.json();
    return responseBody;
  }

  async register(payload: RegisterPayload): Promise<UserResponse> {
    const response = await this.request.post("/users/register", {
      data: payload,
    });
    if (!response.ok()) {
      const errorBody = await response.text();
      throw new Error(
        `Register failed with status ${response.status()}: ${errorBody}`,
      );
    }
    return await response.json();
  }
}
