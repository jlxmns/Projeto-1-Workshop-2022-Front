let dados = [
    {
      id: 1,
      name: "Bertie Yates",
      email: "Sincere@april.biz",
      image: "https://robohash.org/1?set=set2",
    },
    {
      id: 2,
      name: "Hester Hogan",
      email: "Shanna@melissa.tv",
      image: "https://robohash.org/2?set=set2",
    },
    {
      id: 3,
      name: "Larry Little",
      email: "Nathan@yesenia.net",
      image: "https://robohash.org/3?set=set2",
    },
    {
      id: 4,
      name: "Sean Walsh",
      email: "Julianne.OConner@kory.org",
      image: "https://robohash.org/4?set=set2",
    },
    {
      id: 5,
      name: "Lola Gardner",
      email: "Lucio_Hettinger@annie.ca",
      image: "https://robohash.org/5?set=set2",
    },
  ];

  const elementoH1 = document.querySelector('h1');

  for(let items of dados) {
    const elementoArticle = document.createElement('article');
    elementoArticle.setAttribute('class', 'pokemons');

    elementoArticle.innerHTML = `
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Frwknyu50jmw11.png&f=1&nofb=1" alt="pokemon">
      <div>
          <h2>nome</h2>
          <p>email</p>
      </div>
    `;

    elementoH1.insertAdjacentElement('afterend', elementoArticle);


  }