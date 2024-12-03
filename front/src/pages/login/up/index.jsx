import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import "./styles.css"; 

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/create_user/", {
        username: formData.username,
        password: formData.password,
      });

      if (response.status === 201) {
        setSuccessMessage("Cadastro realizado com sucesso! Faça login.");
        setErrorMessage("");

        localStorage.setItem("username", formData.username);

        // Redirecionar para a página de login
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      setErrorMessage("Erro ao cadastrar. Tente um usuário diferente.");
      setSuccessMessage("");
    }
  };

  return (
    <body className="body-up">
      <div className="container">
        <div className="left-section">
          <h1>CRIE SUA CONTA NA SMART CITY</h1>
          <p>Ao se cadastrar, você terá acesso exclusivo a dados e funcionalidades que transformam sua experiência em uma cidade inteligente. Personalize sua navegação, monitore os sensores e participe ativamente na construção de um ambiente mais eficiente e sustentável.</p>
        </div>
        <div className="right-section">
          <h2>Cadastro</h2>
          {errorMessage && <p className="error">{errorMessage}</p>}
          {successMessage && <p className="success">{successMessage}</p>}
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Usuário"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-button">Cadastrar</button>
          </form>
          <p>
            Já tem uma conta?{" "}
            <a href="http://localhost:3000/" className="login-link">
              Faça login
            </a>
          </p>
        </div>
      </div>
    </body>
  );
};

export default Signup;
