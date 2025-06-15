import React, { useState } from "react";
import { supabase } from './../../supabaseClient';
import styles from "./Register.module.css";

function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    setErro("");
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);

    const { data, error } = await supabase.auth.signUp({
      email,
      password: senha,
    });

    if (error) {
      console.log('Erro: ' + error.message);
    } else {
      console.log('✅ Registro criado! Verifique seu e-mail.');
    }
  };

  return (
    <div className={styles.registerContainer}>
      <form className={styles.registerForm} onSubmit={handleRegister}>
        <h2>Criar Conta</h2>

        {erro && <p className={styles.errorMessage}>{erro}</p>}

        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          placeholder="Seu nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="exemplo@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          placeholder="Crie uma senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <label htmlFor="confirmarSenha">Confirmar Senha</label>
        <input
          type="password"
          id="confirmarSenha"
          placeholder="Confirme sua senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          required
        />

        <button type="submit">Cadastrar</button>

        <p className={styles.linkText}>
          Já tem uma conta? <a href="/login">Entrar</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
