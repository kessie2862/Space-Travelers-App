import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missionSlice';
import './styles/Missions.css';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission.missions);
  const joinedMissions = useSelector((state) => state.mission.joinedMissions);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/missions');
        const data = await response.json();
        dispatch(setMissions(data));
      } catch (error) {
        console.error('Error fetching missions:', error);
      }
    };

    fetchMissions();
  }, [dispatch]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  const isMissionJoined = (missionId) => joinedMissions
    .some((mission) => mission.mission_id === missionId);

  return (
    <div className="table-container">
      <table className="missions-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th rowSpan="3">Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="missions-title">{mission.mission_name}</td>
              <td className="missions-description">{mission.description}</td>
              <td>
                <div className="status-container">
                  <span
                    className={`status ${
                      isMissionJoined(mission.mission_id) ? 'active' : ''
                    }`}
                    style={{
                      backgroundColor: isMissionJoined(mission.mission_id)
                        ? '#0290ff'
                        : 'grey',
                    }}
                  >
                    {isMissionJoined(mission.mission_id)
                      ? 'ACTIVE MEMBER'
                      : 'NOT A MEMBER'}
                  </span>
                </div>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => (isMissionJoined(mission.mission_id)
                    ? handleLeaveMission(mission.mission_id)
                    : handleJoinMission(mission.mission_id))}
                  className={`join-button ${
                    isMissionJoined(mission.mission_id) ? 'active' : ''
                  }`}
                  style={{
                    border: isMissionJoined(mission.mission_id)
                      ? '2px solid red'
                      : '2px solid grey',
                    background: 'transparent',
                    color: isMissionJoined(mission.mission_id) ? 'red' : 'grey',
                  }}
                >
                  {isMissionJoined(mission.mission_id)
                    ? 'Leave Mission'
                    : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
