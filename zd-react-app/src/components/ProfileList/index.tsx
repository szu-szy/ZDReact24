import { Profile, ProfileType } from "../Profile"

type ProfileListProps = {
  list: ProfileType[];
  // handleSubmit: () => void;
}

export const ProfileList = ({ list }: ProfileListProps) => (
  list.map(profile => <Profile {...profile}/>)
)