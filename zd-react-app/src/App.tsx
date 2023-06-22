import { ChangeEvent } from "react";
import "./App.scss";
import { Profile, ProfileType } from "./components/Profile";
import { ProfileList } from "./components/ProfileList";
import { SearchForm } from "./components/SearchForm";
import { profileList } from "./utils/mockUsers";
import React from "react";
import { Form } from "./components/Form";
import { Counter } from "./components/Counter";

type AppProps = {
	searchTermValue: string;
	usersList: ProfileType[];
};

class App extends React.Component<{}, AppProps> {
	constructor(props: any) {
		super(props);
		this.state = {
			searchTermValue: "",
			usersList: profileList,
		};
	}

	handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			searchTermValue: event.target.value,
		});
	};

	handleAddUser = (user: ProfileType) => {
		console.log(user)
		this.setState((prev) => ({ usersList: [...prev.usersList, user] }));
		setTimeout(()=>{console.log(this.state)},2000)
	};

	render() {
		const { searchTermValue } = this.state;

		return (
			<div className="App">
				<Counter />
				{/* <Form handleAddUser={this.handleAddUser}/>
				<ProfileList list={profileList} searchTerm={searchTermValue} /> */}
			</div>
		);
	}
}

export default App;