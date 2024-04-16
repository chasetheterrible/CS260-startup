import React from "react";
import "./about.css";

export function About(props) {
  const [joke, setJoke] = React.useState("Loading...");
  const [imageUrl, setImageUrl] = React.useState("");

  React.useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random?category=dev")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value);
      })
      .catch();
  }, []);

  let imgEl = "";
  if (imageUrl) {
    imgEl = <img src={imageUrl} alt="stock background" />;
  }

  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        <div id="picture" class="picture-box">
          <img
            src="https://media.istockphoto.com/id/952655342/photo/padre-bay-rock-in-lake-powell.jpg?s=612x612&w=0&k=20&c=G0TiUNmV28ObzmK7foI3AjDz0Vnv2DDIGY3J-PmYEBw="
            alt="random"
          />
        </div>

        <p>
          Paired up is timed memory game where you tap or click on two tiles to
          reveal their number. The goal is to match the two tiles. If the tiles
          do not match they will flip back over, and you must try again until
          all tiles have been matched. The faster you match the tiles the better
          your score will be.
        </p>

        <div className="quote-box bg-light text-dark">
          <p className="joke">{joke}</p>
        </div>
      </div>
    </main>
  );
}
