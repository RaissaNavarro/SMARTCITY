import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // O estilo da página de login
import React, { useState } from "react"; 


const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // Hook para redirecionamento


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        username: formData.username,
        password: formData.password,
      })

      const { access, refresh } = response.data;

      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      setSuccessMessage("Login realizado com sucesso!");
      setErrorMessage("");

      // Redirecionar para a página 'home'
      navigate("/home");

    } catch (error) {
      setErrorMessage("Usuário ou senha inválidos. Tente novamente.");
      setSuccessMessage("");
    }
  };

  return (
    <body className="body-in">
      
    <div className="container">
      <div className="left-section-in">
        <h1>BEM-VINDO À SMART CITY</h1>
        <p>Faça login para acessar informações exclusivas sobre os sensores da sua cidade inteligente. Gerencie dados em tempo real, acompanhe métricas e colabore para criar um ambiente mais sustentável e eficiente.
        </p>
        
      </div>
      <div className="right-section">
      <form className="form" onSubmit={handleSubmit}>
        <div className="sing-in">
          <h2>Login</h2>
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
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
        <button type="submit" className="button-submit">Entrar</button>
        <p>
          Não tem uma conta?{" "}
          <a href="/login/up" className="signup-link">
            Cadastre-se
          </a>
        </p>

      </form>
      </div>
    </div>
    </body>
  );
};

export default Login;
