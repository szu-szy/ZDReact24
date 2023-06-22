import { ChangeEvent, Component } from "react";

type CounterType = {
  count: number;
  name: string;
};

export class Counter extends Component<{}, CounterType> {
  state = {
    count: 0,
    name: '',
  };
  intervalID: any = null;

  handleDecrement = () =>
    this.setState((prev) => ({
      count: prev.count - 1,
    }));

  handleIncrement = () =>
    this.setState((prev) => ({
      count: prev.count + 1,
    }));

  handleInput = (e: ChangeEvent<HTMLInputElement>) => this.setState({
    name: e.target.value,
  })

  componentDidMount(): void {
    console.log('komponent zamontowany');
    this.intervalID = setInterval(() => {
      console.log('interval!')
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<CounterType>): void {
    if(prevState.count !== this.state.count) {
      console.log('Count zostal zaktualizowany!');
    }
    if(prevState.name !== this.state.name) {
      console.log('name zaktualizowany!');
    }
  }

  componentWillUnmount(): void {
    console.log('unmount');
    clearInterval(this.intervalID);
  }

  render() {
    const { count, name } = this.state;
    return (
      <div>
        <button onClick={this.handleDecrement}>-1</button>
        <span>{count}</span>
        <button onClick={this.handleIncrement}>+1</button>
        <input type="text" placeholder="name" value={name} onChange={this.handleInput} />
      </div>
    );
  }
}
