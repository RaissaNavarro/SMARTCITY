import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import LogoImg from "../../images/Logo.png"
import UserImg from "../../images/UserIcon.png"
import ChartComponent from "../../componentes/chart.component";

// Importando as imagens


const Home = () => {
    const [token, setToken] = useState(localStorage.getItem("accessToken"));
    const [loggedInUser, setLoggedInUser] = useState("");

    useEffect(() => {
        // Recupera o nome do usuário logado do localStorage
        const username = localStorage.getItem("username");
        if (username) {
            setLoggedInUser(username);
        }
    }, []);

    return (
        <div className="home-container">
            {/* Cabeçalho */}
            <header className="header">
                <div className="header-left">
                    <img src={LogoImg} alt="Smart City Logo" className="logo" />
                </div>
                <nav className="header-nav">
                    <Link to="/">LOGIN</Link>
                    <Link to="/areas">ÁREAS</Link>
                    <Link to="/dashboard">DASHBOARD</Link>
                    <Link to="/sensores">SENSORES</Link>
                </nav>
                <div className="header-user">
                    <div className="login-icon">
                        <p>{loggedInUser}</p> {/* Exibe o nome do usuário logado */}
                    </div>
                    <img src={UserImg} alt="User Icon" className="user-icon" />
                </div>
            </header>

            {/* Conteúdo principal */}
            <main className="main-content">
                <h1 className="title">SMART CITY</h1>
                <div className="sensor-list">
                    {/* Sensor de Temperatura */}
                    <div className="sensor-card">
                        <Link to="/temperatura" className="btn-link">
                            Temperatura
                        </Link>
                        <p>
                            O sensor de temperatura captura as informações relacionadas à temperatura.
                        </p>

                    </div>

                    {/* Sensor de Contador */}
                    <div className="sensor-card">
                        <Link to="/contador" className="btn-link">
                            Contador
                        </Link>
                        <p>
                            O sensor de contador monitora a presença de pessoas ou eventos em tempo real.
                        </p>
                    </div>

                    {/* Sensor de Luminosidade */}
                    <div className="sensor-card">
                        <Link to="/luminosidade" className="btn-link">
                            Luminosidade
                        </Link>
                        <p>
                            O sensor de luminosidade detecta a intensidade da luz no ambiente.
                        </p>

                    </div>

                    {/* Sensor de Umidade */}
                    <div className="sensor-card">
                        <Link to="/umidade" className="btn-link">
                            Umidade
                        </Link>
                        <p>
                            O sensor de umidade mede a quantidade de vapor d’água no ar.
                        </p>
                    </div>
                    <div className="chart-container">
                        <h2>Dados em Gráfico</h2>
                        <ChartComponent />
                    </div>
                </div>
            </main>

            {/* Rodapé */}
            <footer className="footer">
                <p>SMARTCITY © 2024.</p>
            </footer>
        </div>
    );

};

export default Home;