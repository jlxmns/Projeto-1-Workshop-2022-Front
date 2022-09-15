import React, { useEffect, useState } from "react";

function ChuckNorris() {

    const [facts, setFacts] = useState('Norris Facts');

    useEffect(() => {
        getFact();
      }, []);

    const getFact = async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        setFacts(data.value);
    }

    return (
        <div className = "container">
          <h1>Chuck Norris Facts</h1>
          <p className="joke">{facts}</p>
          <button type="button" className="btn" onClick={getFact}>Get Another Fact</button>
        </div>
      );
}

export default ChuckNorris;