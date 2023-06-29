import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Profile.css';

function Profile() {
  const rocketItems = useSelector((state) => state.rocket.rockets);
  const bookedRockets = rocketItems.filter((rocket) => rocket.reserved);
  const joinedMissions = useSelector(
    (state) => state.mission.joinedMissions,
  );

  return (
    <div className="profile-container">
      <div className="missions-profile">
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
      <div className="rockets-profile">
        <h2>My Rockets</h2>
        <div className="booked-rockets">
          {bookedRockets.length === 0 ? (
            <p>No rockets booked.</p>
          ) : (
            <ul>
              {bookedRockets.map((rocket) => (
                <li key={rocket.id}>{rocket.rocket_name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
