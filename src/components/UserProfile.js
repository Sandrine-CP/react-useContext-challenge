import React from 'react';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function UserProfile() {
  const { isOnline, setIsOnline } = useContext(UserContext);

  return (
    <>
      <div>User is : {isOnline ? 'en ligne' : 'hors ligne'}</div>

      <button
        onClick={() =>
          setIsOnline((currentIsOnlineValue) => !currentIsOnlineValue)
        }
      >
        click to change user status
      </button>
    </>
  );
}

export default UserProfile;
