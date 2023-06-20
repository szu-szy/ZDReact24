import { Component } from "react";

export type ProfileType = {
  _id?: string;
  username: string;
  tag: string;
  location: string;
  phone: string;
  avatar?: string;
  stats: string[];
  isCollapsed?: boolean; // jezeli nie podamy to === undefined
};

export class Profile extends Component<{}, ProfileType> {
  constructor(props: ProfileType) {
    super(props);
    // pobranie danych z propsów
    const {
      username,
      tag,
      location,
      phone,
      avatar,
      stats,
      isCollapsed
    } = props

    this.state = {
      username,
      tag,
      location,
      phone,
      avatar,
      stats,
      isCollapsed,
    };
  }

  handleOpen = () => {
    this.setState({
      isCollapsed: true,
    })
  }

  handleClose = () => {
    this.setState({
      isCollapsed: false,
    })
  }

  toggleCollapse = () => {
    this.setState(prev => ({
      isCollapsed: !prev.isCollapsed,
    }))
  }

  render() {
    const { username, tag, location, phone, avatar, stats, isCollapsed } =
      this.state;

    return (
      <div>
        <h2>{username}</h2>
        <button onClick={this.toggleCollapse}>
          {isCollapsed ? 'Zwiń' : 'Rozwiń'}
        </button>
        {isCollapsed && (
          <div>
            <p>{tag}</p>
            <p>{location}</p>
            <p>{phone}</p>
            {stats.length > 0 ? (
              <ul>
                {stats.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : null}
            {avatar ? <img src={avatar} alt="profile" /> : <p>No Avatar</p>}
          </div>
        )}
      </div>
    );
  }
}
