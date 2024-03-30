import Gravatar from 'react-gravatar';

function UserProfile() {
  return (

      <Gravatar email="user@example.com" size={200} default="identicon" />
  );
}

export default UserProfile;