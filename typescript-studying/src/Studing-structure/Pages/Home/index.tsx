import "./styles.css";
import { Link } from "react-router-dom";

const PageHome = () => {
  return (
    <div className="home-container">
      <h1>Selecione uma opção:</h1>
      <Link to="/array">
        <button>Elementos unicos de um Array</button>
      </Link>

      <Link to="/map">
        <button>Map</button>
      </Link>
      <Link to="stack">
        <button>Estrutura de dados pilha</button>
      </Link>
    </div>
  );
};

export default PageHome;
