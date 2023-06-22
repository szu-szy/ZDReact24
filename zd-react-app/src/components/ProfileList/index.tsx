import { ReactNode } from "react";
import { Profile, ProfileType } from "../Profile";
import React from "react";

type ProfileListProps = {
  list: ProfileType[];
  searchTerm: string;
};

export class ProfileList extends React.Component<ProfileListProps, {}> {

  componentDidUpdate(prevProps: Readonly<ProfileListProps>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log('updated')
    console.log(this.props.list)
  }
render(): ReactNode {
  return (
    <div>
      {this.props.list
        .filter(({ username }) => username.includes(this.props.searchTerm))
        .map((profile) => (
          <Profile key={profile._id} {...profile} />
        ))}
    </div>
  );
}
};
