import { ChangeEvent, useEffect, useInsertionEffect, useState } from "react";
import "./App.scss";
import { Profile, ProfileType } from "./components/Profile";
import { ProfileList } from "./components/ProfileList";
import { SearchForm } from "./components/SearchForm";
import { profileList } from "./utils/mockUsers";
import React from "react";
import { Form } from "./components/Form";
import { Counter } from "./components/Counter";
import { Input } from "./components/Input";
import { FunctionComponent } from "./components/FunctionComponent";
import { Timer } from "./components/Timer";
import { ProductList } from "./components/ProductList";
import { UserForm } from "./components/UserForm";

type AppProps = {
  searchTermValue: string;
  usersList: ProfileType[];
};

const App = () => {
	const [value, setValue] = useState(0);
	// useEffect bez tablicy zaleznosci
	// wywola sie za kazdym renderem komponentu
	// useEffect(() => {
	// 	console.log('render!');
	// });

	// useEffect z pustą tablica zaleznosci
	// wykonuje się on tylko po zamontowaniu komponentu
	useEffect(() => {
		// console.log('Komponent został zamontowany');
	}, []);

	// useEffect z tablica zaleznosci zawierającą zmienna value
	// wykona się za kazdym razem gdy zmienni sie wartosc zmiennej value
	useEffect(() => {
		// console.log(`value zmienione ${value}`)
	}, [value]);


  return <div className="App">
		{/* <h1>test</h1>
		<h2>Value: {value}</h2>
		<button onClick={() => setValue(prev => prev + 1)}>Dodaj 1</button> */}
		{/* <FunctionComponent /> */}
		{/* <Timer /> */}
		{/* <ProductList /> */}
		<UserForm />
	</div>;
};

export default App;
