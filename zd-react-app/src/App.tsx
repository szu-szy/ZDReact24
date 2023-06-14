import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Header } from "./components/Header";

// Zadanie nr 1
// Stworzyć komponent main -> zawiera komponent Title (h1) oraz komponent artykuł (article)
// Stworzyć komponent footer -> informacje o stronie, autor, nazwa kursu, data
// komponenty powinny zawierac podstawowe style

const App = () => {
  const titleText = "tytul naszej strony";
  const list = ["home", "contact", "gallery", "cos"];

  const prop = {
    title: titleText,
    list,
  };

  return (
    <div className="App">
      <Header {...prop} />
      <Header title={titleText} list={list} />
      <main>
        <section>
          <h2>Sekcja 1</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            corrupti aliquid commodi repellat nobis voluptatibus ipsum minima
            blanditiis quam beatae quos nostrum nihil, ducimus harum temporibus
            hic aperiam, asperiores doloremque.
          </p>
        </section>
      </main>
      <footer>
        <span>Footer</span>
      </footer>
    </div>
  );
};

export default App;
