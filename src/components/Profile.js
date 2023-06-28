import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Profile.css';

function Profile() {
  const joinedMissions = useSelector((state) => state.mission
    .missions.filter((mission) => mission.reserved));

  return (
    <div className="profile-container">
      <h2>My Missions</h2>
      <div className="joined-missions">
        {joinedMissions.length === 0 ? (
          <p>No missions joined.</p>
        ) : (
          <ul>
            {joinedMissions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Profile;
