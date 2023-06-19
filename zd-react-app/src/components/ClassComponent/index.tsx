import { ChangeEvent, Component } from "react";

type ClassComponentType = {
  header: string;
};

export class ClassComponent extends Component<{}, ClassComponentType> {
  constructor(props: any) {
    super(props);
    this.state = {
      header: "Komponent klasowy z this.state",
    };
  }

  handleHeader(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      header: e.target.value
    })
  }

  render() {
    const {header} = this.state;

    return (
        <h1>{header}</h1>
    );
  }
}
