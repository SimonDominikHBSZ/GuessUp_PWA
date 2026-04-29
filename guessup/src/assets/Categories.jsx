import Card from "./Card";

export default function Categories() {
  const names = {
    Animals: "blue",
    "Animation Series": "red",
    Anime: "magenta",
    Brands: "yellow",
    Countries: "purple",
    Food: "green",
    "Harry Potter": "darkblue",
    "Horror Movies": "crimson",
    "Magyar Zenek": "burlywood",
    Movies: "mediumseagreen",
    Music: "",
    Sport: "",
    "SuperHeroes & Villains": "",
    "Videogame Characters": "",
    Videogames: "",
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
