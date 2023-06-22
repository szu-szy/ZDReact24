import { ChangeEvent, Component, FormEvent } from "react";
import { ProfileType } from "../Profile";

type FormProps={
  handleAddUser: (user: ProfileType) => void
}

export class Form extends Component<FormProps, ProfileType> {
	constructor(props: any) {
		super(props);
		this.state = {
			username: "",
			tag: "",
			location: "",
			phone: "",
			avatar: "",
			stats: [],
		};	
	}

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState((prev)=>({...prev,[name]:value}));
  }

  handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
	const newUser= {...this.state, _id: "1234"}
	this.props.handleAddUser(newUser)
  }

	render() {
		const { username, tag, location, phone, avatar } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					name="username"
					placeholder="username"
					value={username}
          onChange={this.handleChange}
				/>
				<input type="text" name="tag" placeholder="tag" value={tag} onChange={this.handleChange} />
				<input
					type="text"
					name="location"
					placeholder="location"
					value={location}
          onChange={this.handleChange}
				/>
				<input type="text" name="phone" placeholder="phone" value={phone} onChange={this.handleChange} />
				<input type="text" name="avatar" placeholder="avatar" value={avatar} onChange={this.handleChange} />
        <button type="submit">Dodaj profil</button>
			</form>
		);
	}
}