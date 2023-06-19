import "./App.scss";
import { ClassComponent } from "./components/ClassComponent";
import { FunctionComponent } from "./components/FunctionComponent";
import { Profile } from "./components/Profile";

// Zadanie nr 1
// Stworzyć komponent main -> zawiera komponent Title (h1) oraz komponent artykuł (article)
// Stworzyć komponent footer -> informacje o stronie, autor, nazwa kursu, data
// komponenty powinny zawierac podstawowe style

const App = () => {
  const titleText = "tytul naszej strony";
  const list = ["home", "contact", "gallery", "cos"];
  const profileList = [
    {
      _id: '123',
      username: "J Kowalski",
      tag: "Admin",
      location: "Warsaw",
      phone: "+481231231232",
      avatar: "",
      stats: [],
      isCollapsed: false,
    },
    {
      username: "J Kowalski",
      tag: "Admin",
      location: "Warsaw",
      phone: "+481231231232",
      avatar: "",
      stats: [],
      isCollapsed: false,
    },
    {
      username: "J Kowalski",
      tag: "Admin",
      location: "Warsaw",
      phone: "+481231231232",
      avatar: "",
      stats: [],
      isCollapsed: false,
    },
  ]

  const prop = {
    title: titleText,
    list,
  };

  return (
    <div className="App">
      {/* <ClassComponent />
      <FunctionComponent /> */}
      <Profile />
    </div>
  );
};

export default App;
