import { ChangeEvent } from "react";
import "./App.scss";
import { Profile } from "./components/Profile";
import { ProfileList } from "./components/ProfileList";
import { SearchForm } from "./components/SearchForm";
import { profileList } from "./utils/mockUsers";
import React from "react";

type AppProps = {
  searchTermValue: string;
};

class App extends React.Component<{}, AppProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchTermValue: "",
    };
  }

  handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchTermValue: event.target.value,
    });
  };

  render() {
    const { searchTermValue } = this.state;

    return (
      <div className="App">
        {/* 1 opcja uzycia mapy */}
        <SearchForm
          searchTerm={searchTermValue}
          handleSearchTerm={this.handleSearch}
        />
        <ProfileList list={profileList} searchTerm={searchTermValue} />

        {/* 2 opcja uzycia mapy */}
        {/* {profileList.map(profile => (
          <div>
            <Profile {...profile} />
          </div>
        ))} */}

        {/* 3 opcja uzycia mapy */}
        {/* {profileList.map(profile => {
          return <Profile {...profile}/>
        })} */}
      </div>
    );
  }
}

export default App;
