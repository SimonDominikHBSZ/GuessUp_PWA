import Card from "./Card";

export default function Categories() {
  const names = {
    Animals: "#009B72",
    "Animation Series": "red",
    Anime: "magenta",
    Brands: "yellow",
    Countries: "purple",
    Food: "green",
    "Harry Potter": "#01BAEF",
    "Horror Movies": "crimson",
    "Magyar Zenek": "burlywood",
    Movies: "mediumseagreen",
    Music: "#725AC1",
    Sport: "#226F54",
    "SuperHeroes & Villains": "#E98A15",
    "Videogame Characters": "#FF4365",
    Videogames: "#EAF27C",
  };

  return (
    <div id="Category-cont">
      <div id="Category-header">
        <h1>Decks</h1>
      </div>
      <div id="Category-body">
        {Object.keys(names).map((e, index) => (
          <Card
            key={index}
            title={e.includes(" ") ? e.replace(" ", "\n") : e}
            bgColor={names[e]}
          ></Card>
        ))}
      </div>
    </div>
  );
}
