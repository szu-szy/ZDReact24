import "./App.scss";
import { Profile } from "./components/Profile";
import { ProfileList } from "./components/ProfileList";
import { profileList } from "./utils/mockUsers";

const App = () => {
  let searchTerm = '';
  const handleSearch = () => {

  }

  return (
    <div className="App">
      {/* 1 opcja uzycia mapy */}
      <ProfileList list={profileList}/>
      
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
};

export default App;
