export default function BeerCard({ name, image, avgRating, setSelectedBeer}) {
  return (
    <div className="beer-card" onClick={() => {setSelectedBeer(name)}}>
      <div className="beer-image">
        <img src={image} alt={name} 
          onError={(e) => {
            e.target.onError = null;
            e.target.src = "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png"
          }}
        />
      </div>
      <h2>{name}</h2>
      <p style={{ marginTop:0, overflow: "hidden", width: avgRating + "em"}}>★★★★★</p>
    </div>
  )
}
