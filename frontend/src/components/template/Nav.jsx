import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";
import iconParty from "../../assets/icons/party2.png";
import { useNavigate } from "react-router-dom";

export default (props) => {
  const navigate = useNavigate();

  const sair = () => {
    localStorage.clear();
    navigate("/");
    location.reload();
  };

  return (
    <aside className="menu-area">
      {/*Refatorar */}
      <nav className="menu">
        <Link to="/home">
          <i className="fa fa-home"></i> Início
        </Link>
        <Link to="/festas" id="festa">
          <img src={iconParty} alt="icone festa" /> Festas
        </Link>
        <Link to="/Chat-page" className="chat">
          <i className="fa fa-comments" aria-hidden="true"></i> Chat
        </Link>

        <div onClick={sair}>
          <i className="fa fa-sign-out"></i> Sair
        </div>
      </nav>
    </aside>
  );
};
