import { User } from "../types";

export const login = async (user: File): Promise<[Error?, User?]> => {
  const formData = new FormData();
  formData.append("user", user);

  try {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) return [new Error(`Error with the login: ${res.statusText}`)];

    const user = (await res.json()) as User;
    return [undefined, user];
  } catch (error) {
    if (error instanceof Error) return [error];
  }
  throw Error;
};
