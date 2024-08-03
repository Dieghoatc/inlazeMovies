import { User } from "../types";

export const loginService = async (user: User): Promise<[Error?, User?]> => {
  const { email, password } = user;

  try {
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) return [new Error(`Error with the login: ${res.statusText}`)];

    const user = (await res.json()) as User;

    return [undefined, user];
  } catch (error) {
    if (error instanceof Error) return [error];
  }
  throw Error;
};
