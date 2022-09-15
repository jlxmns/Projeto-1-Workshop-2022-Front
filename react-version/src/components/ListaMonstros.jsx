import { Fragment } from "react";

const ListaMonstros = (props) => {

    const dados = props.dados;

    return (
        <Fragment>
        {dados.map((objeto) => {
            return <article key={objeto.id} className="pokemons">
            <img src={"https://robohash.org/" + objeto.id + "?set=set2"} alt="Nome" />
            <div>
                <h2>{objeto.name}</h2>
                <p>{objeto.email}</p>
            </div>
            </article>
        })
        }
        </Fragment>
    )
}

export default ListaMonstros;