import useFetchData from "./fetchData";

const Monstro = (props) => {
    const objeto = props.dados;
    console.log(objeto);
  
    return (
      <article key={objeto.id} className="pokemons">
        <img src={`https://robohash.org/${objeto.id}?set=set2`} alt={objeto.name} />
        <div>
          <h2>{objeto.name}</h2>
          <p>{objeto.email}</p>
        </div>
      </article>
    );
  };
  
  export default Monstro;