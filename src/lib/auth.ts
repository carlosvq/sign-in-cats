"use server";

import { cookies } from "next/headers";

import { fetchClient } from "./api";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 14);

  const apiClient = fetchClient();

  const data = await apiClient
    .post("auth/login", {
      email: user.email,
      password: user.password,
    })
    .then((res) => res.json());

  cookies().set("session", `Bearer ${data.data.token}`, {
    expires,
    httpOnly: true,
    sameSite: "lax",
  });

  redirect("/cats");
}

export async function signup(formData: FormData) {
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const apiClient = fetchClient();

  await apiClient
    .post("auth/signup", {
      email: user.email,
      password: user.password,
    })
    .then((res) => res.json());

  redirect("/sign-in");
}
