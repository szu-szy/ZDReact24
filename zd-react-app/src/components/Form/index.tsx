import React, { ChangeEvent } from "react";

type FormProps = {
  comment: string;
  username: string;
};

export class Form extends React.Component<{}, FormProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      comment: "",
      username: "",
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    } as {[K in keyof FormProps]: FormProps[K]});
  }

  render() {
    const { comment, username } = this.state;

    return (
      <form>
        <input
          type="text"
          name="comment"
          placeholder="comment"
          value={comment}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={this.handleChange}
        />
        <button type="submit">Utwórz</button>
      </form>
    );
  }
}
