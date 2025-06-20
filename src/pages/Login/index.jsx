import React, { useState } from "react";
import { supabase } from './../../supabaseClient';
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setErro("");
    setMsg("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      setErro("❌ Erro: " + error.message);
    } else {
      setMsg("✅ Login realizado com sucesso!");
      console.log("Sessão:", data.session);
      window.location.href = "/home";
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button type="submit">Entrar</button>

        <p className={styles.linkText}>
          Não tem uma conta? <a href="/register">Cadastre-se</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
