import { useEffect, useState } from "react";
import ListaMonstros from "./components/ListaMonstros";
import Monstro from "./components/Monstro";

function App() {

  const [dados, setDados] = useState([]);
  const apagarDados = () => {setDados([])};

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((dadosAPI) => setDados(dadosAPI.slice(0, 5)))
  }, [])

  return (
    <main>
        <section className ="container">
            <h1>{dados.length} Pokemons (Rip)</h1>

            { /* <ListaMonstros dados = {dados} /> */ }
            <Monstro dados = {dados} />

            <button className="btn-azul" type="button" onClick={apagarDados}>
            Limpar Pokemons
            </button>
        </section>
    </main>
  );
}

export default App;
