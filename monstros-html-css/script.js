let dados = [];
   /* {
      id: 1,
      name: "Detetive Pikachu",
      email: "pikachu4ever@april.biz",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.thegamerimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2019%2F07%2FDetective-Pikachu.jpg&f=1&nofb=1",
    },
    {
      id: 2,
      name: "Pheromosa",
      email: "faster@thanlight.tv",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2F4725%2Ff%2F2017%2F192%2F4%2F7%2Fpheromosa_by_sol_lar_bink-dbfx9oh.png&f=1&nofb=1",
    },
    {
      id: 3,
      name: "Frosmoth",
      email: "frostie@yesenia.net",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F66.media.tumblr.com%2F4bb2b6bcd5510f3f71277714b50fc2b7%2Fcc8ae77c864772c5-68%2Fs2048x3072%2Fd430137245d984c5fcbda0b218b4a860b3716942.png&f=1&nofb=1",
    },
    {
      id: 4,
      name: "Chandelure",
      email: "light@fixture.org",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fpokemon%2Fimages%2Fe%2Fea%2FChandelure_BW071.png%2Frevision%2Flatest%3Fcb%3D20160618073046&f=1&nofb=1",
    },
    {
      id: 5,
      name: "Gengar",
      email: "nightmare@corp.co",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic2.thegamerimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F11%2Fashs-gengar.jpg&f=1&nofb=1",
    },
  ]; */

  //Fetch request
  /* fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      dados = json;
      console.log(json);

      //Elementos HTML

      elementoH1.innerHTML = `${dados.length} pokemons (rip pokemons)`

      //Criando lista de usuários

      for(let objeto of dados) {
        const elementoArticle = document.createElement('article');
        elementoArticle.setAttribute('class', 'pokemons');

        elementoArticle.innerHTML = `
          <img src="https://robohash.org/1${objeto.id}?set=set2" alt="${objeto.name}">
          <div>
              <h2>${objeto.name}</h2>
              <p>${objeto.email}</p>
          </div>
        `;

        elementoH1.insertAdjacentElement('afterend', elementoArticle);
      }
    }); */

  //Variáveis e Constantes

  const elementoH1 = document.querySelector('h1');
  const btn = document.querySelector('.btn-azul');

  //Criando função que faz o botão deletar a lista de usuários

  btn.addEventListener("click", () => {
    let articles = document.querySelectorAll('article');
    for(let i = 0; i < articles.length; i++) {
      articles[i].remove();
    }
    dados = [];
    elementoH1.innerHTML = `${dados.length} pokemons`
  })

  async function renderizar() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const dadosJSON = await response.json()
    dados = dadosJSON

    //Elementos HTML

    elementoH1.innerHTML = `${dados.length} pokemons (rip pokemons)`

    //Criando lista de usuários

    for(let objeto of dados) {
      const elementoArticle = document.createElement('article');
      elementoArticle.setAttribute('class', 'pokemons');

      elementoArticle.innerHTML = `
        <img src="https://robohash.org/1${objeto.id}?set=set2" alt="${objeto.name}">
        <div>
            <h2>${objeto.name}</h2>
            <p>${objeto.email}</p>
        </div>
      `;

      elementoH1.insertAdjacentElement('afterend', elementoArticle);
    }
  }

  renderizar();