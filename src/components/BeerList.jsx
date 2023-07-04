import { useState, useEffect } from "react";
import BeerCard from "./BeerCard";

export default function BeerList() {
  const [beers, setBeers] = useState();
  const [selectedBeer, setSelectedBeer] = useState();

  const getBeers = () => {
    fetch("https://api.sampleapis.com/beers/ale")
      .then(res => res.json())
      .then(setBeers)
      .catch(alert)
  }

  useEffect(() => { // Runs once on mount
    getBeers()
  }, [])

  useEffect(() => {
    document.title = selectedBeer || "BEER"; // Triggering a side-effect when selectedBeer changes state.
  }, [selectedBeer])
  
  useEffect(() => { // Right before component unmounts
    return () => {
      alert("BEER!")
    }
  }, []);

  return (
    <main>
      {selectedBeer && <h2>Selected: {selectedBeer}</h2>}
      <section className="beer-list">
        {!beers 
          ? <h2>Loading...</h2>
          : beers.map((beer) => (
            <BeerCard 
              key={beer.id} 
              name={beer.name} 
              image={beer.image}
              avgRating={beer.rating.average}
              setSelectedBeer={setSelectedBeer}
            />
          ))
        }
      </section>
    </main>
  )
}
