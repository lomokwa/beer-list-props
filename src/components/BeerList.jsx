import { useState } from "react";
import BeerCard from "./BeerCard";

export default function BeerList() {
  const [beers, setBeers] = useState();

  const getBeers = () => {
    fetch("https://api.sampleapis.com/beers/ale")
      .then(res => res.json())
      .then(setBeers)
      .catch(alert)
  }

  return (
    <main>
      <button onClick={getBeers}>Find Beers</button>
      <section className="beer-list">
        {!beers 
          ? <h2>Loading...</h2>
          : beers.map((beer) => (
            <BeerCard 
              key={beer.id} 
              name={beer.name} 
              avgRating={beer.rating.average}
              image={beer.image}
            />
          ))
        }
      </section>
    </main>
  )
}
