"use client";

import { useState } from "react";

export default function LoginPage() {
  const [credentials, setCredientials] = useState({
    email: "",
    password: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCredientials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value, event.target.name);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(credentials);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="Email"
          type="email"
          placeholder="Correo"
          onChange={handleChange}
        />
        <input
          name="Password"
          type="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}
